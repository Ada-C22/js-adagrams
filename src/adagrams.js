import {
  createLetterPool,
  drawRandomLetter
} from './utilities.js';

const NUMBER_OF_LETTERS_TO_DRAW = 10;

export const drawLetters = () => {
  const drawnLetters = [];
  const poolCopy = [...createLetterPool()];

  for (let i = 0; i < NUMBER_OF_LETTERS_TO_DRAW; i++) {
    drawnLetters.push(drawRandomLetter(poolCopy));
  }
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersSet = new Set(lettersInHand);

  for (const letter of input.toUpperCase()) {
    if (lettersSet.has(letter)) {
      lettersSet.delete(letter);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const POINT_VALUES  = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 
    'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 
    'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 
    'Y': 4, 'Z': 10
  }
  const bonusLength = 7;
  const bonusPoints = 8;
  let totalScore = 0;

  word = word.toUpperCase();
  for (const letter of word) {
    totalScore += POINT_VALUES[letter]
  }
  
  if (word.length >= bonusLength) {
    totalScore += bonusPoints;
  }

  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
