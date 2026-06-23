// **6.34 (Print calendar) Programming Exercise 3.21 uses Zeller’s congruence to calcu
// late the day of the week. Simplify Listing 6.12, PrintCalendar.java, using Zeller’s 
// algorithm to get the start day of the month.

function firstDayOfMonth(year, month) {
    var q = 1;

    if (month === 1 || month === 2) {
        month += 12;
        year--;
    }

    var change1 = year % 100;
    var change2 = Math.floor(year / 100);
    var day = (q + Math.floor((26 * (month + 1)) / 10) + change1 + Math.floor(change1 / 4) + Math.floor(change2 / 4) + 5 * change2) % 7;
switch (day) {
    case 0:
        return "Saturday";
    case 1:
        return "Sunday";
    case 2:
        return "Monday";
    case 3:
        return "Tuesday";
    case 4:
        return "Wednesday";
    case 5:
        return "Thursday";
    case 6:
        return "Friday";
}
}
var year = Number(prompt('Enter year'));
var month = Number(prompt('Enter month (1-12)'));

var day = firstDayOfMonth(year, month);
console.log("The first day of the month is " + day);
