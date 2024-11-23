import {
  createLetterPool,
  drawRandomLetter,
  getLetterScore,
  updateWinner,
  isMaxLength,
  createLetterCountsMap,
  checkLetterAvailability
} from './utils/adagrams_helpers.js';

import {
  BONUS_LENGTH,
  BONUS_POINTS,
  NUM_LETTERS
} from './utils/constants.js'

export const drawLetters = () => {
  const poolCopy = [...createLetterPool()];
  return Array.from({ length: NUM_LETTERS }, () => drawRandomLetter(poolCopy));
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letterCounts = createLetterCountsMap(lettersInHand);
  const upperCaseInput = input.toUpperCase();

  for (const letter of upperCaseInput) {
    if (!checkLetterAvailability(letter, letterCounts)) {
      return false;
    }
    letterCounts.set(letter, letterCounts.get(letter) - 1);
  }
  return true;
};

export const scoreWord = (word) => {
  let totalScore = 0;

  word = word.toUpperCase();
  for (const letter of word) {
    totalScore += getLetterScore(letter);
  }
  if (word.length >= BONUS_LENGTH) {
    totalScore += BONUS_POINTS;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  let winningWord = null;
  let winningScore = 0;

  for (const currentWord of words) {
    const currentScore = scoreWord(currentWord);
    const currentData = { currentWord, currentScore };
    const winningData = { winningWord, winningScore };

    ({ winningWord, winningScore } = updateWinner(currentData, winningData));

    if (isMaxLength(winningWord)) {
      break;
    }
  }
  return { word: winningWord, score: winningScore };
};
