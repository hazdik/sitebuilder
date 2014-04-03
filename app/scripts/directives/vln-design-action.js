'use strict';

angular.module('pieologyApp')
    .directive('vlnDesignAction', function () {
        return {
            templateUrl: 'views/actions/design-action.html',
            restrict: 'E',
            replace: true,
            link: function postLink() {
                console.log('in vlnDesignAction directive');
            }
        };
    });