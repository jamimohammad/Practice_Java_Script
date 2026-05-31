// *8.3 (Sort students on grades) Rewrite Listing 8.2, GradeExam.java, to display the 
// students in increasing order of the number of correct answers.

let answers = [
  ['A','B','A','C','C','D','E','E','A','D'],
  ['D','B','A','B','C','A','E','E','A','D'],
  ['E','D','D','A','C','B','E','E','A','D'],
  ['C','B','A','E','D','C','E','E','A','D'],
  ['A','B','D','C','C','D','E','E','A','D'],
  ['B','B','E','C','C','D','E','E','A','D'],
  ['B','B','A','C','C','D','E','E','A','D'],
  ['E','B','E','C','C','D','E','E','A','D']
];

let keys = ['D','B','D','C','C','D','A','E','A','D'];

let results = [];

for (let i = 0; i < answers.length; i++) {
  let correctCount = 0;

  for (let j = 0; j < answers[i].length; j++) {
    if (answers[i][j] === keys[j]) {
      correctCount++;ب                                                 
    }
  }

  results.push([i, correctCount]); 
}

for (let i = 0; i < results.length - 1; i++) {
  for (let j = i + 1; j < results.length; j++) {
    if (results[i][1] > results[j][1]) {

      let temp = results[i];
      results[i] = results[j];
      results[j] = temp;
    }
  } 
}

console.log("Students sorted by score ");

for (let i = 0; i < results.length; i++) {
  console.log("Student " + results[i][0] +" correct count is " + results[i][1] );
    
}