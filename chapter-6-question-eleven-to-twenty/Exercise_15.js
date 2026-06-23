// // *6.15 (Financial application: print a tax table) Listing 3.5 gives a program to compute 
// // tax. Write a method for computing tax using the following header:
// // VideoNote
// // Estimate p
// // public static double computeTax(int status, double taxableIncome)
// // 238 Chapter 6 Methods
// // Use this method to write a program that prints a tax table for taxable income from 
// // $50,000 to $60,000 with intervals of $50 for all the following statuses:
// // Taxable 
// // Income
// // 50000
// // 50050
// // ...
// // 59950
// // 60000
// // Single
// // 8688
// // 8700
// // 11175
// // 11188
// // Married Joint 
// // or Qualifying 
// // Widow(er)
// // 6665
// // 6673
// // 8158
// // 8165
// // Married 
// // Separate
// // 8688
// // 8700
// // 11175
// // 11188
// // Head of 
// // a House
// // 7353
// // 7365
// // 9840
// // 9853
// // Hint: round the tax into integers using Math.round (i.e., Math
// // .round(computeTax(status, taxableIncome)).


function computeTax(status, income) {
    let tax = 0;

    let b1, b2, b3, b4, b5;
    if (status === 0) { // Single
        b1 = 8350; b2 = 33950; b3 = 82250; b4 = 171550; b5 = 372950;
    } else if (status === 1) { // Married Joint
        b1 = 16700; b2 = 67900; b3 = 137050; b4 = 208850; b5 = 372950;
    } else if (status === 2) { // Married Separate
        b1 = 8350; b2 = 33950; b3 = 68525; b4 = 104425; b5 = 186475;
    } else if (status === 3) { // Head of Household
        b1 = 11950; b2 = 45500; b3 = 117450; b4 = 190200; b5 = 372950;
    }

    const r1 = 0.10, r2 = 0.15, r3 = 0.25, r4 = 0.28, r5 = 0.33, r6 = 0.35;

    if (income <= b1) tax = income * r1;
    else if (income <= b2) tax = b1*r1 + (income-b1)*r2;
    else if (income <= b3) tax = b1*r1 + (b2-b1)*r2 + (income-b2)*r3;
    else if (income <= b4) tax = b1*r1 + (b2-b1)*r2 + (b3-b2)*r3 + (income-b3)*r4;
    else if (income <= b5) tax = b1*r1 + (b2-b1)*r2 + (b3-b2)*r3 + (b4-b3)*r4 + (income-b4)*r5;
    else tax = b1*r1 + (b2-b1)*r2 + (b3-b2)*r3 + (b4-b3)*r4 + (b5-b4)*r5 + (income-b5)*r6;

    return Math.round(tax);
}

console.log("Income\tSingle\tMarried Joint\tMarried Separate\tHead of House");
for (let income = 50000; income <= 60000; income += 50) {
console.log(income + "\t" +computeTax(0, income) + "\t" +computeTax(1, income) + "\t" +computeTax(2, income) + "\t\t" +computeTax(3, income)
    );
}
