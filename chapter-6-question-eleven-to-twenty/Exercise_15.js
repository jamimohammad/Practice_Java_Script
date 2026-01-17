// *6.15 (Financial application: print a tax table) Listing 3.5 gives a program to compute 
// tax. Write a method for computing tax using the following header:
// VideoNote
// Estimate p
// public static double computeTax(int status, double taxableIncome)
// 238 Chapter 6 Methods
// Use this method to write a program that prints a tax table for taxable income from 
// $50,000 to $60,000 with intervals of $50 for all the following statuses:
// Taxable 
// Income
// 50000
// 50050
// ...
// 59950
// 60000
// Single
// 8688
// 8700
// 11175
// 11188
// Married Joint 
// or Qualifying 
// Widow(er)
// 6665
// 6673
// 8158
// 8165
// Married 
// Separate
// 8688
// 8700
// 11175
// 11188
// Head of 
// a House
// 7353
// 7365
// 9840
// 9853
// Hint: round the tax into integers using Math.round (i.e., Math
// .round(computeTax(status, taxableIncome)).

function computeTax(status, income) {
    let tax = 0;

    if (status === 0) { // Single
        if (income <= 8350) tax = income * 0.10;
        else if (income <= 33950) tax = 8350*0.10 + (income-8350)*0.15;
        else if (income <= 82250) tax = 8350*0.10 + (33950-8350)*0.15 + (income-33950)*0.25;
        else if (income <= 171550) tax = 8350*0.10 + (33950-8350)*0.15 + (82250-33950)*0.25 + (income-82250)*0.28;
        else if (income <= 372950) tax = 8350*0.10 + (33950-8350)*0.15 + (82250-33950)*0.25 + (171550-82250)*0.28 + (income-171550)*0.33;
        else tax = 8350*0.10 + (33950-8350)*0.15 + (82250-33950)*0.25 + (171550-82250)*0.28 + (372950-171550)*0.33 + (income-372950)*0.35;
    }
    else if (status === 1) { // Married Filing Jointly or Widow(er)
        if (income <= 16700) tax = income * 0.10;
        else if (income <= 67900) tax = 16700*0.10 + (income-16700)*0.15;
        else if (income <= 137050) tax = 16700*0.10 + (67900-16700)*0.15 + (income-67900)*0.25;
        else if (income <= 208850) tax = 16700*0.10 + (67900-16700)*0.15 + (137050-67900)*0.25 + (income-137050)*0.28;
        else if (income <= 372950) tax = 16700*0.10 + (67900-16700)*0.15 + (137050-67900)*0.25 + (208850-137050)*0.28 + (income-208850)*0.33;
        else tax = 16700*0.10 + (67900-16700)*0.15 + (137050-67900)*0.25 + (208850-137050)*0.28 + (372950-208850)*0.33 + (income-372950)*0.35;
    }
    else if (status === 2) { // Married Filing Separately
        if (income <= 8350) tax = income * 0.10;
        else if (income <= 33950) tax = 8350*0.10 + (income-8350)*0.15;
        else if (income <= 68525) tax = 8350*0.10 + (33950-8350)*0.15 + (income-33950)*0.25;
        else if (income <= 104425) tax = 8350*0.10 + (33950-8350)*0.15 + (68525-33950)*0.25 + (income-68525)*0.28;
        else if (income <= 186475) tax = 8350*0.10 + (33950-8350)*0.15 + (68525-33950)*0.25 + (104425-68525)*0.28 + (income-104425)*0.33;
        else tax = 8350*0.10 + (33950-8350)*0.15 + (68525-33950)*0.25 + (104425-68525)*0.28 + (186475-104425)*0.33 + (income-186475)*0.35;
    }
    else if (status === 3) { // Head of Household
        if (income <= 11950) tax = income * 0.10;
        else if (income <= 45500) tax = 11950*0.10 + (income-11950)*0.15;
        else if (income <= 117450) tax = 11950*0.10 + (45500-11950)*0.15 + (income-45500)*0.25;
        else if (income <= 190200) tax = 11950*0.10 + (45500-11950)*0.15 + (117450-45500)*0.25 + (income-117450)*0.28;
        else if (income <= 372950) tax = 11950*0.10 + (45500-11950)*0.15 + (117450-45500)*0.25 + (190200-117450)*0.28 + (income-190200)*0.33;
        else tax = 11950*0.10 + (45500-11950)*0.15 + (117450-45500)*0.25 + (190200-117450)*0.28 + (372950-190200)*0.33 + (income-372950)*0.35;
    }

    return Math.round(tax);
}
console.log("Income\tSingle\tMarried Joint\tMarried Separate\tHead of House");
for (let income = 50000; income <= 60000; income += 50) {
    console.log(income + "\t" +computeTax(0, income) + "\t" +computeTax(1, income) + "\t\t" +computeTax(2, income) + "\t\t" +computeTax(3, income)
    );
}