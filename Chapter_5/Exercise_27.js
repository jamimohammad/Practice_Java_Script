// // **5.27 (Display leap years) Write a program that displays all the leap years, ten per line, 
// // from 101 to 2100, separated by exactly one space. Also display the number of 
// // leap years in this period.

let count = 0;
let line = "";

for (let i = 101; i <= 2100; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        count++;
        line += i;
        if (count % 10 !== 0) {
            line += " ";
        }
        if (count % 10 === 0) {
            console.log(line);
            line = "";
        }
    }
}

if (line !== "") {
    console.log(line);
}
console.log("leap years:" + count);
