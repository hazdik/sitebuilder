'use strict';

angular.module('pieologyApp')
  .directive('vlnDesignAction', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      replace: true
      link: function postLink(scope, element, attrs) {
        element.text('this is the vlnDesignAction directive');
      }
    };
  });
