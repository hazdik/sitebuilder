'use strict';

//NOTE: this should either be cleaned up or updated if the vln-product ctrl
// is used in the app. As of 04-18-2014 it is not used.

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

//    it('should attach a list of awesomeThings to the scope', function () {
//        expect(scope.awesomeThings.length).toBe(3);
//    });
});