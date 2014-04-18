'use strict';

angular.module('siteBuilder')
.controller('vlnAppNavCtrl', ['$rootScope', '$scope', 'vlnConfig',
    function ($rootScope, $scope, vlnConfig) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];  // TODO: Realize testing and remove this.

    $rootScope.isVisible = vlnConfig.getGlobalNavState();
    // $rootScope.isVisible = false;

}]);
