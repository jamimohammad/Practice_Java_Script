//  *5.1 (Count positive and negative numbers and compute the average of numbers) Write 
// a program that reads an unspecified number of integers, determines how many 
// positive and negative values have been read, and computes the total and average of 
// the input values (not counting zeros). Your program ends with the input 0. Display 
// the average as a floating-point number. Here is a sample run:

var user = Number(prompt('enter number'))
var positive = 0
var negative = 0
var sum = 0
var count = 0

while (user !== 0) { 
    if (user > 0) {
        positive++
    } else if (user < 0) {
        negative++
    }

     sum = sum + user
    count++

user = Number(prompt('enter a number'))

}
if (count === 0) {
    alert("no number")
} else {
    alert("positive   " + positive + "   negative" + negative + "  total" + sum +"   average" + (sum / count))}
         
         
          

