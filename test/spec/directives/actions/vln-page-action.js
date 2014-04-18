'use strict';

describe('Directive: vlnPageAction', function () {

    // load the directive's module
    beforeEach(module('siteBuilder'));

    var element,
         scope;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        $compile = $compile;
    }));

    // it('should make hidden element visible', inject(function ($compile) {
    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<vln-page-action></vln-page-action>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('this is the vlnPageAction directive');
    }));
});