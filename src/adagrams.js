import {
  NUM_LETTERS,
  createLetterPool,
  drawRandomLetter,
  getLetterScore,
  updateWinner,
  isMaxLength
} from './utilities.js';

export const drawLetters = () => {
  const poolCopy = [...createLetterPool()];
  return Array.from({ length: NUM_LETTERS }, () => drawRandomLetter(poolCopy));
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
  let winningWord = null;
  let winningScore = 0;

  for (const currentWord of words) {
    const currentData = { currentWord, currentScore: scoreWord(currentWord) };
    const winningData = { winningWord, winningScore };

    ({ winningWord, winningScore } = updateWinner(currentData, winningData));

    if (isMaxLength(winningWord)) {
      break;
    }
  }
  return { word: winningWord, score: winningScore };
};
