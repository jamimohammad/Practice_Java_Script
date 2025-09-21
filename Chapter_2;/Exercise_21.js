// 2.21 (محاسبه ارزش سرمایه‌گذاری در آینده)
// یک برنامه‌ی جاوااسکریپت بنویسید که مبلغ سرمایه‌گذاری، نرخ بهره سالانه و تعداد سال‌ها را از کاربر بگیرد و ارزش نهایی سرمایه‌گذاری را محاسبه کند.

var investmentAmount = Number(prompt('enter a number'));
var annualInterestRate = Number(prompt('enter a number'));
var numberOfYears = Number(prompt('enter a number'));

var monthlyRate = annualInterestRate / 1200;   
var months = numberOfYears * 12;           

var all = investmentAmount * (1 + monthlyRate) ** months;

alert(all);





