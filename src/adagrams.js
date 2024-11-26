const originalPool = {
  'A': 9,
  'B' : 2,
  'C' : 2,	
  'D' : 4,	  
  'E' : 12,	
  'F' : 2,	
  'G' : 3,	
  'H' : 2,	
  'I' : 9,	
  'J' : 1,	
  'K' : 1,	
  'L' : 4,	
  'M' : 2,
  'N' : 6,
  'O' : 8,
  'P' : 2,
  'Q' : 1,
  'R' : 6,
  'S' : 4,
  'T' : 6,
  'U' : 4,
  'V' : 2,
  'W' : 2,
  'X' : 1,
  'Y' : 2,
  'Z'	: 1
};


export const drawLetters = () => {
  const clonePool = { ...originalPool }; // clone the origanl data with spread operator.
  let pool = [];

  while (pool.length < 10) {
    //In line variable refactoring
    let randomIndex = Math.floor(Math.random() * Object.keys(clonePool).length);
    
    const keys = Object.keys(clonePool); 
    const key = keys[randomIndex];

    if (clonePool[key] > 0) {
      pool.push(key);
      clonePool[key] = -1;
    }
  }
  return pool;
};

export const usesAvailableLetters = (input, lettersInHand) => {

  for (const letter of input) {
    // It checks if the letter is in lettersInHand (using indexOf).
    const index = lettersInHand.indexOf(letter);
    //If the letter is not present in the array, indexOf will return -1.
    if (index !== -1) {
      lettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const scoreChart = {
    'A': 1,
    'B' : 3,
    'C' : 3,	
    'D' : 2,	  
    'E' : 1,	
    'F' : 4,	
    'G' : 2,	
    'H' : 4,	
    'I' : 1,	
    'J' : 8,	
    'K' : 5,	
    'L' : 1,	
    'M' : 3,
    'N' : 1,
    'O' : 1,
    'P' : 3,
    'Q' : 10,
    'R' : 1,
    'S' : 1,
    'T' : 1,
    'U' : 1,
    'V' : 4,
    'W' : 4,
    'X' : 8,
    'Y' : 4,
    'Z'	: 10
  }

  let totalScore = 0;
  
  if (word.length === 0) {
    totalScore === 0;
  }
  
  for (const letter of word.toUpperCase()){
    if (letter in scoreChart) {
      totalScore += scoreChart[letter];
    }
  }

  if (word.length >= 7 && word.length <= 10) {
    totalScore += 8;  
  } 


  return totalScore;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let selectedWord = null;

  for (const word of words) {
    const wordScore = scoreWord(word);
    if (wordScore > highestScore) {
      selectedWord = word;
      highestScore = wordScore;
    } else if (wordScore === highestScore) {
      if (word.length === 10 && selectedWord.length !== 10) {
        selectedWord = word;
      } else if (word.length < selectedWord.length && selectedWord.length !== 10){
        selectedWord = word;
      }
    }
  }
  return {word: selectedWord, score: highestScore};
};

