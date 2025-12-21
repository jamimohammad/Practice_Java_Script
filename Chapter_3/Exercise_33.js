// //3.33 (مالی: مقایسه قیمت‌ها)
// برنامه‌ای در جاوااسکریپت بنویسید که وزن و قیمت دو بسته برنج را بگیرد و بگوید کدام بسته قیمت بهتری دارد یا مساوی‌اند.

var take = Number(prompt('enter the weight'))

var check = Number(prompt('enter the price'))

var take1 = Number(prompt('enter the weight'))

var check1 = Number(prompt('enter the price'))

var tahgsim = check / take

var tahgsim1 = check1 / take1

if (tahgsim > tahgsim1){
    alert('بسته دوم بهتر است')
}else{
    alert('بسته اول بهتر است')
}