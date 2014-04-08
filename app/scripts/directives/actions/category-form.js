'use strict';

angular.module('pieologyApp')
  .directive('vlnCategoryForm', function () {
    return {
      templateUrl: 'views/actions/category-form.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the vlnCategoryForm directive');
      }
    };
  });
