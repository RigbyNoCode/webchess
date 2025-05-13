

//var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
//var board = Chessboard('myBoard', ruyLopez)

//var Lopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
//var board = Chessboard('board1', Lopez)



fetch('fen.txt')
  .then(response => response.text())
  .then(fen => {
    var fent = fen.trim(); // 
    const board = Chessboard('board1', {
     position: fent
    });
  })
  .catch(err => console.error('Error loading FEN:', err));


// Initial load
updateBoardFromFEN();

// Poll every 2 seconds
setInterval(updateBoardFromFEN, 2000);

