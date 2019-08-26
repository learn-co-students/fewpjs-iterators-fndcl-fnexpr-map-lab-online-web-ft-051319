const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map( (tut) => {
    let words_of_sentence = tut.split(" ");
    return words_of_sentence.map( (word) => {
           return word.slice(0, 1).toUpperCase() + word.slice(1);
         }).join(" ");
      
  })
}

// const titleCased = tutorials.map(function(tut){

//   let words_of_sentence = tut.split(" ");
  

//    return words_of_sentence.map(function(word){
//      return word.slice(0, 1).toUpperCase() + word.slice(1);
//    }).join(" ");


// });