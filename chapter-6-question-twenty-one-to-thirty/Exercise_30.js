// **6.30 (Game: craps) Craps is a popular dice game played in casinos. Write a program 
// to play a variation of the game, as follows:
// Roll two dice. Each die has six faces representing values 1, 2, …, and 6, respec
// tively. Check the sum of the two dice. If the sum is 2, 3, or 12 (called craps), you 
// lose; if the sum is 7 or 11 (called natural), you win; if the sum is another value 
// (i.e., 4, 5, 6, 8, 9, or 10), a point is established. Continue to roll the dice until either 
// a 7 or the same point value is rolled. If 7 is rolled, you lose. Otherwise, you win.
// Your program acts as a single player. Here are some sample runs.
// You rolled 5 + 6 = 11
// You win
// You rolled 1 + 2 = 3
// You lose
// You rolled 4 + 4 = 8
// point is 8
// You rolled 6 + 2 = 8
// You win
// You rolled 3 + 2 = 5
// point is 5
// You rolled 2 + 5 = 7
// You lose

function gameCraps() {
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    alert(random1);
    alert(random2);

    let plus = random1 + random2;

    if (plus == 2 || plus == 3 || plus == 12) {
        alert("You lose");
    } else if (plus == 7 || plus == 11) {
        alert("You win");
    } else if (plus == 4 || plus == 5 || plus == 6 || plus == 8 || plus == 9 || plus == 10) {
        let point = plus;
        alert("Point is " + point);

        for (; ;) {
            random1 = Math.floor(Math.random() * 6) + 1;
            random2 = Math.floor(Math.random() * 6) + 1;
            plus = random1 + random2;
            alert(random1);
            alert(random2);
            alert("You rolled " + plus);

            if (plus == point) {
                alert("You win");
                break;
            } else if (plus == 7) {
                alert("You lose");
                break;
            }
        }
    }
}
gameCraps();
