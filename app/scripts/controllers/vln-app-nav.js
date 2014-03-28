'use strict';

angular.module('pieologyApp')
.controller('vlnAppNavCtrl', ['$scope', 'vlnConfig', function ($scope, vlnConfig) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];  // TODO: Realize testing and remove this.

    // $rootScope.isVisible = vlnConfig.getGlobalNavState();
    // $rootScope.isVisible = false;


}]);
