'use strict';

describe('Service: vlnConfig', function () {

    // load the service's module
    beforeEach(module('siteBuilder'));

    // instantiate service
    var vlnConfig;
    beforeEach(inject(function (_vlnConfig_) {
        vlnConfig = _vlnConfig_;
    }));

    it('should do something', function () {
        expect(!!vlnConfig).toBe(true);
    });

});
