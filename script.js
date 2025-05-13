

//var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
//var board = Chessboard('myBoard', ruyLopez)

//var Lopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
//var board = Chessboard('board1', Lopez)



fetch('fen.txt?t=' + new Date().getTime())
  .then(response => response.text())
  .then(fen => {
    var fent = fen.trim(); // 
    const board = Chessboard('board1', {
     position: fent,
     pieceTheme: 'chessboardjs-1.0.0/img/chesspieces/wikipedia/{piece}.png'
    });
  })
  .catch(err => console.error('Error loading FEN:', err));


setInterval(function() {
  location.reload();  // This reloads the entire page
}, 3000);  // 3000 milliseconds = 3 seconds

