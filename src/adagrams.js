export const drawLetters = () => {
  const letterPool = {
    'A': 9,  
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12, 
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6, 
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
  };
  const lettersAvailable = [];
  for (const [letter, quantity] of Object.entries(letterPool)) {
    for (let i = 0; i < quantity; i++) {
      lettersAvailable.push(letter);
    };
  };
  
  const numLettersTile = 10;
  const lettersDrawn = [];
  for (let i = 0; i < numLettersTile; i++) {
    const randomNumber = Math.floor(Math.random() * lettersAvailable.length);
    lettersDrawn.push(lettersAvailable[randomNumber]);
    lettersAvailable.splice(randomNumber, 1);
  };
  return lettersDrawn;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase();
  
  const letterBank = {};
  for (const letter of lettersInHand) {
    if (letterBank[letter] === undefined) {
      letterBank[letter] = 1;
    } else {
      letterBank[letter]++;
    }
  };

  for (const letter of input) {
    if (letterBank[letter] === undefined || letterBank[letter] === 0) {
      return false;
    } else {
      letterBank[letter]--;
    }
  };
  return true;
};

export const scoreWord = (word) => {
  const scoreChart = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1, 
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8, 
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1, 
    'O': 1, 
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1, 
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10
  };
  let score = 0;
  for (const letter of word) {
    score += scoreChart[letter];
  };

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let highestWord = '';
  
  for (const word of words) {
    let score = scoreWord(word);
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
    else if (score === highestScore) {
      if (highestWord.length !== 10 && (word.length < highestWord.length || word.length === 10)) {
        highestWord = word;
      }
    }
  };

  return {
    'word': highestWord, 
    'score': highestScore
  };
};
