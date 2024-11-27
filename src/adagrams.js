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

const scoreChart = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10
};


export const drawLetters = () => {
  // Create a frequency pool 
  const letterFrequency = [];
  
  for (const [key, value] of Object.entries(letterPool)) {
    for (let i = 0; i < value; i++) {
      letterFrequency.push(key)
    };
  }; 

  const hand = [];
  let i = 1;
  do{
    const position = Math.floor(Math.random() * (letterFrequency.length-1));
    const randomLetter = letterFrequency[position];
    hand.push(randomLetter);
    letterFrequency.splice(position, 1);
    i++;
  } while (i <= 10);
  
  return hand;
  
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  const letterList = []
  const letterBankCopy = lettersInHand.slice()

    for (let letter of word) {
      if (letterBankCopy.includes(letter)) {
        letterList.push(letter);
        letterBankCopy.splice(letter, 1)
      } else return false;
    } return true;
};

export const scoreWord = (word) => {
  const upperCaseWord = word.toUpperCase();
  let score = 0;

  for (let letter of upperCaseWord) {
    score = score + scoreChart[letter];
  }; 

  if (word.length > 6) {
    score = score + 8;
  }; 
  console.log(score);
  return score;
};

export const highestScoreFrom = (words) => {
  let bestWord = '';
  let bestScore = 0;

  for (let word of words) {
    let score = scoreWord(word);
    if (score > bestScore) {
      bestWord = word;
      bestScore = score;
    } else if (score < bestScore) {
      null;
    } else if (bestWord.length === 10) {
      break;
    } else if (word.length === 10 || word.length < bestWord.length) {
      bestWord = word;
      bestScore = score;
    };
  }; 
  let result = {score: bestScore, word : bestWord};
  return result;
};