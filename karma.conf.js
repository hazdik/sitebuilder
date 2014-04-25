// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    'use strict';

    config.set({
        preprocessors: {
            'app/views/**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'templates'
        },


        // base path, that will be used to resolve files and exclude
        basePath  : '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files     : [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-cookies/angular-cookies.js',
            'app/bower_components/angular-sanitize/angular-sanitize.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-animate/angular-animate.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap.js',
            'app/bower_components/angular-touch/angular-touch.js',
            'app/bower_components/angular-carousel/dist/angular-carousel.js',
            'app/bower_components/firebase/firebase.js',
            'app/bower_components/angularfire/angularfire.js',


            'app/scripts/app.js',

//                <!--controllers-->
            'app/scripts/controllers/main.js',
            'app/scripts/controllers/vln-app-nav.js',
            'app/scripts/controllers/vln-page.js',

//                <!--directives-->
            'app/scripts/directives/actions/category-form.js',
            'app/scripts/directives/actions/page-form.js',
            'app/scripts/directives/actions/product-form.js',
            'app/scripts/directives/actions/vln-design-action.js',
            'app/scripts/directives/actions/vln-page-action.js',
            'app/scripts/directives/actions/vln-stats-action.js',
            'app/scripts/directives/app-action.js',
            'app/scripts/directives/app-attribute.js',
            'app/scripts/directives/app-header.js',
            'app/scripts/directives/app-navigation.js',
            'app/scripts/directives/app-workspace.js',
            'app/scripts/directives/components/switch.js',

//                <!--services-->
            'app/scripts/services/vln-config.js',
            'app/scripts/services/vln-site-factory.js',
            'app/scripts/services/vln-theme-factory.js',
            'app/scripts/services/vln-update-manager.js',
            'app/scripts/services/vln-fire-ref.js',

//            'app/scripts/*.js',
//            'app/scripts/**/*.js',
            'test/mock/**/*.js',
            'test/spec/**/*.js',

            // HTML tempates for testing
            'app/views/**/*.html'
        ],

        // list of files / patterns to exclude
        exclude   : [],

        // web server port
        port      : 8080,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel  : config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch : false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers  : ['Chrome'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun : false
    });
};