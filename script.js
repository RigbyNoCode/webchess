
// Initialize the board initially with 'start' (default starting position)
var board = Chessboard('myBoard', 'start');

// Function to fetch FEN and update the board
function fetchFEN() {
  fetch('fen.txt')
    .then(response => response.text())
    .then(fenString => {
      board.position(fenString);  // Update the board position with the fetched FEN
    })
    .catch(error => console.error('Error fetching FEN:', error));
}

// Poll every 2 seconds to fetch the updated FEN
setInterval(fetchFEN, 2000);

