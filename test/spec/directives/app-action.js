describe('Directive: appAction', function () {

    'use strict';

    // load the directive's module
    beforeEach(module('siteBuilder'));
    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
//        element = null;
//        $compile = null;

        /*
        Notes
        * app action directive has this structure
        * div
        * ->section
        *   -> div (currentAction ng-switch)
        * Test that currentAction = designAction the vln-design-action directive is avalaible
        * Test that when the current Action = pageAction the vln-page-action is avaialble
        */

        element = angular.element('<div app-action></div>');
        element = $compile(element)(scope);
        console.log(element);

    }));
});