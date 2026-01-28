// **6.32 (Game: chance of winning at craps) Revise Exercise 6.30 to run it 10,000 times 
// and display the number of winning games.

function gameCraps() {
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;

    let sum = random1 + random2;

    if (sum == 2 || sum == 3 || sum == 12) {
        return false;
    } else if (sum == 7 || sum == 11) {
        return true;
    } else {
        let point = sum;

        for (; ;) {
            random1 = Math.floor(Math.random() * 6) + 1;
            random2 = Math.floor(Math.random() * 6) + 1;
            sum = random1 + random2;

            if (sum == point) {
                return true;
            } else if (sum == 7) {
                return false;
            }
        }
    }
}

let wins = 0;
let totalGames = 10000;

for (let i = 0; i < totalGames; i++) {
    if (gameCraps()) {
        wins++;
    }
}

console.log("Total wins in " + totalGames + " games: " + wins);
