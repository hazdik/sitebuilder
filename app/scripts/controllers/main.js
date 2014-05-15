/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('MainCtrl', ['$rootScope', '$scope', 'vlnConfig', 'vnSession',
        function ($rootScope, $scope, vlnConfig, vnSession) {

            'use strict';
            vlnConfig.initConfig();
            vnSession.init();

            /* TODO: grab this from vlnConfig (if this is even the right place to keep it) */
            $scope.company = {
                name: 'Runaway Clothing',
                url : 'RunawayClothing.com'
            };

            $scope.state = {
                switchState: 'off',
                switchStyle: 'vln-tiny-slider'
            };

        }]);
