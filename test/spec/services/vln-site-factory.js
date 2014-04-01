
/*global angular, module, describe, beforeEach, inject, it, expect */

describe('Service: vlnSiteFactory', function () {

    'use strict';

    // load the service's module
    beforeEach(module('pieologyApp'));

    // instantiate service
    var vlnSiteFactory;
    beforeEach(inject(function (_vlnSiteFactory_) {
        vlnSiteFactory = _vlnSiteFactory_;
    }));

    it('should do something', function () {
        expect(!!vlnSiteFactory).toBe(true);
    });

});
