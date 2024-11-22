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
  const letterBankCopy = [...lettersInHand];

  for (const letter of input.toUpperCase()) {
    const letterIndex = letterBankCopy.indexOf(letter);
    if (letterIndex !== -1) {
      letterBankCopy.splice(letterIndex, 1);
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
