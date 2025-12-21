//(Days of a month) Write a program that prompts the user to enter a year and the 
// first three letters of a month name (with the first letter in uppercase) and displays 
// the number of days in the month. Here is a sample run:

var year = Number(prompt('Enter a Year'))
var month = prompt('Enter the first Three letter of a month')

month = month.toUpperCase()

if (month === 'JAN' || month === 'MAR' || month === 'MAY' || month === 'JUL' || month === 'AUG' || month === 'OCT' || month === 'DEC'){
    alert(month + ';' + 31)
}else if (month === 'APR' || month === 'JUN' || month === 'SEP' || month === 'NOV'){
    alert(month + ';' + 30)
}else if (year % 4 == 0 && year % 100 != 0 && month === 'FEB') {
    alert(month + ';' + 29 + 'leap year');
} else if (year % 400 == 0 && month === 'FEB') {
    alert(month + ';' + 29 + 'leap year'); 
}else if (month === 'FEB') {
    alert(month + ';' + 28)
}else{
    alert('bad')
}