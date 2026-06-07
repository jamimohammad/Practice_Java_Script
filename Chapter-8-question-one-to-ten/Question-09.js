// ***8.9 (Game: play a tic-tac-toe game) In a game of tic-tac-toe, two players take turns
// marking an available cell in a 3 * 3 grid with their respective tokens (either
// X or O). When one player has placed three tokens in a horizontal, vertical, or
// diagonal row on the grid, the game is over and that player has won. A draw (no
// winner) occurs when all the cells on the grid have been filled with tokens and
// neither player has achieved a win. Create a program for playing tic-tac-toe.
//  The program prompts two players to enter an X token and O token alternately. Whenever a token is entered, the program redisplays the board on the
// console and determines the status of the game (win, draw, or continue). Here
// is a sample run:
// ——————-——————
// | | | |
// ——————-——————
// | | | |
// ——————-——————
// | | | |
// ——————-——————
// Enter a row (0, 1, or 2) for player X: 1
// Enter a column (0, 1, or 2) for player X: 1
// ——————-——————
// | | | |
// ——————-——————
// | | X | |
// ——————-——————
// | | | |
// ——————-——————
// Enter a row (0, 1, or 2) for player O: 1
// Enter a column (0, 1, or 2) for player O: 2
// ——————-——————
// | | | |
// ——————-——————
// | | X | O |
// ——————-——————
// | | | | | | 
// Enter a row (0, 1, or 2) for player X:
//  . . .
// ——————-——————
// | X | | |
// ——————-——————
// | O | X | O |
// ——————-——————
// | | | X |
// ——————-——————
// X player won 

let board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];
  
  let player = "X";
  
  function printBoard() {
    console.log("-------------");
  
    for (let i = 0; i < 3; i++) {
      console.log(`| ${board[i][0]} | ${board[i][1]} | ${board[i][2]} |`);
         
      console.log("-------------");
    }
  }
  
  function winner(player) {
  
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player )   
     {
        return true;
      }
    }
  
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === player && board[1][i] === player &&board[2][i] === player )    
      {
        return true;
      }
    }
  
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player)
     {
      return true;
    }
  
    if ( board[0][2] === player && board[1][1] === player && board[2][0] === player) 
    {
      return true;
    }
  
    return false;
  }
  
  function check() {
  
    for (let i = 0; i < 3; i++) {
  
      for (let j = 0; j < 3; j++) {
  
        if (board[i][j] === " ") {
          return false;
        }}}
  
    return true;
  }

  while (true) {
  
    printBoard();
  
    let row = Number(prompt(`Enter row (0, 1, or 2) for player ${player}`));
    let column = Number(prompt(`Enter column (0, 1, or 2) for player ${player}`));
      
    if (row < 0 || row > 2 ||column < 0 ||column > 2)
     {
      console.log("Invalid position!");
      continue;
    }
 
    if (board[row][column] !== " ") {
      console.log("used");
      continue;
    }
  
    board[row][column] = player;
  
    if (winner(player)) {
      printBoard();
      console.log(`${player} player won`);
      break;
    }
  
    if (check()) {
      printBoard();
      console.log("Game draw");
      break;
    }
  
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
  }