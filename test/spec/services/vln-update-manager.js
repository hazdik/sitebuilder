'use strict';

describe('Service: vlnUpdateManager', function () {

    // load the service's module
    beforeEach(module('pieologyApp'));

    // instantiate service
    var vlnUpdateManager;
    beforeEach(inject(function (_vlnUpdateManager_) {
        vlnUpdateManager = _vlnUpdateManager_;
    }));

    it('should do something', function () {
        expect( !! vlnUpdateManager).toBe(true);
    });

});