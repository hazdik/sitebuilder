'use strict';

describe('Service: updateService', function () {

  // load the service's module
  beforeEach(module('pieologyApp'));

  // instantiate service
  var updateService;
  beforeEach(inject(function (_updateService_) {
    updateService = _updateService_;
  }));

  it('should do something', function () {
    expect(!!updateService).toBe(true);
  });

});
