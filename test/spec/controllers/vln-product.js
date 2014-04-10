'use strict';

describe('Controller: VlnProductCtrl', function () {

    // load the controller's module
    beforeEach(module('pieologyApp'));

    var VlnProductCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        VlnProductCtrl = $controller('VlnProductCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});