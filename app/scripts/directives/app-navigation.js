'use strict';

angular.module('pieologyApp')
  .directive('appNavigation', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the appNavigation directive');
        console.log(attrs);
        console.log(scope);
        console.log(element);
      }
    };
  });