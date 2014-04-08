'use strict';

angular.module('pieologyApp')
  .directive('vlnPageForm', function () {
    return {
      templateUrl: 'views/actions/page-form.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // element.text('this is the vlnPageForm directive');
      }
    };
  });
