// **7.19 (Sorted?) Write the following method that returns true if the list is already sorted 
// in increasing order.
// public static boolean isSorted(int[] list)
// Write a test program that prompts the user to enter a list and displays whether 
// the list is sorted or not. Here is a sample run. Note that the first number in the 
// input indicates the number of the elements in the list. This number is not part 
// of the list.  
// Enter list: 8 10 1 5 16 61 9 11 1
// The list is not sorted
// Enter list: 10 1 1 3 4 4 5 7 9 11 21
// The list is already sorted

function isSorted(list) {
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] > list[i + 1]) {
      return false;
    }
  }
  return true;
}

let input = prompt("Enter list:");
let parts = input.split(" ");
let numbers = [];

for (let i = 0; i < parts.length; i++) {
  numbers.push(Number(parts[i]));
}

let count = numbers[0];
let list = numbers.slice(1);

if (isSorted(list)) {
  console.log("The list is already sorted");
} else {
  console.log("The list is not sorted");
}