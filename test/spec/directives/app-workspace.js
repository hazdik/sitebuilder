describe('Directive: appWorkspace', function () {

    'use strict';

    // load the directive's module
    beforeEach(module('siteBuilder'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        console.log('Testing needs element attention: ', element);
        console.log('Testing needs $compile attention: ', $compile);
        // element = angular.element('<app-workspace></app-workspace>');
        // element = $compile(element)(scope);
        // expect(element.text()).toBe('this is the appActionBucket directive');
    }));
});