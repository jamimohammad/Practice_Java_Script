// // **7.34 (Sort characters in a string) Write a method that returns a sorted string using the 
// // following header:
// // public static String sort(String s)
// // For example, sort("acb") returns abc.
// // Write a test program that prompts the user to enter a string and displays the sorted 
// // string.


function sortString(s) {
  return s.split('').sort().join('');
}

let input = prompt("Enter a string:");
let result = sortString(input);

console.log("Sorted string: " + result);