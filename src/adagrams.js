const LETTER_POOL = {
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

const LetterPoolList = [];
for (const [letter, count] of Object.entries(LETTER_POOL)) {
  for (let i = 0; i < count; i++) {
    LetterPoolList.push(letter);
  }
}
const totalLetterCount = LetterPoolList.length;
  

export const drawLetters = () => {
  // Implement this method for wave 1
  const handOfLetters = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * (totalLetterCount - i));
    const randonDrawLetter = LetterPoolList[randomIndex];
    handOfLetters.push(randonDrawLetter);

    const lastIndex = totalLetterCount - i - 1;
    [LetterPoolList[randomIndex], LetterPoolList[lastIndex]] = [LetterPoolList[lastIndex], LetterPoolList[randomIndex]]
  }

  return handOfLetters;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterFreMap = {};
  for (const letter of lettersInHand) {
    if (!(letter in letterFreMap)) {
      letterFreMap[letter] = 1;
    } else {
      letterFreMap[letter] += 1;
    }
  }
  for (const letter of input) {
    if (!(letter in letterFreMap) || letterFreMap[letter] < 1) {
      return false;
    } else {
      letterFreMap[letter] -= 1;
    }
  }
  return true;
};
const SCORE_CHART = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10
  }
export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0
  word = word.toUpperCase();
  for (let char of word) {
    score += SCORE_CHART[char];
  }
  
  if ([7, 8, 9, 10].includes(word.length)) {
    score += 8;
  } 
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
 
