// ***5.34 (Game: scissor, rock, paper) Programming Exercise  3.17 gives a program that 
// plays the scissor-rock-paper game. Revise the program to let the user continu
// ously play until either the user or the computer wins more than two times than its 
// opponent.

let userinput = 0
let computerinput = 0

for (; ;) {

    let userinput = Number(prompt('Please Enter a Number'+'       '+ 'scissor(0)' + '     rock(1)' + '    paper(2)'))

    let computerinput = Math.floor(Math.random() * 3)
    alert('computerinput' + "      " + computerinput)

    if (computerinput === userinput) {
        alert('Equal')
    } else if (computerinput === 0 && userinput === 1) {
        userinput++
        alert( 'The user won')
    } else if (computerinput === 0 && userinput === 2) {
        computerinput++
        alert('The user failed')
    } else if (computerinput === 1 && userinput === 2) {
        userinput++
        alert( 'The user won')
    } else if (computerinput === 2 && userinput === 0) {
        userinput++
        alert( 'The user won')
    } else if (computerinput === 2 && userinput === 1) {
        computerinput++
        alert('the user failed')
    } else if (computerinput === 1 && userinput === 0) {
        computerinput++
        alert('the user failed again')
    } else {
        alert('bad')
    }

    if (userinput - computerinput > 2 || computerinput - userinput > 2) {
        break;
    }

}