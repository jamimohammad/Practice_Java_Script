// 3.30 (زمان فعلی) برنامه‌ای در جاوااسکریپت بنویسید که زمان فعلی را با توجه به اختلاف ساعت منطقه زمانی کاربر نسبت به GMT محاسبه و با فرمت 12 ساعته نمایش دهد.var user = Number(prompt('enter a number '))

var take = Math.floor(user * 60)

var milliseconds = Date.now();
console.log(milliseconds);

var seconds = Math.floor(milliseconds / 1000 );

var take1 = seconds % 60;

var minutes = Math.floor(seconds / 60 + take);

var take2 = minutes % 60

var hours = Math.floor(minutes / 60 );

var take3 = hours % 24

console.log('current time' + ':' +'Hours'+':'  + take3 + ':' +'minutes'+':'  + take2 + ':' + 'seconds'+':'+ take1)

