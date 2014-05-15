/*global SiteBuilder*/

SiteBuilder.Directives
    .directive('vlnPageStats', ['vnConfig',
        function (vnConfig) {

            'use strict';

            return {
                templateUrl: 'views/actions/stats-action.html',
                restrict   : 'A',
                scope      : {
                },
                link       : function postLink(scope) {

                    scope.elementHeight = vnConfig.getWorkspaceDimensions().height - 55;

                    scope.$on('vlnWorkspace.resize', function () {
                        scope.elementHeight = vnConfig.getWorkspaceDimensions().height - 55;
                    });
                }
            };
        }]);
