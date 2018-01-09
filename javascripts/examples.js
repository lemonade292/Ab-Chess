window.addEventListener("load", function () {
    "use strict";

    var examples = {
        "animated": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#animated\">animated</a> to enable or disable the animations.",
            func: function () {
                var abChess = {};
                var options = {
                    animated: false
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "animation-speed": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#animationSpeed\">animationSpeed</a> to configure the animations speed.",
            func: function () {
                var abChess = {};
                var options = {
                    animated: true,
                    animationSpeed: 5
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "clickable": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#clickable\">clickable</a> to build a chessboard where the pieces cannot be moved by clicking.",
            func: function () {
                var abChess = {};
                var options = {
                    clickable: false
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "coordinates": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#coordinates\">coordinates</a> to enable or disable the coordinates border.",
            func: function () {
                var abChess = {};
                var options = {
                    coordinates: false
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "draggable": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#draggable\">draggable</a> to build a chessboard where the pieces are not draggable.",
            func: function () {
                var abChess = {};
                var options = {
                    draggable: false
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "images": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#imagesPath\">imagesPath</a> " +
                "and <a class=\"inline-code\" href=\"docs/reference.html#imagesExtension\">imagesExtension</a> to change the pieces images.",
            func: function () {
                var abChess = {};
                var options = {
                    imagesExtension: ".png",
                    imagesPath: "images/alpha/"
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "legal-marks-color": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#legalMarksColor\">legalMarksColor</a> to change the CSS color of the legal moves indications.",
            func: function () {
                var abChess = {};
                var options = {
                    legalMarksColor: "grey"
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "mark-check": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#markCheck\">markCheck</a> to enable or disable the check indication.",
            func: function () {
                var abChess = {};
                var options = {
                    markCheck: false
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "mark-last-move": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#markLastMove\">markLastMove</a> to enable or disable the last move indication.",
            func: function () {
                var abChess = {};
                var options = {
                    markLastMove: false
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "mark-legal-squares": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#markLegalSquares\">markLegalSquares</a> to enable or disable the legal moves indications.",
            func: function () {
                var abChess = {};
                var options = {
                    markLegalSquares: false
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "mark-overflown-square": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#markOverflownSquare\">markOverflownSquare</a> to enable or disable the overflown square indication.",
            func: function () {
                var abChess = {};
                var options = {
                    markOverflownSquare: false
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "mark-start-square": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#markStartSquare\">markStartSquare</a> to enable or disable the start square indication.",
            func: function () {
                var abChess = {};
                var options = {
                    markStartSquare: false
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "reversed": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#reversed\">reversed</a> to build a chessboard from black's point of view.",
            func: function () {
                var abChess = {};
                var options = {
                    reversed: true
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "width": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#width\">width</a> to configure the board width.",
            func: function () {
                var abChess = {};
                var options = {
                    width: 320
                };
                abChess = new AbChess("chessboard", options);
                abChess.setFEN();
            },
            html: "<div id=\"chessboard\"></div>"
        },
        "flip": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#flip\">flip</a> to flip the board.",
            func: function () {
                var abChess = {};
                var flipButton = document.getElementById("flipButton");
                abChess = new AbChess("chessboard");
                abChess.setFEN();
                flipButton.addEventListener("click", abChess.flip);
            },
            html: "<div id=\"chessboard\"></div>\n" +
                "<button id=\"flipButton\" class=\"commands__button\" title=\"Flip the board\">&#8634;</button>"
        },
        "get-fen": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#getFEN\">getFEN</a> to get the FEN string in a position of the game.",
            func: function () {
                var abChess = {};
                var fenCode = document.getElementById("fenCode");
                var movesCount = 0;
                abChess = new AbChess("chessboard");
                abChess.setFEN();
                fenCode.innerText = abChess.getFEN(movesCount);
                abChess.onMovePlayed(function () {
                    movesCount += 1;
                    fenCode.innerText = abChess.getFEN(movesCount);
                });
            },
            html: "<code id=\"fenCode\" class=\"code\"></code>\n" +
                "<div id=\"chessboard\"></div>"
        },
        "on-move-played": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#onMovePlayed\">onMovePlayed</a>," +
                " <a class=\"inline-code\" href=\"docs/reference.html#getActiveColor\">getActiveColor</a>," +
                " and <a class=\"inline-code\" href=\"docs/reference.html#isCheck\">isCheck</a>" +
                " to display the game status on each move.",
            func: function () {
                var abChess = {};
                var movesCount = 0;
                var statusElement = document.getElementById("statusElement");
                abChess = new AbChess("chessboard");
                function updateStatus() {
                    var status = " to move.";
                    var turn = "White";
                    movesCount += 1;
                    if (abChess.getActiveColor(movesCount) === "b") {
                        turn = "Black"
                    }
                    if (abChess.isCheck(movesCount)) {
                        status = " is in check.";
                    }
                    statusElement.innerText = turn + status;
                }
                abChess.setFEN();
                abChess.onMovePlayed(updateStatus);
            },
            html: "<p id=\"statusElement\">White to move.</p>\n" +
                "<div id=\"chessboard\"></div>"
        },
        "play": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#play\">play</a> to play a move.",
            func: function () {
                var abChess = {};
                var d4Button = document.getElementById("d4Button");
                var e4Button = document.getElementById("e4Button");
                abChess = new AbChess("chessboard");
                abChess.setFEN();
                d4Button.addEventListener("click", function () {
                    abChess.play("d2", "d4");
                });
                e4Button.addEventListener("click", function () {
                    abChess.play("e2", "e4");
                });
            },
            html: "<div>\n" +
                "  <button id=\"d4Button\" class=\"commands__button\">d2-d4</button>\n" +
                "  <button id=\"e4Button\" class=\"commands__button\">e2-e4</button>\n" +
                "</div>\n" +
                "<div id=\"chessboard\"></div>"

        },
        "set-fen": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#isValidFEN\">isValidFEN</a>" +
                " and <a class=\"inline-code\" href=\"docs/reference.html#setFEN\">setFEN</a>" +
                " to set a position with a FEN string parameter.",
            func: function () {
                var abChess = {};
                var emptyButton = document.getElementById("emptyButton");
                var emptyFEN = "8/8/8/8/8/8/8/8 w - - 0 1";
                var options = {
                    clickable: false,
                    draggable: false
                };
                var saavedraButton = document.getElementById("saavedraButton");
                var saavedraFEN = "8/8/1KP5/3r4/8/8/8/k7 w - - 0 1";
                var startButton = document.getElementById("startButton");
                abChess = new AbChess("chessboard", options);
                emptyButton.addEventListener("click", function () {
                    if (abChess.isValidFEN(emptyFEN)) {
                        abChess.setFEN(emptyFEN);
                    }
                });
                saavedraButton.addEventListener("click", function () {
                    if (abChess.isValidFEN(saavedraFEN)) {
                        abChess.setFEN(saavedraFEN);
                    }
                });
                startButton.addEventListener("click", function () {
                    abChess.setFEN();
                });
            },
            html: "<div>\n" +
                "  <button id=\"emptyButton\" class=\"commands__button\">Empty</button>\n" +
                "  <button id=\"startButton\" class=\"commands__button\">Start</button>\n" +
                "  <button id=\"saavedraButton\" class=\"commands__button\">Saavedra</button>\n" +
                "</div>\n" +
                "<div id=\"chessboard\"></div>"
        },
        "pgn-viewer": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#isValidPGN\">isValidPGN</a>," +
                " <a class=\"inline-code\" href=\"docs/reference.html#setPGN\">setPGN</a>," +
                " <a class=\"inline-code\" href=\"docs/reference.html#getMovesPGN\">getMovesPGN</a>" +
                " and <a class=\"inline-code\" href=\"docs/reference.html#view\">view</a>" +
                " to build a PGN viewer.",
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
                    abChess.view(currentIndex);
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
                    if (!abChess.isValidPGN(pgn)) {
                        alert("The PGN string is not valid");
                        return;
                    }
                    abChess.setPGN(pgn);
                    clearSpans();
                    moves = abChess.getMovesPGN();
                    moves.forEach(addMoveSpan);
                    lastIndex = moves.length;
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
        },
        "random-moves": {
            description: "Use <a class=\"inline-code\" href=\"docs/reference.html#getLegalMoves\">getLegalMoves</a>," +
                " <a class=\"inline-code\" href=\"docs/reference.html#is50Moves\">is50Moves</a>," +
                " <a class=\"inline-code\" href=\"docs/reference.html#isCheckmate\">isCheckmate</a>," +
                " <a class=\"inline-code\" href=\"docs/reference.html#isInsufficientMaterial\">isInsufficientMaterial</a>," +
                " <a class=\"inline-code\" href=\"docs/reference.html#isStalemate\">isStalemate</a>," +
                " and <a class=\"inline-code\" href=\"docs/reference.html#getPGN\">getPGN</a>" +
                " to make a automated random game and display its notation.",
            func: function () {
                var abChess = {};
                var config = {
                    clickable: false,
                    draggable: false
                };
                var gamePGN = document.getElementById("game-code");
                var promotions = ["b", "n", "q", "r"];
                abChess = new AbChess("chessboard", config);
                abChess.setFEN();

                function chooseRandom(array) {
                    var random = Math.floor(Math.random() * array.length);
                    return array[random];
                }

                function playRandomMove(index) {
                    var legalMoves = abChess.getLegalMoves(index);
                    var move = chooseRandom(legalMoves);
                    var promotion = chooseRandom(promotions);
                    abChess.play(move.start, move.end, promotion);
                    gamePGN.innerText = abChess.getPGN();
                    index += 1;
                    if (abChess.is50Moves(index) ||
                        abChess.isCheckmate(index) ||
                        abChess.isInsufficientMaterial(index) ||
                        abChess.isStalemate(index)) {
                        return;
                    }
                    timeout = setTimeout(function () {
                        playRandomMove(index);
                    }, 400);
                }

                setTimeout(function () {
                    playRandomMove(0);
                }, 100);
            },
            html: "<div id=\"chessboard\"></div>\n" +
                "<p id=\"game-code\"></p>"
        }
    };
    var timeout = 0;

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

    function displayExample(name) {
        var example = examples[name];
        var description = document.getElementById("description");
        var htmlCode = document.getElementById("html-code");
        var jsCode = document.getElementById("js-code");
        var result = document.getElementById("result");
        requestAnimationFrame(function () {
            description.innerHTML = example.description;
            htmlCode.innerHTML = colorize(replaceSpecials(example.html));
            jsCode.innerHTML = colorize(example.func.toString(), true);
            result.innerHTML = example.html;
            example.func();
        });
    }

    function loadFromHash() {
        var exampleName = "animated";
        Object.getOwnPropertyNames(examples).some(function (name) {
            if ("#" + name === location.hash) {
                exampleName = name;
                return true;
            }
            return false;
        });
        clearTimeout(timeout);
        displayExample(exampleName);
    }

    window.addEventListener("hashchange", loadFromHash);
    loadFromHash();
});