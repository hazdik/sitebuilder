'use strict';

describe('Controller: vlnAppNavCtrl', function () {

  // load the controller's module
  beforeEach(module('pieologyApp'));

  var vlnAppNavCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    vlnAppNavCtrl = $controller('vlnAppNavCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});