contextfree.js
==============

JavaScript Implementation of [Context Free](http://www.contextfreeart.org/).

almost compatible with Context Free 2.x, but tile directive and path directive are not supported yet.

see [demo](http://alpico.la/contextfree.js/).

Usage
-----

    <script type="text/javascript" src="contextfree.js"></script>
    <script type="text/javascript" src="cfdg.js"></script>
    <script type="text/javascript">
        window.onload = function() {
            var src = '....'; // cfdg source
            var contextfree = new ContextFree(src, document.querySelector('canvas'));
            contextfree.render(function() {
                ... // called when rendering is done
            });
        };
    </script>

License
-------

MIT

Copyright (c) alpicola
