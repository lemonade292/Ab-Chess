window.addEventListener("load", function () {
    "use strict";

    var accordeon = {};
    var data = {
        "items": [
            {
                "name": "Basics",
                "items": [
                    {
                        "name": "Default options",
                        "href": "examples/basics/default.html"
                    },
                    {
                        "name": "Visual changes",
                        "href": "examples/basics/visual.html"
                    },
                    {
                        "name": "Locked pieces",
                        "href": "examples/basics/locked.html"
                    },
                    {
                        "name": "Orientation",
                        "href": "examples/basics/orientation.html"
                    },
                    {
                        "name": "Squares highlighting",
                        "href": "examples/basics/highlighting.html"
                    }
                ]
            },
            {
                "name": "Methods",
                "items": [
                    {
                        "name": "Flip",
                        "href": "examples/methods/flip.html"
                    },
                    {
                        "name": "Get active color",
                        "href": "examples/methods/get-active-color.html"
                    },
                    {
                        "name": "Get FEN",
                        "href": "examples/methods/get-fen.html"
                    },
                    {
                        "name": "Get game info",
                        "href": "examples/methods/get-game-info.html"
                    },
                    {
                        "name": "Set FEN",
                        "href": "examples/methods/set-fen.html"
                    },
                    {
                        "name": "Set PGN",
                        "href": "examples/methods/set-pgn.html"
                    },
                    {
                        "name": "Play",
                        "href": "examples/methods/play.html"
                    }
                ]
            },
            {
                "name": "Advanced",
                "items": [
                    {
                        "name": "Random moves",
                        "href": "examples/advanced/random-moves.html"
                    },
                    {
                        "name": "PGN reader",
                        "href": "examples/advanced/pgn-reader.html"
                    },
                    {
                        "name": "PGN viewer",
                        "href": "examples/advanced/pgn-viewer.html",
                        "selected": true
                    }
                ],
                "open": true
            }
        ]
    };
    var example = {
        func: function () {
            var abChess = {};
            var config = {
                clickable: false,
                draggable: false
            };
            var currentIndex = 0;
            var firstButton = document.getElementById("first-button");
            var lastButton = document.getElementById("last-button");
            var lastIndex = 0;
            var moves = [];
            var movesDiv = document.getElementById("moves-div");
            var moveNumberSpanClass = "move-number-span";
            var moveSpanClass = "move-span";
            var nextButton = document.getElementById("next-button");
            var pgnImportButton = document.getElementById("pgn-button");
            var pgnTextarea = document.getElementById("pgn-textarea");
            var previousButton = document.getElementById("previous-button");
            var selectedSpanId = "move-span_selected";
            abChess = new AbChess("chessboard", config);
            abChess.draw();
            abChess.setFEN();

            function navigate(index) {
                var scroll = 0;
                var scrollIndex = 0;
                var selectedSpan = document.getElementById(selectedSpanId);
                var spans = document.getElementsByClassName(moveSpanClass);
                if (index < 0 || index > lastIndex) {
                    return;
                }
                currentIndex = index;
                abChess.navigate(currentIndex);
                if (selectedSpan !== null) {
                    selectedSpan.removeAttribute("id");
                }
                if (index > 0 && spans.length > 0) {
                    spans[index - 1].id = selectedSpanId;
                    scrollIndex = (index % 2 === 1)
                        ? (index - 1) / 2
                        : (index - 2) / 2;
                    scroll = movesDiv.scrollHeight / (spans.length / 2) *
                        scrollIndex - movesDiv.offsetHeight / 2;
                    movesDiv.scrollTop = scroll;
                }
            }

            function addMoveSpan(move, i) {
                var numberSpan = {};
                var span = document.createElement("SPAN");
                span.className = moveSpanClass;
                span.innerText = move;
                span.addEventListener("click", function () {
                    navigate(i + 1);
                });
                if (i % 2 === 0) {
                    numberSpan = document.createElement("SPAN");
                    numberSpan.className = moveNumberSpanClass;
                    numberSpan.innerText = i / 2 + 1;
                    movesDiv.appendChild(numberSpan);
                }
                movesDiv.appendChild(span);
            }

            function clearSpans() {
                while (movesDiv.hasChildNodes()) {
                    movesDiv.removeChild(movesDiv.lastElementChild);
                }
            }

            function importPGN() {
                var pgn = pgnTextarea.value;
                abChess.setPGN(pgn);
                clearSpans();
                moves = abChess.getGameMovesPGN();
                moves.forEach(addMoveSpan);
                lastIndex = abChess.getLastPositionIndex();
                navigate(lastIndex);
            }

            firstButton.addEventListener("click", function () {
                navigate(0);
            });
            lastButton.addEventListener("click", function () {
                navigate(lastIndex);
            });
            nextButton.addEventListener("click", function () {
                navigate(currentIndex + 1);
            });
            previousButton.addEventListener("click", function () {
                navigate(currentIndex - 1);
            });
            pgnImportButton.addEventListener("click", importPGN);
        },
        html: "<div class=\"commands\">\n" +
        "  <textarea id=\"pgn-textarea\" placeholder=\"Paste a PGN here and click Import.\"></textarea>\n" +
        "  <button id=\"pgn-button\" class=\"commands__button\">Import</button>\n" +
        "  <button id=\"first-button\" class=\"commands__button\">|&lt;</button>\n" +
        "  <button id=\"previous-button\" class=\"commands__button\">&lt;</button>\n" +
        "  <button id=\"next-button\" class=\"commands__button\">&gt;</button>\n" +
        "  <button id=\"last-button\" class=\"commands__button\">&gt;|</button>\n" +
        "</div>\n" +
        "<div id=\"chessboard\"></div>\n" +
        "<div id=\"moves-div\"></div>"

    };
    var htmlCode = document.getElementById("html-code");
    var jsCode = document.getElementById("js-code");
    var result = document.getElementById("result");

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
        accordeon = new Accordeon("navigation", data);
        htmlCode.innerHTML = colorize(replaceSpecials(example.html));
        jsCode.innerHTML = colorize(example.func.toString(), true);
        result.innerHTML = example.html;
        example.func();
    });

});