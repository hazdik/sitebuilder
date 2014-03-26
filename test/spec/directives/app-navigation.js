'use strict';

describe('Directive: appNavigation', function () {

  // load the directive's module
  beforeEach(module('pieologyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<app-navigation></app-navigation>');
    element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the appNavigation directive');
  }));
});
