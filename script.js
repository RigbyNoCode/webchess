
 var board = Chessboard('myBoard', 'start');

  function fetchFEN() {
    fetch('fen.txt')
      .then(response => response.text())
      .then(fenString => {
        var fen = fenString.trim();
        if (fen) {
          board.position(fen);
        } else {
          console.error('FEN string is empty or invalid');
        }
  }
}

  fetchFEN();
  setInterval(fetchFEN, 2000);
