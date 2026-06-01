// *5.22 (Financial application: loan amortization schedule) The monthly payment for a 
// given loan pays the principal and the interest. The monthly interest is computed 
// by multiplying the monthly interest rate and the balance (the remaining princi
// pal). The principal paid for the month is therefore the monthly payment minus 
// the monthly interest. Write a program that lets the user enter the loan amount, 

let loan = Number(prompt("amount"))
let years = Number(prompt("number of year "))
let Percentage = Number(prompt("Percentage"))

let mr = Percentage / 1200
let months = years * 12

let mp = loan * mr / (1 - Math.pow(1 + mr, - months))

let total = mp * months

console.log("monthly  " + mp)
console.log("total : " + total)

console.log("Payment        Interest       money      Balance")

let balance = loan;

for (let i = 1; i <= months; i++) {
    let interest = balance * mr
    let money = mp - interest  
    balance = balance - money  
    
    let i1 = interest.toFixed(2)
        let m1 = money.toFixed(2)
            let b1 = balance.toFixed(2)
               

   console.log(i + "               " + i1 + "         " + m1 + "     " + b1)

}
