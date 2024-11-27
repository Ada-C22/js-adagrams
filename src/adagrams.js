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

export const drawLetters = () => {
  let letterList = [];
  for (const [letter, quantity] of Object.entries(letterPool)) {
      for (let i = 0; i < quantity; i++) {
          letterList.push(letter);
      }
  }

  let handOfTenLetters = [];
  for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * letterList.length);
      handOfTenLetters.push(letterList[index]);
      letterList.splice(index, 1);
  }

  return handOfTenLetters;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase();
  lettersInHand = lettersInHand.map(letter => letter.toUpperCase());
  
  let availableLetters = {};

  for (let letter of lettersInHand) {
    if (availableLetters[letter]) {
      availableLetters[letter] += 1;
    } else {
      availableLetters[letter] = 1;
    }
  }

  for (let letter of input) {
    if (availableLetters[letter] && availableLetters[letter] > 0) {
      availableLetters[letter] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  const letterValues = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  };

  if (!word || word.length === 0) {
    return 0;
  }

  word = word.toUpperCase();
  let totalScore = 0;

  for (let letter of word) {
    totalScore += letterValues[letter] || 0;
  }

  if (word.length >= 7) {
    totalScore += 8;
  }

  return totalScore;
};


export const highestScoreFrom = (words) => {
  let highestWord = '';
  let highestScore = 0;
  
  for (const word of words) {
    const score = scoreWord(word);

    if (score > highestScore) {
      highestWord = word;
      highestScore = score;
    } else if (score === highestScore) {
      if (word.length === 10 && highestWord.length !== 10) {
        highestWord = word;
      }
      else if (word.length < highestWord.length && highestWord.length !== 10) {
        highestWord = word;
      }
    }
  }

  return { word: highestWord, score: highestScore };
};
