"use strict";

import LETTERPOOL from 'constants';
import SCORE_CHART from 'constants';

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

const createLetterPoolList = (letterPool) => {
  let letterPoolList = [];

  for (const [letter, freq] of Object.entries(letterPool)) {
    for (let i = 0; i < freq; i++) {
      letterPoolList.push(letter);
    }
  }
  return letterPoolList;
};

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const removeLetter = (list, letter) => {
  const index = list.indexOf(letter);
  list.splice(index, 1);
};

export const drawLetters = () => {
  const letterPoolList = createLetterPoolList(LETTER_POOL);

  const drawnLetters = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = getRandomNumber(letterPoolList.length - 1);
    const letter = letterPoolList[randomIndex];
    drawnLetters.push(letter);

    removeLetter(letterPoolList, letter);
  }

  return drawnLetters;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const wordUpperCase = input.toUpperCase();
  const temporaryLetterBank = [...lettersInHand];

  for (const letter of wordUpperCase) {
    if (!temporaryLetterBank.includes(letter)) {
      return false;
    }
    removeLetter(temporaryLetterBank, letter);
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const inputUpperCase = word.toUpperCase();
  let score = 0;

  for (const letter of inputUpperCase) {
    if (SCORE_CHART[letter]) {
      score += SCORE_CHART[letter];
    }
  }
  if (inputUpperCase.length >= 7) {
    score += 8;
  } 
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
