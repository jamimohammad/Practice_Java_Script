// // **7.18 (Bubble sort) Write a sort method that uses the bubble-sort algorithm. The bubble
// // sort algorithm makes several passes through the array. On each pass, successive 
// // neighboring pairs are compared. If a pair is not in order, its values are swapped; 
// // otherwise, the values remain unchanged. The technique is called a bubble sort or 
// // sinking sort because the smaller values gradually “bubble” their way to the top 
// // and the larger values “sink” to the bottom. Write a test program that reads in ten 
// // double numbers, invokes the method, and displays the sorted numbers.

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
  
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let numbers = [];

for (let i = 0; i < 10; i++) {
  let num = Number(prompt("Enter a double number:"));
  numbers.push(num);
}

bubbleSort(numbers);

console.log("Sorted numbers:");
console.log(numbers);
