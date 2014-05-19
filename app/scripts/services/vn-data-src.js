/*globals SiteBuilder*/

SiteBuilder.Services
    .service('vnDataSrc', ['$q', 'vnEnvironmentContext', 'vnApi', 'vnFirebase',
        function vnDataSrc($q, vnEnvironmentContext, vnApi, vnFirebase) {
            'use strict';

            this.context = vnEnvironmentContext;

            this.getContext = function () {
                return this.context;
            };

            this.getArticles = function () {
                if ('Production' !== this.context) {
                    /**
                     * From trying to unify the firebase object and the $resoutce promise results
                     */
//                    var returnFire = vnFirebase.getFirebaseData('articles');
//                    var deferred =  $q.defer();
//                    return angular.extend(returnFire, deferred.promise);
////                    console.log('returnFire', returnFire);
////                    return angular.extend(returnFire, {then: function(test) {console.log('extend fn call to: ', test);}});
////                    console.log('returnFire', returnFire);
                    return vnFirebase.getFirebaseData('articles');  // is an object
                } else {
                    var deferred = $q.defer()

                    vnApi.Article.get()
                        .$promise.then(function (res) {
                            console.log('datasrc: ', res);
                            return res;
                        });

//                    return deferred.promise;
                }
            };

            this.getCategories = function () {
                return [
                    {id: 1, title: 'first category'},
                    {id: 2, title: '2nd category'},
                    {id: 3, title: '3rd category'}
                ];
            };

            this.getProducts = function () {
                return [
                    {id: 1, title: 'first product'},
                    {id: 2, title: '2nd product'},
                    {id: 3, title: '3rd product'}
                ];
            };

//        this.showData = function() {
//            if(this.context !== 'Production') {
//                console.log(vnEnvironmentContext, 'from vnDataSrc');
//                console.log(vnFirebase, 'from Flexton vnDataSrc');
//            } else {
//                console.log(vnEnvironmentContext, 'from vnDataSrc');
//                console.log(vnApi, 'from vnDataSrc');
//            }
//            console.log('and ctx was ... ', this.context);
//        }

            // AngularJS will instantiate a singleton by calling "new" on this function
        }]);
