let count = 0
for (let n = 100; n < 200; n++){
   if ((n % 5 === 0 || n % 6 === 0) && !(n % 5 === 0 && n % 6 === 0))
          count++
        console.log(count+ ":  " + n)
 
}