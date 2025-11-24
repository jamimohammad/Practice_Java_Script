//(Financial application: payroll) Write a program that reads the following infor
// mation and prints a payroll statement: 
// Employee’s name (e.g., Smith)
//  Number of hours worked in a week (e.g., 10)
//  Hourly pay rate (e.g., 9.75)
//  Federal tax withholding rate (e.g., 20%)
//  State tax withholding rate (e.g., 9%)

function test() {

    var name1 = prompt('Enter your name:');
    var hours = Number(prompt('Enter hours worked in a week:'));
    var rate = Number(prompt('Enter hourly pay rate:'));
    var federal = Number(prompt('Enter federal tax rate')) / 100;
    var state = Number(prompt('Enter state tax rate')) / 100;

    var grossPay = hours * rate;
    var federalTax = grossPay * federal;
    var stateTax = grossPay * state;
    var totalTax = federalTax + stateTax;
    var netPay = grossPay - totalTax;

var all = " Name: " + name1 + "\n" +"Hours: " + hours + "\n" +"Pay : " + rate + "\n" +
"Gross: " + grossPay + "\n" +"  Federal Tax: " + federalTax + "\n" +"  State Tax: " + stateTax + "\n" +
"Total Deduction: " + totalTax + "\n" +"Net: " + netPay;

    alert(all);
}

test();
