// *7.13 (Random number chooser) Write a method that returns a random number between 
// 1 and 54, excluding the numbers passed in the argument. The method header is 
// specified as follows:

function getRandom(numbers) {

    while (true) {
        let randomNum = Math.floor(Math.random() * 54) + 1;

        if (!numbers.includes(randomNum)) {
            return randomNum;
        }
    }
}

let excluded = [3, 5, 12, 20];
console.log(getRandom(excluded));
