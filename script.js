

//var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
//var board = Chessboard('myBoard', ruyLopez)

//var Lopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
//var board = Chessboard('board1', Lopez)


const board = Chessboard('board1', {
    position: 'start'
});

fetch('load_fen.php')
  .then(response => response.text())
  .then(fen => {
    board.position(fen.trim());
  })
  .catch(err => console.error('Error loading FEN:', err));


// Initial load
updateBoardFromFEN();

// Poll every 2 seconds
setInterval(updateBoardFromFEN, 2000);