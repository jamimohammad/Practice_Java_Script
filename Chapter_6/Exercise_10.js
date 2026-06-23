// 6.10 (Use theisPrimeMethod) Listing 6.7, PrimeNumberMethod.java, provides the 
// isPrime(int number) method for testing whether a number is prime. Use this 
// method to find the number of prime numbers less than 10000.

function isPrime(number) {
    if (number < 2) return false; 
    for (let i = 2; i < number; i++) {  
        if (number % i === 0) return false; 
    }
    return true; 
}

let count = 0;

for (let num = 2; num < 10000; num++) {
    if (isPrime(num)) {
        count++;
    }
}

console.log("تعداد اعداد اول کمتر از 10000:", count);
