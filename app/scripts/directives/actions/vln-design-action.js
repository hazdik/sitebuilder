/*global angular*/

angular.module('pieologyApp')
    .directive('vlnDesignAction', ['vlnThemeFactory', function (vlnThemeFactory) {
        'use strict';
        return {
            templateUrl : 'views/actions/design-action.html',
            restrict    : 'A',
            scope       : {},
            link        : function postLink(scope) {
                // Fetch available themes
                vlnThemeFactory.getThemes()
                .then(function (promise) {
                    scope.themes = promise;
                })
                .catch(function(error){
                    throw new Error('Error fetching themes: ', error);
                });

                scope.loadTheme = function(themeId) {
                    /*
                        @Input       : takes either a number or string as a number (not sure at time of writing)
                        @Output      : sets the selected style for this theme.
                        @Description : sends a request to load the customers site in the preview iframe with this theme id
                    */
                    console.log('need to call the theme factory service and load the customers website with this theme in the iframe.');
                }
            }
        };
    }]);