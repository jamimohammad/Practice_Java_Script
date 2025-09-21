//3.5 (تاریخ آینده)
//برنامه‌ای در جاوااسکریپت بنویسید که از کاربر روز فعلی هفته (یک عدد بین 0 تا 6) و تعداد روزهای آینده را بگیرد، سپس نام روز آینده هفته را محاسبه و نمایش دهد.

var currentDay = Number(prompt("Enter the day"))
var daysLater = Number(prompt("Enter the  future day:"));
var futureDay = (currentDay + daysLater) % 7;

switch(futureDay) {
    case 0:
        alert("Sunday");
        break;
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert(" Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    default:
        alert("false");
}
