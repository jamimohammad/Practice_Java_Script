// 5.2 (Repeat additions) Listing 5.4, SubtractionQuizLoop.java, generates five random 
// subtraction questions. Revise the program to generate ten random addition ques
// tions for two integers between 1 and 15. Display the correct count and test time.

let start = Date.now()

let correctCount = 0

for (let i = 0; i < 10; i++) {
   
    let num1 = Math.floor(Math.random() * 15) + 1;
    let num2 = Math.floor(Math.random() * 15) + 1;

    let answer = prompt(+ num1 + ' + '+ num2 );

    if (Number(answer) === num1 + num2) {
        correctCount++;
    }
}

let end = Date.now();
let test = end - start;
var all = test / 1000

alert("answer " + correctCount + "correct " + all + " second");
