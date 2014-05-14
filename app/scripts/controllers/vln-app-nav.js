/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('vlnAppNavCtrl', ['$rootScope', '$scope', 'vlnConfig',
        function ($rootScope, $scope, vlnConfig) {
            'use strict';
            $rootScope.isVisible = vlnConfig.getGlobalNavState();
        }
    ]);
