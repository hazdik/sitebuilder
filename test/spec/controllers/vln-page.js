'use strict';

describe('Controller: vlnPageCtrl', function () {

    // load the controller's module
    beforeEach(module('siteBuilder'));

    var vlnPageCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        vlnPageCtrl = $controller('vlnPageCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        // expect(scope.awesomeThings.length).toBe(3);
//        console.log('vlnProductCotrol does NOT have any real tests!!!!');
    });
});