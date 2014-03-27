'use strict';

angular.module('pieologyApp')
  .directive('appActionContainer', function () {
    return {
      templateUrl: 'views/app-action-container.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the appActionContainer directive');
        console.log(attrs);
        console.log(scope);
        console.log(element);
      }
    };
  });
