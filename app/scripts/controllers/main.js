
/*global angular */

angular.module('pieologyApp')
    .controller('MainCtrl', ['$scope',  'vlnConfig', function ($scope, vlnConfig) {

        'use strict';
        vlnConfig.initConfig();


        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.company = {
            name : 'Runaway Clothing',
            url  : 'RunawayClothing.com'
        };

        $scope.state = {
            switchState : 'off',
            switchStyle : 'vln-tiny-slider'
        };

    }]);
