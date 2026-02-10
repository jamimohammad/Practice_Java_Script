//4.23 (Financial application: payroll) Write a program that reads the following infor
// mation and prints a payroll statement: 
// Employee’s name (e.g., Smith)
//  Number of hours worked in a week (e.g., 10)
//  Hourly pay rate (e.g., 9.75)
//  Federal tax withholding rate (e.g., 20%)
//  State tax withholding rate (e.g., 9%)

var name1 = prompt('Enter your name');
var hours = Number(prompt('Enter hours worked in a week'));
var rate = Number(prompt('Enter hourly pay rate'));
var federal = Number(prompt('Enter federal tax rate')) / 100;
var state = Number(prompt('Enter state tax rate')) / 100;

var gross = hours * rate;              
var totalTax = gross * (federal + state)
var net = gross - totalTax;          

alert(name1 + gross + totalTax + net)
