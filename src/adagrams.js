'use strict';

import { letterPool, scoreChart } from './constants.js';


const createLetterPoolList = (letterPoolDict) => {
  //Function has one parameter, a dictionary, and returns a list of letters.
  let letterPoolList = [];

  for (const [letter, freq] of Object.entries(letterPoolDict)) {
    for (let i = 0; i < freq; i++) {
      letterPoolList.push(letter);
    }
  }
  return letterPoolList;
};

const getRandomNumber = (max) => {
  //Function has one parameter, an integer named max, and returns random number between 0 and max
  return Math.floor(Math.random() * (max + 1));
};

const removeLetter = (list, letter) => {
//Function has two parameters, a list and a letter, and returns a list with the letter removed
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
  // Function checks if the input word uses available letters in the letterInHand list
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
  // Function scores the word
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
  //Function finds the max word score in the list
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
  // Function return the max score and word as an object
  const highestScoreObj = {};
  const highestScore = findHighestScore(words);

  highestScoreObj["word"] = highestScore;
  highestScoreObj["score"] = scoreWord(highestScore);

  return highestScoreObj;
};

