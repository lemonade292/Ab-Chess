window.addEventListener("load", function () {
    "use strict";

    var example = {
        func: function () {
            var abChess = {};
            var options = {
                flipped: true,
                notationBorder: false
            };
            abChess = new AbChess("chessboard", options);
            abChess.draw();
            abChess.setFEN();
        },
        html: "<div id=\"chessboard\"></div>"
    };

    function replaceSpecials(str) {
        var specials = {
            "&lt;": /</g,
            "&gt;": />/g
        };
        Object.keys(specials).forEach(function (key) {
            var special = specials[key];
            str = str.replace(special, key);
        });
        return str;
    }

    requestAnimationFrame(function () {
        var htmlCode = document.getElementById("html-code");
        var jsCode = document.getElementById("js-code");
        var result = document.getElementById("result");
        htmlCode.innerHTML = colorize(replaceSpecials(example.html));
        jsCode.innerHTML = colorize(example.func.toString(), true);
        result.innerHTML = example.html;
        example.func();
    });

});
