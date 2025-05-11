
var board = Chessboard('myBoard', 'start');  // Initially set to 'start'

function updateBoard() {
  fetch('http://bogdanpi.local:8080/get_fen')
    .then(response => response.text())
    .then(fenString => {
      board.position(fenString);  // Update board with the new FEN string
    })
    .catch(error => console.error('Error fetching FEN:', error));
}

// You can call updateBoard periodically or based on an event to update the chessboard
setInterval(updateBoard, 1000);  // Update board every second


// Poll every 2 seconds
setInterval(fetchFEN, 2000);

