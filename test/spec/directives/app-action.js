describe('Directive: appAction', function () {

    'use strict';

    // load the directive's module
    beforeEach(module('pieologyApp'));
    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        console.log('Testing needs element attention: ', element);
        console.log('Testing needs $compile attention: ', $compile);
        // element = angular.element('<app-action-container></app-action-container>');
        // element = $compile(element)(scope);
        // expect(element.text()).toBe('this is the appActionContainer directive');
    }));
});