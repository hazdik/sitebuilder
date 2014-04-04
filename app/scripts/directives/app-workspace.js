
/*global angular*/

angular.module('pieologyApp')
    .directive('appWorkspace', ['$rootScope', '$window', '$filter', 'vlnConfig', function ($rootScope, $window, $filter, vlnConfig) {

        'use strict';

        return {
            templateUrl: 'views/app-workspace.html',
            restrict   : 'A',
            replace    : true,
            scope      : {},
            link       : function postLink(scope, element, attrs) {

                var scaleX = 1,
                    scaleY = 1,
                    frame = element.find('iframe'),
                    container = frame.parent()[0],
                    displayScreen = 'screen',
                    // screen size are defined twice (here and in the css)
                    // ...but I prefer (for now) to have initial dimensions defined through a class
                    // and dynamic resizing - through a style (TT)
                    screens = {
                        'screen': 1024,
                        'tablet': 786,
                        'mobile': 480
                    };

                function calcFrame () {
                    if (container.clientWidth < screens[displayScreen]) {
                        scaleX =  container.clientWidth / screens[displayScreen];
                        scaleY =  container.clientWidth / screens[displayScreen];
                        // offset is hall of the difference - scale is performed from the center of the element
                        scope.scaledOffsetLeft = (container.clientWidth - screens[displayScreen]) / 2;
                        scope.scaleRatio = $filter('number')(scaleX, 2) * 100;
                    } else {
                        scaleX = 1;
                        scaleY = 1;
                    }

                    scope.isScaled = (scaleX < 1) ? true : false;
                    scope.vlnIFrameScale = "scale(" + scaleX + ", " + scaleY + ")";
                }

                scope.isFullSize = !vlnConfig.getGlobalAttrBucketState();
                scope.isStateAdd = scope.isFullSize;

                scope.displayClass = '-' + displayScreen;
                scope.scaledOffsetLeft = 0;

                calcFrame();

                $rootScope.$on('vlnGlobalAttrBucketState.change', function (evt, params) {
                    scope.isFullSize = !params.state; // Relates to the global app nav menu state.
                    scope.isStateAdd = scope.isFullSize;

                    //calcFrame();
                });

                $rootScope.$on('vlnDisplay.change', function (evt, params) {
                    scope.displayClass = '-' + params.display;
                    displayScreen = params.display;

                    calcFrame();
                });

                scope.toggleAppAttrBucket = function () {
                    vlnConfig.setGlobalAttrBucketState(!vlnConfig.getGlobalAttrBucketState());
                };

                scope.$watch('container', function () {
                    alert('CONTAINER CHANGE');
                    console.log('CONTAINER CHANGE');
                }, true);

                frame.parent().bind('resize', function() {
                    console.log('RESIZE');
//                    calcFrame();
//                    return scope.$apply();
                });

//                angular.element($window).bind('resize', function() {
//                    alert('RESIZE WINDOW');
////                    $scope.initializeWindowSize();
////                    return $scope.$apply();
//                });
            }
        };
    }]);
