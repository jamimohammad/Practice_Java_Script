// **6.33 (Current date and time) Invoking System.currentTimeMillis() returns the 
// elapsed time in milliseconds since midnight of January 1, 1970. Write a program 
// that displays the date and time. Here is a sample run:
// Current date and time is May 16, 2012 10:34:23

var now = new Date();

var year = now.getFullYear();
var monthNumber = now.getMonth() + 1;
var day = now.getDate();

var month;
switch (monthNumber) {
  case 1: month = "January"; break;
  case 2: month = "February"; break;
  case 3: month = "March"; break;
  case 4: month = "April"; break;
  case 5: month = "May"; break;
  case 6: month = "June"; break;
  case 7: month = "July"; break;
  case 8: month = "August"; break;
  case 9: month = "September"; break;
  case 10: month = "October"; break;
  case 11: month = "November"; break;
  case 12: month = "December"; break;
}

var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

console.log(
  "Current date and time is " + month + " " + day + ", " + year + " " +
  hours + ":" + minutes + ":" + seconds
);
