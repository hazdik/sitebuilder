/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('vlnAppNavCtrl', ['$rootScope', '$scope', 'vlnConfig', 'vnApi',
        function ($rootScope, $scope, vlnConfig, vnApi) {
            'use strict';

            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];  // TODO: Realize testing and remove this.

            $rootScope.isVisible = vlnConfig.getGlobalNavState();

            $scope.setupSessionData = function() {
                console.log('sget the data from api ...', vnApi);
            };
        }
    ]);
