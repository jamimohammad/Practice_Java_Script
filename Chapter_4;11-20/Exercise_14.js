// (Phone key pads) The international standard letter/number mapping found on the 
// telephone is shown below:
function all (){

var user = prompt('Enter a number')
user = user.toUpperCase()

if (user == 'A' || user == 'B' || user == 'C'){
    alert('2')
}else if  (user == 'D' || user == 'E' || user == 'F'){
    alert('3')
}else if  (user == 'G' || user == 'H' || user == 'I'){
    alert('4')
}else if  (user == 'J' || user == 'K' || user == 'L'){
    alert('5')
}else if  (user == 'M' || user == 'N' || user == 'O'){
    alert('6')
}else if  (user == 'P' || user == 'Q' || user == 'R' || user == 'S'){
    alert('7')
}else if  ( user == 'T' || user == 'U' || user == 'V'){
    alert('8')
}else if  (user == 'W' || user == 'X'|| user == 'Y'|| user == 'Z'){
    alert('9')
}else{
    alert('bad')
}
}
all()