'use strict';

angular.module('pieologyApp')
    .directive('vlnPageAction', function () {
        return {
            templateUrl: 'views/actions/page-action.html',
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                console.log('here be pages');
            }
        };
    });