import {
  NUM_LETTERS,
  createLetterPool,
  drawRandomLetter,
  getLetterScore,
  tieBreaker,
  isMaxLength
} from './utilities.js';

export const drawLetters = () => {
  const drawnLetters = [];
  const poolCopy = [...createLetterPool()];

  for (let i = 0; i < NUM_LETTERS; i++) {
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
  let winningWord = null;
  let highestScore = 0;

  for (const word of words) {
    const wordScore = scoreWord(word);

    if (!winningWord || wordScore > highestScore) {
      winningWord = word;
      highestScore = wordScore;
    } else if (wordScore === highestScore) {
      winningWord = tieBreaker(word, winningWord);
    }

    if (isMaxLength(winningWord)) {
      break;
    }
  }

  return {word: winningWord, score: highestScore};
};
