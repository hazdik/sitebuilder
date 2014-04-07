'use strict';

angular.module('pieologyApp')
  .directive('vlnProductForm', function () {
    return {
      templateUrl: 'views/actions/product-form.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the vlnProductForm directive');
      }
    };
  });
