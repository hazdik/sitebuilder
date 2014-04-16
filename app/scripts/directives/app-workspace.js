
/*global angular*/

angular.module('pieologyApp')
    .directive('appWorkspace', ['$rootScope', '$window', '$filter', '$timeout', '$sce', 'vlnConfig',
        function ($rootScope, $window, $filter, $timeout, $sce, vlnConfig) {

        'use strict';

        return {
            templateUrl: 'views/app-workspace.html',
            restrict   : 'A',
            replace    : true,
            scope      : {},
            link       : function postLink(scope, element) {

                var _containerWatch,
                    scaleX = 1,
                    scaleY = 1,
                    frame = element.find('iframe'),
                    container = frame.parent()[0],
                    displayScreen = 'desktop',
                    // screen size are defined twice (here and in the css)
                    // ...but I prefer (for now) to have initial dimensions defined through a class
                    // and dynamic resizing - through a style (TT)
                    screens = {
                        'desktop': 1024,
                        'tablet': 786,
                        'mobile': 480
                    };

                function calcFrame () {
                    /*
                     @Input (none)
                     @Output (nothing returned)
                     @Purpose - update the values of scaleX and scaleY based on selected screen size

                     */
                    if (container.clientWidth < screens[displayScreen]) {
                        scaleX = scaleY = container.clientWidth / screens[displayScreen];
                        // offset is hall of the difference - scale is performed from the center of the element
                        scope.scaledOffsetLeft = (container.clientWidth - screens[displayScreen]) / 2;
                        scope.scaleRatio = $filter('number')(scaleX, 2) * 100;
                    } else {
                        scaleX = 1;
                        scaleY = 1;
                    }

                    scope.isScaled = (scaleX < 1) ? true : false;
                    scope.vlnIFrameScale = 'scale(' + scaleX + ', ' + scaleY + ')';
                }

                /*
                    Directive Scope Variables
                */
//              TODO:  D'n'D tests
//                scope.iFrameSrc = 'http://localhost:9000/views/inner.html' ;//'http://localhost:9778'; // This is a hard coded defualt, look at the vlnWorkspaceUrl.change event listener
                scope.iFrameSrc = 'http://localhost:8001'; // This is a hard coded defualt, look at the vlnWorkspaceUrl.change event listener
                scope.isFullSize = !vlnConfig.getGlobalAttrBucketState();
                scope.isStateAdd = scope.isFullSize;
                scope.displayClass = '-' + displayScreen;
                scope.scaledOffsetLeft = 0;

                calcFrame();

                scope.toggleAppAttrBucket = function () {
                    /*
                    @Input (none)
                    @Output (nothing returned)
                    @Purpose - toggle attribute bucket state

                    */
                    vlnConfig.setGlobalAttrBucketState(!vlnConfig.getGlobalAttrBucketState());
                };

                function startContainerWatch (compX, compY) {
                    /*
                     @Input compX, compY
                     @Output (nothing returned)
                     @Purpose - timeout function which will call itself or cancel if condition is met

                     */
                    _containerWatch = $timeout(function () {
                        // Do not watch container if dimensions are same
                        if (compX === container.clientWidth && compY === container.clientHeight) {
                            $timeout.cancel(_containerWatch);
                            _containerWatch = null;
                        } else {

                            var el = frame.closest('section.-site')[0];

                            vlnConfig.setWorkspaceDimensions(el.clientWidth, el.clientHeight);
                            $rootScope.$broadcast('vlnWorkspace.resize');

                            calcFrame();
                            startContainerWatch(container.clientWidth, container.clientHeight);
                        }
                    }, 1000);
                }

                startContainerWatch(container.clientWidth, container.clientHeight);

                $rootScope.$on('vlnGlobalAttrBucketState.change', function (evt, params) {
                    scope.isFullSize = !params.state; // Relates to the global app nav menu state.
                    scope.isStateAdd = scope.isFullSize;

                    if (!_containerWatch) {
                        startContainerWatch();
                    }
                });

                $rootScope.$on('vlnDisplay.change', function (evt, params) {
                    scope.displayClass = '-' + params.display;
                    displayScreen = params.display;

                    calcFrame();
                });

                $rootScope.$on('vlnWorkspaceUrl.change', function(evt, params) {
                    scope.iFrameSrc = params.url;
                });

                angular.element($window).bind('resize', function() {
                    if (!_containerWatch) {
                        startContainerWatch(container.clientWidth, container.clientHeight);
                    }
                });
            }
        };
    }]);
