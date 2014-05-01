/*global SiteBuilder*/

SiteBuilder.Controllers
    .controller('vlnAppNavCtrl', ['$rootScope', '$scope', 'vlnConfig', 'vlnFireRef',
        function ($rootScope, $scope, vlnConfig, vlnFireRef) {
            'use strict';

            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];  // TODO: Realize testing and remove this.

            $rootScope.isVisible = vlnConfig.getGlobalNavState();

            $scope.currentComponent = vlnFireRef.currentComponent();
            $scope.currentComponent.$on('change', function( obj ) {
                if ('0000' === $scope.currentComponent.typeId) {
                    console.log('root case: here go to the design action: ', $scope.currentComponent);
//                    autoNavigateToProduct();
                } else {
                    console.log('curComponent change: ', $scope.currentComponent);
                    autoNavigateToProduct();
                }
            });

            function autoNavigateToProduct() {
                vlnConfig.setCurrentAction('pageAction');
            }
        }
    ]);
