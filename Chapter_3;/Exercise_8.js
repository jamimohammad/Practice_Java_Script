// 3.8 (مرتب‌سازی سه عدد صحیح)
// برنامه‌ای در جاوااسکریپت بنویسید که سه عدد صحیح از کاربر بگیرد و آن‌ها را به ترتیب غیرکاهشی نمایش دهد.

var a = Number(prompt('Enter first number:'));
var b = Number(prompt('Enter second number:'));
var c = Number(prompt('Enter third number:'));

if (a >= b && a >= c) {
    if (b >= c) {
        console.log(c, b, a);
    } else {
        console.log(b, c, a);
    }
} else if (b >= a && b >= c) {
    if (a >= c) {
        console.log(c, a, b);
    } else {
        console.log(a, c, b);
    }
} else if (c >= a && c >= b) {
    if (a >= b) {
        console.log(b, a, c);
    } else {
        console.log(a, b, c);
    }
}
