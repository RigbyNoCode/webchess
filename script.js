var board1 = Chessboard('board1', {
  position: 'start',
  draggable: false,
  pieceTheme: 'chessboardjs-1.0.0/img/chesspieces/wikipedia/{piece}.png'
});

function fetchFEN() {
  fetch('fen.txt') // this file should contain only the FEN string
    .then(response => response.text())
    .then(fen => {
      board1.position(fen.trim());
    })
    .catch(err => console.error('Error fetching FEN:', err));
}

// Poll every 2 seconds
setInterval(fetchFEN, 2000);