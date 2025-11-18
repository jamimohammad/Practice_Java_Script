//(Convert letter grade to number) Write a program that prompts the user to enter a 
// letter grade A, B, C, D, or F and displays its corresponding numeric value 4, 3, 2, 
// 1, or 0. Here is a sample run:

function show (){
    var user1 = prompt('entre a letter')
user1 = user1.toUpperCase()
    if (user1 === 'A'){
        alert('4')
    }else if (user1 === 'B'){
        alert('3')
    }else if (user1 === 'C'){
        alert('2')
    }else if (user1 === 'D'){
        alert("1")
    }else if (user1 === 'F'){
        alert('0')
    }else{
        alert('Bad')
    }
}
show()