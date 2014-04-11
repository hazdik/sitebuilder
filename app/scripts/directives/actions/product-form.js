'use strict';

angular.module('pieologyApp')
    .directive('vlnProductForm', function () {
        return {
            templateUrl: 'views/actions/product-form.html',
            restrict: 'A',
            scope: {
                currentProduct: '='
            },
            link: function postLink(scope, element, attrs) {
                console.log(scope.currentProduct);

                  scope.myInterval = 5000;
                  scope.productImages = [];
                  scope.currencies = ['$', '£', '€', '¥'];
                  scope.currentCurrency = '$';

                  scope.addImage = function() {
                    var newWidth = 150 + scope.productImages.length+50;
                    scope.productImages.push({
                      image: 'http://placekitten.com/' + newWidth + '/150',
                      text: ['More','Extra','Lots of','Surplus'][scope.productImages.length % 4] + ' ' +
                        ['Cats', 'Kittys', 'Felines', 'Cutes'][scope.productImages.length % 4]
                    });
                  };
                  for (var i=0; i<4; i++) {
                    scope.addImage();
                  }
            }
        };
    });