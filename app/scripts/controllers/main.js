/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('MainCtrl', ['$rootScope', '$scope',  'vlnConfig', function ($rootScope, $scope, vlnConfig) {

        'use strict';
        vlnConfig.initConfig();

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        /* TODO: grab this from vlnConfig (if this is even the right place to keep it) */
        $scope.company = {
            name : 'Runaway Clothing',
            url  : 'RunawayClothing.com'
        };

        $scope.state = {
            switchState : 'off',
            switchStyle : 'vln-tiny-slider'
        };

    }]);
