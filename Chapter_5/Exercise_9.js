// *5.9 (Find the two highest scores) Write a program that prompts the user to enter the 
// number of students and each student’s name and score, and finally displays the 
// student with the highest score and the student with the second-highest score.

let n = Number(prompt("enter the number of students"));
let maxscore = 0
let secondmax = 0
let topstudent = "";
let secondstudent = "";

for (let i = 0; i < n; i++) {
    let name = prompt("enter the name of student")
    let score = Number(prompt("enter the score"))

    if (score > maxscore) {
        secondmax = maxscore;
        secondstudent = topstudent
        maxscore = score
        topstudent = name
    } else if (score > secondmax) {
        secondmax = score
        secondstudent = name
    }
}

alert("top student: " + topstudent + " scores " + maxscore)
alert("second top: " + secondstudent + " scores " + secondmax)
