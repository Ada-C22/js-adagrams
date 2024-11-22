import {
  createLetterPool,
  drawRandomLetter,
  getLetterScore
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
  const bonusLength = 7;
  const bonusPoints = 8;
  let totalScore = 0;

  word = word.toUpperCase();
  for (const letter of word) {
    totalScore += getLetterScore(letter);
  }
  if (word.length >= bonusLength) {
    totalScore += bonusPoints;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
