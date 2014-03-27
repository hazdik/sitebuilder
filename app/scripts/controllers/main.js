
/*global angular */

angular.module('pieologyApp')
    .controller('MainCtrl', function ($scope) {

        'use strict';

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.company = {
            name : 'Runaway Clothing',
            url  : 'RunawayClothing.com'
        };

    });
