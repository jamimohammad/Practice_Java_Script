// **6.26 (Palindromic prime) A palindromic prime is a prime number and also palindro
// mic. For example, 131 is a prime and also a palindromic prime, as are 313 and 
// 757. Write a program that displays the first 100 palindromic prime numbers. Dis
// play 10 numbers per line, separated by exactly one space, as follows:
// 2 3 5 7 11 101 131 151 181 191
// 313 353 373 383 727 757 787 797 919 929

function reverse(number) {
    let reversed = 0;
    while (number > 0) {
        reversed = reversed * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return reversed;
}

function isPalindrome(number) {
    return number === reverse(number);
}

function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let count = 0;
let number = 2;
let line = "";

while (count < 100) {
    if (isPalindrome(number) && isPrime(number)) {
        line += number + " ";
        count++;

        if (count % 10 === 0) {
            console.log(line);
            line = "";
        }
    }
    number++;
}
