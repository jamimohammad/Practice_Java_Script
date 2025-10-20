
var user = Number(prompt('Enter a number'))
var user1 = String.fromCharCode(user)

if (user <= 127){
    alert(user1)
}else{
    alert('bad')
}