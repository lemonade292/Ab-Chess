window.addEventListener('load', function () {

    var abChess = new AbChess('abc');
    var checkInfo = document.getElementById('checkInfo');
    var container = document.getElementById('abc');
    var emptyButton = document.getElementById('emptyButton');
    var fenInput = document.getElementById('fenInput');
    var flipButton = document.getElementById('flipButton');
    var lastMoveInfo = document.getElementById('lastMoveInfo');
    var moveButton = document.getElementById('moveButton');
    var moveInput = document.getElementById('moveInput');
    var startButton = document.getElementById('startButton');
    var turnInfo = document.getElementById('turnInfo');
    function updateInfo() {
        fenInput.value = abChess.getFEN();
        checkInfo.innerText = (abChess.isInCheck())
            ? 'Check !'
            : '';
        lastMoveInfo.innerText = 'Last move : ';
        turnInfo.innerText = (abChess.getActiveColor() === 'w')
            ? 'White to move.'
            : 'Black to move.';
    }
    startButton.addEventListener('click', function () {
        abChess.setFEN();
        requestAnimationFrame(updateInfo);
    });
    emptyButton.addEventListener('click', function () {
        abChess.setFEN('8/8/8/8/8/8/8/8');
        requestAnimationFrame(updateInfo);
    });
    flipButton.addEventListener('click', function () {
        abChess.flip();
    });
    container.addEventListener('click', function () {
        requestAnimationFrame(updateInfo);
    });
    container.addEventListener('dragend', function () {
        requestAnimationFrame(updateInfo);
    });
    moveButton.addEventListener('click', function () {
        var inputMove = moveInput.value;
        var isLegal = abChess.isLegal(inputMove);
        if (isLegal) {
            requestAnimationFrame(updateInfo);
        }
    });
    abChess.draw();
    abChess.setFEN();
    requestAnimationFrame(updateInfo);
});
