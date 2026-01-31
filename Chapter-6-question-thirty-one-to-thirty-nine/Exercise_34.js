// **6.34 (Print calendar) Programming Exercise 3.21 uses Zeller’s congruence to calcu
// late the day of the week. Simplify Listing 6.12, PrintCalendar.java, using Zeller’s 
// algorithm to get the start day of the month.

function firstDayOfMonth(year, month) {
    var q = 1;

    if (month === 1 || month === 2) {
        month += 12;
        year--;
    }

    var k = year % 100;
    var j = Math.floor(year / 100);
    var h = (q + Math.floor((26 * (month + 1)) / 10) + k + Math.floor(k / 4) + Math.floor(j / 4) + 5 * j) % 7;

    if (h === 0) return "Saturday";
    if (h === 1) return "Sunday";
    if (h === 2) return "Monday";
    if (h === 3) return "Tuesday";
    if (h === 4) return "Wednesday";
    if (h === 5) return "Thursday";
    if (h === 6) return "Friday";
}
var year = Number(prompt('Enter year'));
var month = Number(prompt('Enter month (1-12)'));

var day = firstDayOfMonth(year, month);
console.log("The first day of the month is " + day);
