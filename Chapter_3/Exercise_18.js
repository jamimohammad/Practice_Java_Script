// 3.18 (هزینه حمل‌ونقل)
// برنامه‌ای در جاوااسکریپت بنویسید که وزن یک بسته را از کاربر بگیرد و هزینه حمل را طبق جدول مشخص محاسبه کند. اگر وزن بیش از 50 باشد، پیغام دهد "the package cannot be shipped".

var take = Number(prompt('enter a number'))

var multiplication = take * 3.5

if (take > 50){
    alert('The package cannot be shipped')
}
else{
alert(multiplication + '   dollar')
}