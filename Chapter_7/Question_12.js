// *7.12 (Reverse an array) The reverse method in Section 7.7 reverses an array by 
// copying it to a new array. Rewrite the method that reverses the array passed in 
// the argument and returns this array. Write a test program that prompts the user to 
// enter ten numbers, invokes the method to reverse the numbers, and displays the 
// numbers.

let reverse = [];

for (let i = 0; i < 10; i++) {
    let userInput = Number(prompt('Enter Ten Numbers:'));
    reverse.push(userInput);
}

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray(reverse));