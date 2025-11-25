// **5.17 (Display pyramid) Write a program that prompts the user to enter an integer from 
// 1 to 15 and displays a pyramid, as shown in the following sample run:

let n = Number(prompt('enter a number one to fifteen'));

for (let i = 1; i <= n; i++) {
    let line = "";

    for (let s = 0; s < n - i; s++) {
        line += "  "; 
    }
    
    for (let j = i; j >= 1; j--) {
        line += j + " ";
    }
      for (let j = 2; j <= i; j++) {
        line += j + " ";
    }
    console.log(line)
} 
 
  

    

