'use strict';

angular.module('pieologyApp')
  .directive('actions/pageForm', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the actions/pageForm directive');
      }
    };
  });
