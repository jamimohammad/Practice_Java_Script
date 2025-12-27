// *5.42 (Financial application: find the sales amount) Rewrite Programming Exercise 
// 5.39 as follows:
//  ■ Use a for loop instead of a do-while loop.
//  ■ Let the user enter COMMISSION_SOUGHT instead of fixing it as a constant.

let salafy = 5000;
let commission1 = Number(prompt("Enter commission"));

let sales = 0;
let commission = 0;

for (sales = 1; ; sales++) {
    if (sales <= 5000) {
        commission = sales * 0.08;
    } 
    else if (sales <= 10000) {
        commission = 5000 * 0.08 + (sales - 5000) * 0.10;
    } 
    else {
        commission =5000 * 0.08 +  5000 * 0.10 +(sales - 10000) * 0.12;
    }

    if (commission >= commission1) {
        break;
    }
}

console.log("Minimum" + sales);
console.log("Commission" + commission.toFixed(2));
