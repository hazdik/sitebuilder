/*global angular*/

angular.module('pieologyApp')
    .directive('vlnPageStats', ['vlnConfig',
        function (vlnConfig) {

            'use strict';

            return {
                templateUrl: 'views/actions/stats-action.html',
                restrict   : 'A',
                scope      : {
                },
                link       : function postLink(scope) {

                    scope.elementHeight = vlnConfig.getWorkspaceDimensions().height - 55;

                    scope.$on('vlnWorkspace.resize', function () {
                        scope.elementHeight = vlnConfig.getWorkspaceDimensions().height - 55;
                    });
                }
            };
        }]);