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

export const drawLetters = () => {
  const letters = [];
  
  for (const [letter, count] of Object.entries(letterPool)) {
    for (let i = 0; i < count; i++ ){
      letters.push(letter);
    }
  }
  const hand = [];
  const letterDrawCount = {};

  while (hand.length < 10) {
    const letterIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[letterIndex];

    if (!hand.includes(randomLetter)) {
      letterDrawCount[randomLetter] = 0;
    }

    if (letterDrawCount[randomLetter] < letterPool[randomLetter]) {
      hand.push(randomLetter);
      letterDrawCount[randomLetter] += 1;
    } else {
      console.log(`${randomLetter} has already been drawn ${letterDrawCount[randomLetter]} times.`);
    }
  }
  return hand;  
};


export const usesAvailableLetters = (input, lettersInHand) => {
  let newLetterInHand = [...lettersInHand];
  let newInput = input.toUpperCase()
  
  for (const letter of newInput) {
    const letterIndex = newLetterInHand.indexOf(letter)
    if (newLetterInHand.includes(letter)) {
      newLetterInHand.splice(letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let totalScore = 0;
  const upperCaseWord = word.toUpperCase()
  for (const letter of upperCaseWord) {
    if (letter in scoreChart) {
      totalScore += scoreChart[letter];
    }
    if (word.length >= 7 && word.length <=10) {
      totalScore += 8;
    }
  }
  return totalScore;
};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
