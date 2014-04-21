'use strict';

describe('Directive: appAction', function () {

    // load the directive's module
    beforeEach(module('siteBuilder'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should show the correct action directive ', inject(function ($compile, $rootScope) {
        scope.currentAction = 'design-action';
//        element = angular.element('<div app-action></div>');
//        element = $compile(element)(scope);
//        $rootScope.$apply();
//        expect(element).not.toBe(null);
//
        console.log(scope);
    }));
});

//describe('Directive: appAction', function () {
//
//    'use strict';
//
//    // load the directive's module
////    beforeEach(module('siteBuilder'));
//
////    beforeEach(angular.mock.module('siteBuilder'));
////
////    var element,
////        scope,
////        $compile;
//
////    console.log(siteBuilder);
////
////    beforeEach(inject(function ($rootScope, _$compile_) {
////        scope = $rootScope.$new();
////        $compile = _$compile_;
////    }));
////
////    it('should make visible the design-action when scope.currentAction is: designAction', inject(function ($compile, scope) {
//////        element = null;
//////        $compile = null;
////
////        var compileElement = function (template, scope) {
////            var element = $compile(template)(scope);
////            scope.digest();
////            return element;
////        };
////
////        scope.currentAction = 'designAction';
////        console.log(scope);
////
////        var test =  compileElement('<div app-action></div>', scope);
////        console.log(test);
//////
//////        element = angular.element('<div app-action></div>');
//////        element = $compile(element)($scope);
//////        console.log(element);
////
////    }));
//});