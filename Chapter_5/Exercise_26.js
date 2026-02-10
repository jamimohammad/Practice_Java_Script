// **5.26 (Compute e) You can approximate e using the following series:
//  e = 1 + 1
//  1! + 1
//  2! + 1
//  3! + 1
//  4! + g + 1
//  i!
//  Write a program that displays the e value for i = 10000, 20000, …, and 
// 100000. (Hint: Because i! = i * (i- 1) * c * 2 * 1, then
//  1
//  i! is
//  1
//  i(i- 1)!
//  Initialize e and item to be 1 and keep adding a new item to e. The new item is 
// the previous item divided by i for i = 2, 3, 4, ....)

for (let n = 10000; n <= 100000; n += 10000) {

  let sum = 1;
  let division = 1;

  for (let i = 1; i <= n; i++) {

    division = (1 / i) * division;   
    sum += division;

  }

  console.log("i = " + n + "   e = " + sum);
}

