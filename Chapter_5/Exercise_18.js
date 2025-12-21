var n = Number(prompt('enter a number'))

for(let i = 1 ; i <= n ; i++){
    let line ="";
  
    for(let j = 1; j <= i ; j++){
        line += j +" ";
    }
    console.log (line)
}

for (let h = n; h >= 1; h--) {
    let line1 = "";

    for (let k = 1; k <= h; k++) {
        line1 += k + " ";
    }

    console.log(line1)
}

for (let m = 1; m <= n; m++) {
    let line2 = "";

   
    for (let s = 0; s < n - m; s++) {
        line2 += "  "; 
    }
    
    for (let a = m; a >= 1; a--) {
        line2 += a + " ";
    }

    console.log(line2)
} 

for (let l = n; l >= 1; l--) {
    let line = "";

    for (let w = 0; w < n - l; w++) {
        line += "  "; 
    }

    for (let g = 1; g <= l; g++) {
        line += g + " ";
    }

    console.log(line)
}
