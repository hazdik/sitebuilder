'use strict';

describe('Directive: two', function () {

  // load the directive's module
  beforeEach(module('pieologyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<two></two>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the two directive');
  }));
});
