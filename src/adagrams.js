// import { LETTER_POOL } from '../test/adagrams.test.js';

const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

export const drawLetters = () => {
  const letterList = [];
  for (const [letter, frequency] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < frequency; i++) {
      letterList.push(letter);
    }
  }

  const lettersInHand = [];
  
  while (lettersInHand.length < 10) {
    const index = Math.floor(Math.random() * letterList.length);
    lettersInHand.push(letterList[index]);
    letterList.splice(index, 1);
  }
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandMap = new Map();

  // Populate the Map with letter counts
  for (const letter of lettersInHand) {
    if (lettersInHandMap.has(letter)) {
      lettersInHandMap.set(letter, lettersInHandMap.get(letter) + 1);
    } else {
      lettersInHandMap.set(letter, 1);
    }
  }

  // Check if the input can be formed with the letters in hand
  for (const letter of input) {
    if (!lettersInHandMap.has(letter) || lettersInHandMap.get(letter) === 0) {
      return false;
    } else {
      lettersInHandMap.set(letter, lettersInHandMap.get(letter) - 1);
    }
  }

  return true;
};

const scoreChart = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10,
};

export const scoreWord = (word) => {
  let totalScores = 0;
  for (const letter of word.toUpperCase()) {
    totalScores += scoreChart[letter];
  }
  if (word.length > 6) {
    totalScores += 8;
  }
  
  return totalScores;
};

export const highestScoreFrom = (words) => {
  let bestWord = '';
  let bestScore = 0;

  for (let word of words) {
    let score = scoreWord(word);

    if (score > bestScore) {
      bestWord = word;
      bestScore = score;
    } else if (score === bestScore) {
      if (word.length === 10 && bestWord.length !== 10) {
        bestWord = word;
      } else if (word.length < bestWord.length && bestWord.length !== 10) {
        bestWord = word;
      }
    }
  }

  return { word: bestWord, score: scoreWord(bestWord) };
};
