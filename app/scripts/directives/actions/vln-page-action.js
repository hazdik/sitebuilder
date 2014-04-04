'use strict';

angular.module('pieologyApp')
    .directive('vlnPageAction', ['vlnPageFactory',
        function (vlnPageFactory) {
            return {
                templateUrl: 'views/actions/page-action.html',
                restrict: 'A',
                link: function postLink(scope) {

                    // Fetch available themes
                    vlnPageFactory.getPages()
                        .then(function (promise) {
                            scope.pageData = promise;
                            console.log(scope.pageData);
                        })
                        .
                    catch (function (error) {
                        throw new Error('Error fetching page data: ', error);
                    });

                }
            };
    }]);