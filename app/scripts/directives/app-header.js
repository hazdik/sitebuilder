'use strict';

angular.module('pieologyApp')
  .directive('appHeader', function () {
    return {
      templateUrl: 'views/app-header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the appHeader directive');
        console.log(attrs);
        console.log(scope);
        console.log(element);
      }
    };
  });
