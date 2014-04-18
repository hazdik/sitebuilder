/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('vlnAppNavCtrl', ['$rootScope', '$scope', 'vlnConfig',
        function ($rootScope, $scope, vlnConfig) {
            'use strict';

            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];  // TODO: Realize testing and remove this.

            $rootScope.isVisible = vlnConfig.getGlobalNavState();
            // $rootScope.isVisible = false;

        }
    ]);
