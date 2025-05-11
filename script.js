var board1 = Chessboard('board1', {
  draggable: false,
  pieceTheme: 'chessboardjs-1.0.0/img/chesspieces/wikipedia/{piece}.png'
});

function fetchFENAndUpdate() {
  $.get('latest_fen.txt', function (data) {
    board1.position(data.trim());
  });
}

// Poll every 2 seconds
setInterval(fetchFEN, 2000);