// (Financial application: compare loans with various interest rates) Write a pro
// gram that lets the user enter the loan amount and loan period in number of years 
// and displays the monthly and total payments for each interest rate starting from 
// 5% to 8%, with an increment of 1/8. Here is a sample run:
//  Loan Amount: 10000
//  Number of Years: 5
//  Interest Rate    Monthly Payment    Total Payment
//  5.000%           188.71             11322.74
//  5.125%           189.29             11357.13
//  5.250%           189.86             11391.59
//  ...
//  7.875%           202.17             12129.97
//  8.000%           202.76             12165.84

let amount = Number(prompt("amount")); 
let year = Number(prompt("year"));  

for (let rate = 5; rate <= 8; rate += 0.125) {
    let r = rate / 1200;         
    let n = year * 12;            
    let month = amount * r / (1 - (1 + r) ** -n);
    let total = month * n;

    console.log(rate + "% | " + month + " | " + total);
}
                                                                                                         