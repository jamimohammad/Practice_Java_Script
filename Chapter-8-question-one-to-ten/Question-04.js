//**8.4 (Compute the weekly hours for each employee) Suppose the weekly hours for all 
// employees are stored in a two-dimensional array. Each row records an employ
// ee’s seven-day work hours with seven columns. For example, the following 
// array stores the work hours for eight employees. Write a program that displays 
// employees and their total hours in decreasing order of the total hours.
//          Su M T W Th F Sa
// Employee 0 2 4 3 4 5 8 8
// Employee 1 7 3 4 3 3 4 4
// Employee 2 3 3 4 3 3 2 2
// Employee 3 9 3 4 7 3 4 1
// Employee 4 3 5 4 3 6 3 8
// Employee 5 3 4 4 6 3 4 4
// Employee 6 3 7 4 8 3 8 4
// Employee 7 6 3 5 9 2 7 9


let hours = [
  [2, 4, 3, 4, 5, 8, 8],
  [7, 3, 4, 3, 3, 4, 4],
  [3, 3, 4, 3, 3, 2, 2],
  [9, 3, 4, 7, 3, 4, 1],
  [3, 5, 4, 3, 6, 3, 8],
  [3, 4, 4, 6, 3, 4, 4],
  [3, 7, 4, 8, 3, 8, 4],
  [6, 3, 5, 9, 2, 7, 9]
];


let employees = [];


for (let i = 0; i < hours.length; i++) {
  let total = 0;

  for (let j = 0; j < hours[i].length; j++) {
    total += hours[i][j];
  }

employees[employees.length] = {
  id: i,
  totalHours: total
};}

for (let i = 0; i < employees.length - 1; i++) {
  for (let j = i + 1; j < employees.length; j++) {

    if (employees[i].totalHours < employees[j].totalHours) {
      let temp = employees[i];
      employees[i] = employees[j];
      employees[j] = temp;
    }

  }
}
for (let i = 0; i < employees.length; i++) {
  console.log("Employee " +employees[i].id +" Total Hours = " + employees[i].totalHours );
  
}