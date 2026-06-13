// // *6.16 (Number of days in a year) Write a method that returns the number of days in a 
// // year using the following header:
// // public static int numberOfDaysInAYear(int year)
// // Write a test program that displays the number of days in year from 2000 to 2020.

function numberOfDaysInAYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366;
    } else {
        return 365; 
    }
}

for (let year = 2000; year <= 2020; year++) {
    console.log("Year " + year + " has " + numberOfDaysInAYear(year) + " days");
}
