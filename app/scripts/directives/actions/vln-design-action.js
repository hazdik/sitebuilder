/*global SiteBuilder*/

SiteBuilder.Directives
    .directive('vlnDesignAction', ['vnConfig',
        function (vnConfig) {
            'use strict';
            return {
                templateUrl: 'views/actions/design-action.html',
                restrict   : 'A',
                scope      : {},
                link       : function postLink(scope) {
                    // Fetch available themes
//                vlnFireRef.themeCurrent().$bind(scope, 'themeCurrent');
//                vlnFireRef.themes().$bind(scope, 'themes');
                    console.log('SiteDNA removed');

                    scope.$on('vlnWorkspace.resize', function () {
                        scope.elementHeight = vnConfig.getWorkspaceDimensions().height - 90;
                    });

                    scope.loadTheme = function (theme) {
                        /*
                         @Input       : takes theme object
                         @Output      : sets the selected style for this theme.
                         @Description : sends a request to load the customers site in the preview iframe with this theme id
                         */
                        scope.themeCurrent = theme;
                    };
                }
            };
        }]);
