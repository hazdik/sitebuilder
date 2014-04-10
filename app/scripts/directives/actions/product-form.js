'use strict';

angular.module('pieologyApp')
    .directive('vlnProductForm', ['vlnUpdateManager', function (vlnUpdateManager) {
        return {
            templateUrl: 'views/actions/product-form.html',
            restrict: 'A',
            link: function postLink(scope, element, attrs, vlnUpdateManager) {

                  console.log(vlnUpdateManager);
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

                  scope.updateIframeModel = function(value) {
                    // var iframe = document.getElementById("workspace").contentWindow.document;
                    console.log('Real time stuff here');
                  };

                  scope.$watch('currentProduct.name', function (value) {
                    scope.updateIframeModel(value);
                  })
            }
        };
    }]);