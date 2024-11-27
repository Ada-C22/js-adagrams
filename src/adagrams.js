'use strict';

import { letterPool, scoreChart } from './constants.js';


const createLetterPoolList = (letterPoolDict) => {
  let letterPoolList = [];

  for (const [letter, freq] of Object.entries(letterPoolDict)) {
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
  const letterPoolList = createLetterPoolList(letterPool);

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
    if (scoreChart[letter]) {
      score += scoreChart[letter];
    }
  }
  if (inputUpperCase.length >= 7) {
    score += 8;
  } 
  return score;
};

const findHighestScore = (words) => {
  const max = words.reduce((prev, current) => {
    if (scoreWord(current) > scoreWord(prev)) {
      return current;
    } else if (scoreWord(current) === scoreWord(prev)) {
      if (current.length === prev.length) {
        return prev;
      } else if (current.length === 10) {
        return current;
      } else if (prev.length === 10) {
        return prev;
      } else if (current.length < prev.length) {
        return current;
      }
    }
    return prev;
  }, words[0]);

  return max;
};

export const highestScoreFrom = (words) => {
  const highestScoreObj = {};
  const highestScore = findHighestScore(words);

  highestScoreObj["word"] = highestScore;
  highestScoreObj["score"] = scoreWord(highestScore);

  return highestScoreObj;
};

