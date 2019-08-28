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
  let newTutorial = [];

  function firstLetterToUpper(word){
    word[0].toUpperCase()
  }
  for(let a = 0; a<tutorials.length; a++){
    let res = tutorials[a].split(" ")
    let newString = res.map(firstLetterToUpper)

    newTutorial.push(newString)
    // for(let b = 0; b<newString.length; b++){
    //   newString[b][0].toUpperCase()
    //   tutorials[a] = newString
  
    return newTutorial
    //return tutorials
  }

}
