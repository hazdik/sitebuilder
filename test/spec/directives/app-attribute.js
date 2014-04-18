describe('Directive: appAttribute', function () {

    'use strict';

    // load the directive's module
    beforeEach(module('siteBuilder'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<section>');
        element = $compile(element)(scope);
        //expect(element.text()).toContain('This is the attribute-bucket view');
    }));
});
