// 6.11 (Financial application: compute commissions) Write a method that computes the 
// commission, using the scheme in Programming Exercise 5.39. The header of the 
// method is as follows:
// public static double computeCommission(double salesAmount)
// Write a test program that displays the following table:
// Sales Amount Commission
// 10000  900.0
// 15000 1500.0
// ...
// 95000 11100.0
// 100000 11700.0

function computeCommission(salesAmount) {
    let commission = 0;
    if (salesAmount <= 5000) {
        commission = salesAmount * 0.08;
    } else if (salesAmount <= 10000) {
        commission = 5000 * 0.08 + (salesAmount - 5000) * 0.10;
    } else {
        commission = 5000 * 0.08 + 5000 * 0.10 + (salesAmount - 10000) * 0.12;
    }
    return commission;
}

console.log("Sales Amount\tCommission");
for (let sales = 10000; sales <= 100000; sales += 5000) {
    console.log(sales + "\t\t\t\t" + computeCommission(sales).toFixed(1));
}
