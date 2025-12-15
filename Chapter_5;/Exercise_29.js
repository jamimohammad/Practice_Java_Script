
// var year = Number(prompt("Enter year"));

// for (let month = 0; month < 12; month++) {

//     let monthName = "";
//     if (month == 0) monthName = "January";
//     else if (month == 1) monthName = "February";
//     else if (month == 2) monthName = "March";
//     else if (month == 3) monthName = "April";
//     else if (month == 4) monthName = "May";
//     else if (month == 5) monthName = "June";
//     else if (month == 6) monthName = "July";
//     else if (month == 7) monthName = "August";
//     else if (month == 8) monthName = "September";
//     else if (month == 9) monthName = "October";
//     else if (month == 10) monthName = "November";
//     else monthName = "December";


//     let numberOfDays = 31;
//     if (month == 3 || month == 5 || month == 8 || month == 10) numberOfDays = 30;
//     else if (month == 1) {
//         if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) numberOfDays = 29;
//         else numberOfDays = 28;
//     }

//     console.log("\n" + monthName + " " + year);
//     console.log("Sun Mon Tue Wed Thu Fri Sat");

//     let weak = new Date(year, month, 1).getDay();
//     let line = "";


//     for (let i = 0; i < weak; i++) {
//         line += "    ";
//     }


//     for (let day = 1; day <= numberOfDays; day++) {

//         if (day < 10) {
//             line += " " + day + "  ";
//         } else {
//             line += day + "  ";
//         }

//         weak++;

//         if (weak > 6) {
//             console.log(line);
//             line = "";
//             weak = 0;
//         }
//     }

//     if (line !== "") {
//         console.log(line);
//     }
// }
var year = Number(prompt("Enter year"));

for (let month = 0; month < 12; month++) {

    let monthName = "";

    if (month == 0) monthName = "January";
    else if (month == 1) monthName = "February";
    else if (month == 2) monthName = "March";
    else if (month == 3) monthName = "April";
    else if (month == 4) monthName = "May";
    else if (month == 5) monthName = "June";
    else if (month == 6) monthName = "July";
    else if (month == 7) monthName = "August";
    else if (month == 8) monthName = "September";
    else if (month == 9) monthName = "October";
    else if (month == 10) monthName = "November";
    else monthName = "December";

    // تعیین تعداد روزهای هر ماه
    let numberOfDays = 31;
    if (month == 3 || month == 5 || month == 8 || month == 10) {
        numberOfDays = 30;
    } else if (month == 1) {
        // بررسی سال کبیسه
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            numberOfDays = 29;
        } else {
            numberOfDays = 28;
        }
    }

    console.log("\n" + monthName + " " + year);
    console.log("Sun Mon Tue Wed Thu Fri Sat");

    let weekDay = new Date(year, month, 1).getDay();
    let line = "";

    // اضافه کردن فاصله برای روزهای قبل از اولین روز ماه
    for (let i = 0; i < weekDay; i++) {
        line += "    ";
    }

    for (let day = 1; day <= numberOfDays; day++) {

        if (day < 10) {
            line += " " + day + "  ";
        } else {
            line += day + "  ";
        }

        weekDay++;

        // چاپ هر هفته
        if (weekDay > 6) {
            console.log(line);
            line = "";
            weekDay = 0;
        }
    }

    // چاپ باقی‌مانده روزها
    if (line !== "") {
        console.log(line);
    }
}
