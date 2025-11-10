// 5.8 (Find the highest score) Write a program that prompts the user to enter the num
// ber of students and each student’s name and score, and finally displays the name 
// of the student with the highest score.

let n = Number(prompt("enter the number of student "))
let maxScore = 0;
let student = "";

for (let i = 0; i < n; i++) {
    let name = prompt("enter the name of student");
    let score = Number(prompt("enter the student's scores"));

    if (score > maxScore) {
        maxScore = score;      
        student = name;      
    }
}

alert("top student" + student + " scores " + maxScore);
                                                         