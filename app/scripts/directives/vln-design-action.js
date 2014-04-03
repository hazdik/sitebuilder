/*global angular*/

angular.module('pieologyApp')
    .directive('vlnDesignAction', ['vlnThemeFactory', function (vlnThemeFactory) {
        'use strict';
        return {
            templateUrl : 'views/actions/design-action.html',
            restrict    : 'A',
            replace     : true,
            scope       : {},
            link        : function postLink(scope) {
                console.log('here be design action');

                // Fetch available themes
                vlnThemeFactory.getThemes()
                .then(function (promise) {
                    console.log('vln-design-action');
                    scope.themes = promise;
                })
                .catch(function(error){
                    throw new Error('Error fetching themes: ', error);
                });
            }
        };
    }]);