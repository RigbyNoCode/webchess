
 var board = Chessboard('myBoard', 'fen');

  function fetchFEN() {
    fetch('fen.txt')
      .then(response => response.text())
      .then(fenString => {
        board.position(fenString);
      })
      .catch(error => console.error('Error fetching FEN:', error));
  }

  fetchFEN();
  setInterval(fetchFEN, 2000);
