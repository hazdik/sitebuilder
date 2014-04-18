/*global angular, module, describe, beforeEach, inject, it, expect */

describe('Directive: compSwitch', function () {

    'use strict';

    // load the directive's module
    beforeEach(module('siteBuilder'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should find element', inject(function ($compile) {
        // element = angular.element('.vln-switch');
        // element = $compile(element)(scope);
        //expect(element).toNotBe(null);
    }));
});
