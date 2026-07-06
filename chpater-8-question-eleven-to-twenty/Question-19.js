// ***8.19 (Game: connect four) Connect four is a two-player board game in which the
// players alternately drop colored disks into a seven-column, six-row vertically
// suspended grid, as shown below.
//  The objective of the game is to connect four same-colored disks in a row, a column, or a diagonal before your opponent can do likewise. The program prompts
// two players to drop a red or yellow disk alternately. In the preceding figure, the
// red disk is shown in a dark color and the yellow in a light color. Whenever a disk
// is dropped, the program redisplays the board on the console and determines the
// status of the game (win, draw, or continue). Here is a sample run: 
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// ---------------
// Drop a red disk at column (0–6): 0
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// |R| | | | | | |
// ---------------   Drop a yellow disk at column (0–6): 3
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// | | | | | | | |
// |R| | |Y| | | |
// . . .
// . . .
// . . .
// Drop a yellow disk at column (0–6): 6
// | | | | | | | |
// | | | | | | | |
// | | | |R| | | |
// | | | |Y|R|Y| |
// | | |R|Y|Y|Y|Y|
// |R|Y|R|Y|R|R|R|
// ---------------
// The yellow player won      

let rw = 6;
let co = 7;

let board = [];

for (let i = 0; i < 6; i++) {
    board[i] = [];
    for (let j = 0; j < 7; j++) {
        board[i][j] = " ";
    }
}

let currentplayer = "R";

function printb() {

    for (let r = 0; r < rw; r++) {
        console.log("|" + board[r].join("|") + "|");
    }
    console.log("---------------------");
}

function drop(col, player) {
    for (let r = rw - 1; r >= 0; r--) {
        if (board[r][col] === " ") {
            board[r][col] = player;
            return true;
        }
    }
    return false;
}

function check(player) {

    for (let r = 0; r < rw; r++) {
        for (let c = 0; c <= co - 4; c++) {
            if (
                board[r][c] === player &&
                board[r][c + 1] === player &&
                board[r][c + 2] === player &&
                board[r][c + 3] === player
            ) return true;
        }
    }


    for (let r = 0; r <= rw - 4; r++) {
        for (let c = 0; c < co; c++) {
            if (
                board[r][c] === player &&
                board[r + 1][c] === player &&
                board[r + 2][c] === player &&
                board[r + 3][c] === player
            ) return true;
        }
    }


    for (let r = 0; r <= rw - 4; r++) {
        for (let c = 0; c <= co - 4; c++) {
            if (
                board[r][c] === player &&
                board[r + 1][c + 1] === player &&
                board[r + 2][c + 2] === player &&
                board[r + 3][c + 3] === player
            ) return true;
        }
    }

    for (let r = 3; r < rw; r++) {
        for (let c = 0; c <= co - 4; c++) {
            if (
                board[r][c] === player &&
                board[r - 1][c + 1] === player &&
                board[r - 2][c + 2] === player &&
                board[r - 3][c + 3] === player
            ) return true;
        }
    }

    return false;
}
function isdrow() {
    for (let i = 0; i < board[0].length; i++) {
        if (board[0][i] === " ") {
            return false;
        }
    }
    return true;
}

function nextt() {
    printb();

    let color = currentplayer === "R" ? "red" : "yellow";
    let input = Number(prompt(`Drop a ${color} disk at column (0-6):`));

    if (isNaN(input) || input < 0 || input > 6) {
        alert("Invalid input! Enter 0-6");
        nextt();
        return;
    }

    if (!drop(input, currentplayer)) {
        alert("Column is full!");
        nextt();
        return;
    }

    if (check(currentplayer)) {
        printb();
        console.log(color.toUpperCase() + " player WON ");
        return;
    }

    if (isdrow()) {
        printb();
        console.log("Game is a DRAW");
        return;
    }

    currentplayer = currentplayer === "R" ? "Y" : "R";

    nextt();
}

nextt();