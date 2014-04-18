'use strict';

describe('Directive: vlnProductForm', function () {

  // load the directive's module
  beforeEach(module('siteBuilder'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<actions/product-form></actions/product-form>');
    element = $compile(element)(scope);
//    console.log('This is stub test for the vlnProductForm');
    // expect(element.text()).toBe('this is the vlnProductForm directive');
  }));
});
