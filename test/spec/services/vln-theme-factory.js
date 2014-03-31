'use strict';

describe('Service: vlnThemeFactory', function () {

  // load the service's module
  beforeEach(module('pieologyApp'));

  // instantiate service
  var vlnThemeFactory;
  beforeEach(inject(function (_vlnThemeFactory_) {
    vlnThemeFactory = _vlnThemeFactory_;
  }));

  it('should do something', function () {
    expect(!!vlnThemeFactory).toBe(true);
  });

});
