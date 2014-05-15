/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('MainCtrl', ['$rootScope', '$scope', 'vnConfig', 'vnSession',
        function ($rootScope, $scope, vnConfig, vnSession) {

            'use strict';
            vnConfig.initConfig();
            vnSession.init();

            /* TODO: grab this from vnConfig (if this is even the right place to keep it) */
            $scope.company = {
                name: 'Runaway Clothing',
                url : 'RunawayClothing.com'
            };

            $scope.state = {
                switchState: 'off',
                switchStyle: 'vln-tiny-slider'
            };

        }]);
