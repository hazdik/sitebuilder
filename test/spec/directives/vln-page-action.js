'use strict';

describe('Directive: vlnPageAction', function () {

  // load the directive's module
  beforeEach(module('pieologyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<vln-page-action></vln-page-action>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the vlnPageAction directive');
  }));
});