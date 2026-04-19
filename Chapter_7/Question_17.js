// **7.17 (Sort students) Write a program that prompts the user to enter the number of stu
// dents, the students’ names, and their scores, and prints student names in decreas
// ing order of their scores.

let students = [];
let number = Number(prompt("Enter number of students:"));

for (let i = 0; i < number; i++) {
  let name = prompt("Enter student name:");
  let score = Number(prompt("Enter student score:"));

  let student = {
    name: name,
    score: score
  };

  students.push(student);
}

students.sort(function(a, b) {
  return b.score - a.score;
});

console.log(students);

