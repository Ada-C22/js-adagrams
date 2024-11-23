// import { includes } from "core-js/core/array";

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
  const letters = [];
  
  for (const [letter, count] of Object.entries(letterPool)) {
    for (let i = 0; i < count; i++ ){
      letters.push(letter);
    }
  }
  const hand = [];
  const letterCount = {};
  while (hand.length < 10) {
    const letterIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[letterIndex];

    if (!letterCount[randomLetter]) {
      letterCount[randomLetter] = 0;
    }

    if (letterCount[randomLetter] < letterPool[randomLetter]) {
      hand.push(randomLetter);
      letterCount[randomLetter] += 1;
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
//  "aksana" [ a, , a, k, n, a, i, u , h, t]
// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
