/*global SiteBuilder*/

// based on
// http://blog.parkji.co.uk/2013/08/11/native-drag-and-drop-in-angularjs.html
// and
// https://github.com/kevinsproles/kevinsproles.github.io/tree/master/snippets/angular-drag-drop-iframes

SiteBuilder.Directives
    .directive('draggable', [
        function ($rootScope, vlnConfig) {

            'use strict';

            return function (scope, element) {
                // this gives us the native JS object
                var el = element[0];

                el.draggable = true;

                el.addEventListener(
                    'dragstart',
                    function (e) {
                        e.dataTransfer.effectAllowed = 'move';
                        e.dataTransfer.setData('Text', this.getAttribute('data-raw'));
//                        e.dataTransfer.setData('Text', this.id);
                        this.classList.add('drag');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragend',
                    function (e) {
                        this.classList.remove('drag');
                        return false;
                    },
                    false
                );
            };
        }])
    .directive('droppable', function($compile) {

        'use strict';

        return {
            scope: {},
            link: function(scope, element) {
                // again we need the native object
                var el = element[0];

                el.addEventListener(
                    'dragover',
                    function(e) {
                        e.dataTransfer.dropEffect = 'move';
                        // allows us to drop
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragenter',
                    function(e) {
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragleave',
                    function(e) {
                        this.classList.remove('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'drop',
                    function(e) {
                        // Stops some browsers from redirecting.
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }

                        this.classList.remove('over');

//                        var item = document.getElementById(e.dataTransfer.getData('Text'));
//                        this.appendChild(item);
                        this.appendChild( $compile(e.dataTransfer.getData('Text'))(scope) );

                        return false;
                    },
                    false
                );
            }
        };
    })
    .directive('dndDroppableIframe', function($compile) {

        'use strict';

        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                if (element.prop('tagName') !== 'IFRAME') { return; }

                element.ready(function () {
                    var $parent = element.closest('.iframe-holder'),
                        $fakeDiv = $parent.find('.droppable-fake').attr('dnd-droppable', '').attr('droppable', '');


                    $compile($fakeDiv)(scope);
                });
            }
        };
    });