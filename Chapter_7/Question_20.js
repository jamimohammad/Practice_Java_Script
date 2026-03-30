// *7.20 (Revise selection sort) In Section 7.11, you used selection sort to sort an array. 
// The selection-sort method repeatedly finds the smallest number in the current 
// array and swaps it with the first. Rewrite this program by finding the largest num
// ber and swapping it with the last. Write a test program that reads in ten double 
// numbers, invokes the method, and displays the sorted numbers.

function selectionSort(array) {
    for (let i = array.length - 1; i > 0; i--) {

        let maxIndex = 0;

        for (let j = 1; j <= i; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }

        let temp = array[i];
        array[i] = array[maxIndex];
        array[maxIndex] = temp;
    }

    return array;
}

let numbers = [];

for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Enter a double number:"));
    numbers.push(num);
}

selectionSort(numbers);

console.log("Sorted numbers:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}