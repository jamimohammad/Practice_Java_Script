//(Student major and status) Write a program that prompts the user to enter two 
// characters and displays the major and status represented in the characters. The first 
// character indicates the major and the second is number character 1, 2, 3, 4, which 
// indicates whether a student is a freshman, sophomore, junior, or senior. Suppose 
// the following chracters are used to denote the majors:
//  M: Mathematics
//  C: Computer Science
//  I: Information Technology

function number() {
    var letter = prompt('Enter a Letter')
    var number = Number(prompt('Enter a Number'))

    letter = letter.toUpperCase()

    if (letter === 'M' && number === 1) {
        return 'Mathematics Freshman'
    } else if (letter === 'M' && number === 2) {
        return 'Mathematics Sophomore'
    } else if (letter === 'M' && number === 3) {
        return 'Mathematics Junior'
    } else if (letter === 'M' && number === 4) {
        return 'Mathematics Senior'
    }
    else if (letter === 'C' && number === 1) {
        return 'Computer Science Freshman'
    } else if (letter === 'C' && number === 2) {
        return 'Computer Science Sophomore'
    } else if (letter === 'C' && number === 3) {
        return 'Computer Science Junior'
    } else if (letter === 'C' && number === 4) {
        return 'Computer Science Senior'
    }
    else if (letter === 'I' && number === 1) {
        return 'Information Technology Freshman'
    } else if (letter === 'I' && number === 2) {
        return 'Information Technology Sophomore'
    } else if (letter === 'I' && number === 3) {
        return 'Information Technology Junior'
    } else if (letter === 'I' && number === 4) {
        return 'Information Technology Senior'
    } else {
        return 'bad'
    }
}

alert(number())

