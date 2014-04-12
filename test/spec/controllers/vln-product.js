'use strict';

describe('Controller: vlnProductCtrl', function () {

    // load the controller's module
    beforeEach(module('pieologyApp'));

    var vlnProductCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        vlnProductCtrl = $controller('vlnProductCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});