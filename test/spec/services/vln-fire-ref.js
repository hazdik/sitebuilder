'use strict';

describe('Service: vlnFireRef', function () {

  // load the service's module
  beforeEach(module('pieologyApp'));

  // instantiate service
  var vlnFireRef;
  beforeEach(inject(function (_vlnFireRef_) {
    vlnFireRef = _vlnFireRef_;
  }));

  it('should do something', function () {
    expect(!!vlnFireRef).toBe(true);
  });

});
