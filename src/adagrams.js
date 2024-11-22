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
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
