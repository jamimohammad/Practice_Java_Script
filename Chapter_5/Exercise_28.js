// **5.28 (Display the first days of each month) Write a program that prompts the user to 
// enter the year and first day of the year, and displays the first day of each month 
// in the year. For example, if the user entered the year 2013, and 2 for Tuesday, 
// January 1, 2013, your program should display the following output:
// January 1, 2013 is Tuesday
// ...
// December 1, 2013 is Sunday

var year = Number(prompt('enter year'))

for (let i = 0; i <= 11; i++) {
    let date = new Date(year, i, 1)
    let day = date.getDay()

    let dayname = "";
    if (day == 0) dayname = "Sunday";
    else if (day == 1) dayname = "Monday";
    else if (day == 2) dayname = "Tuesday";
    else if (day == 3) dayname = "Wednesday";
    else if (day == 4) dayname = "Thursday";
    else if (day == 5) dayname = "Friday";
    else dayname = "Saturday";

    let month = "";
    if (i == 0) month = "January";
    else if (i == 1) month = "February";
    else if (i == 2) month = "March";
    else if (i == 3) month = "April";
    else if (i == 4) month = "May";
    else if (i == 5) month = "June";
    else if (i == 6) month = "July";
    else if (i == 7) month = "August";
    else if (i == 8) month = "September";
    else if (i == 9) month = "October";
    else if (i == 10) month = "November";
    else month = "December";

    console.log(month + " 1, " + year + " is " + dayname)
}
