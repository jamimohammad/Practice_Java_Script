// // ***7.22 (Game: Eight Queens) The classic Eight Queens puzzle is to place eight queens 
// // on a chessboard such that no two queens can attack each other (i.e., no two queens 
// // are on the same row, same column, or same diagonal). There are many possible 
// // solutions. Write a program that displays one such solution. A sample output is 
// // shown below:
// // |Q| | | | | | | |
// // | | | | |Q| | | |
// // | | | | | | | |Q|
// // | | | | | |Q| | |
// // | | |Q| | | | | |
// // | | | | | | |Q| |
// // | |Q| | | | | | |
// // | | | |Q| | | | | 


// let N = 8;
// let board = [];
// for (let i = 0; i < N; i++) {
//     board.push(0);
// }

// function isSafe(row, col) {
//     for (let i = 0; i < row; i++) {
//         if (board[i] === col || Math.abs(board[i] - col) === row - i) {
//             return false;
//         }
//     }
//     return true;
// }

// function solve(row = 0) {
//     if (row === N) {
//         printBoard();
//         return true;
//     }

//     for (let col = 0; col < N; col++) {
//         if (isSafe(row, col)) {
//             board[row] = col;
//             if (solve(row + 1)) return true;
//         }
//     }

//     return false;
// }

// function printBoard() {
//     for (let row = 0; row < N; row++) {
//         let line = "";
//         for (let col = 0; col < N; col++) {
//             line += (board[row] === col) ? "|Q" : "| ";
//         }
//         line += "|";
//         console.log(line);
//     }
// }

// solve();



