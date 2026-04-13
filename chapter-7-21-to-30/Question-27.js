// 7.27 (Identical arrays) The arrays list1 and list2 are identical if they have the 
// same contents. Write a method that returns true if list1 and list2 are identi
// cal, using the following header:
// public static boolean equals(int[] list1, int[] list2)
// Write a test program that prompts the user to enter two lists of integers and dis
// plays whether the two are identical. Here are the sample runs. Note that the first 
// number in the input indicates the number of the elements in the list. This number 
// is not part of the list.
// Enter list1: 5 2 5 6 6 1
// Enter list2: 5 5 2 6 1 6
// Two lists are identical
// Enter list1: 5 5 5 6 6 1
// Enter list2: 5 2 5 6 1 6
// Two lists are not identical

function equals(list1, list2) {
  if (list1.length !== list2.length) return false;

  for (let i = 0; i < list1.length; i++) {
    let found = false;
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        list2[j] = null; 
        found = true;
        break;
      }
    }
    if (!found) return false;
  }

  return true;
}

function readList(promptText) {
  let numbers = prompt(promptText).split(" ").map(Number);
  let size = numbers[0];
  return numbers.slice(1, size + 1);
}

let list1 = readList("Enter list1:");
let list2 = readList("Enter list2:");

if (equals(list1, list2)) {
  alert("Two lists are identical");
} else {
  alert("Two lists are not identical");
}