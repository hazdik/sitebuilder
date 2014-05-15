/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('vlnAppNavCtrl', ['$rootScope', '$scope', 'vnConfig',
        function ($rootScope, $scope, vnConfig) {
            'use strict';
            $rootScope.isVisible = vnConfig.getGlobalNavState();
        }
    ]);
