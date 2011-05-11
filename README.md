contextfree.js
==============

JavaScript Implementation of [Context Free](http://www.contextfreeart.org/)

Usage
-----

    <script type="text/javascript" src="contextfree.js"></script>
    <script type="text/javascript" src="cfdg.js"></script>
    <script type="text/javascript">
        window.onload = function() {
            var src = '....'; // cfdg source
            var contextfree = new ContextFree(src, document.querySelector('canvas'));
            contextfree.render();
        };
    </script>

see [demo](http://alpico.la/contextfree.js/)

License
-------

MIT

Copyright (c) alpicola
