// // ***5.34 (Game: scissor, rock, paper) Programming Exercise  3.17 gives a program that 
// // plays the scissor-rock-paper game. Revise the program to let the user continu
// // ously play until either the user or the computer wins more than two times than its 
// // opponent.

for (;;) {
    let user = Number(prompt('Enter: scissor(0) rock(1) paper(2)'));
    let computer = Math.floor(Math.random() * 3);

    alert('Computer: ' + computer);

    let result = (user - computer + 3) % 3;

    if (result === 0) {
        alert('Equal');
    } else if (result === 1) {
        alert('User won');
    } else {
        alert('User lost');
    }
}