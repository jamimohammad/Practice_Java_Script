// **6.27 (Emirp) An emirp (prime spelled backward) is a nonpalindromic prime number 
// whose reversal is also a prime. For example, 17 is a prime and 71 is a prime, so 17 
// and 71 are emirps. Write a program that displays the first 100 emirps. Display 10 
// numbers per line, separated by exactly one space, as follows:
// 13 17 31 37 71 73 79 97 107 113 
// 149 157 167 179 199 311 337 347 359 389

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;           
    reversed = reversed * 10 + digit; 
    num = Math.floor(num / 10);     
  }
  return reversed;
}

let count = 0;      
let number = 2;    
let line = "";  

while (count < 100) {
  if (isPrime(number)) {
    let reversed = reverseNumber(number);

    if (number !== reversed && isPrime(reversed)) {
      line += number + " ";
      count++;

      if (count % 10 === 0) {
        console.log(line);
        line = "";
      }
    }
  }
  number++;
}
