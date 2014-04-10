/**
 * Created by tsanko_tsolov on 3/27/14.
 */

/*global angular, console */

angular.module('pieologyApp')
    .directive('vlnCompSwitch', function () {

        'use strict';

        return {
            restrict: 'A',
            replace : true,
            template: '<div class="vln-switch {{ elementClass }} {{ elementStyle }}">' +
                '<div class="left-section">{{ elementText }}</div>' +
                '<div class="switch"><span>{{ elementText }}</span></div>' +
                '<div class="right-section">{{ elementText }}</div>' +
                '</div>',
            scope   : {
                switchState: '=',
                switchStyle: '='
            },
            link    : function (scope, element, attrs) {

                function safeApply(scope, fn) {
                    return (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
                }

                scope.$watchCollection('[switchState, switchStyle]', function(value) {
                    console.log('collection=', value);

                    scope.elementStyle = scope.switchStyle;
                    scope.elementText = (scope.switchState === 'off') ? 'off' : 'on';
                    scope.elementClass = (scope.switchState === 'off') ? '-off' : '-on';
                });

                // TODO: set which will be the toggle active element
                // for now is set to be the whole element
                //var divSwitch = element.find('div[class=switch]');

                element.on('click', function (event) {
                    event.preventDefault();

                    safeApply(scope, function () {
                        scope.switchState = (scope.switchState === 'off') ? 'on' : 'off';
                        scope.elementClass = (scope.switchState === 'off') ? '-off' : '-on';
                        scope.elementText = (scope.switchState === 'off') ? 'off' : 'on';
                    });
                });
            }
        };
    });