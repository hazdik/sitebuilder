'use strict';

describe('Directive: vlnPageForm', function () {

  // load the directive's module
  beforeEach(module('pieologyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<actions/page-form></actions/page-form>');
    element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the vlnPageForm directive');
  }));
});
