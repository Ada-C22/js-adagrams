import {
  maxLetters,
  minWordLengthForBonus,
  bonusPoints,
  letterPool,
  scoreChart
} from './constants';

export const drawLetters = () => {
  const lettersAvailable = [];
  for (const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      lettersAvailable.push(letter);
    }
  }
  
  const lettersDrawn = [];
  for (let i = 0; i < maxLetters; i++) {
    const randomNumber = Math.floor(Math.random() * lettersAvailable.length);
    lettersDrawn.push(lettersAvailable[randomNumber]);
    lettersAvailable.splice(randomNumber, 1);
  }
  return lettersDrawn;
};

export const usesAvailableLetters = (input, lettersInHand) => {  
  const letterBank = {};
  for (const letter of lettersInHand) {
    letterBank[letter] = (letterBank[letter] || 0) + 1;
  }
  
  for (const letter of input.toUpperCase()) {
    if (!letterBank[letter]) return false;
    letterBank[letter]--;
    }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  for (const letter of word.toUpperCase()) {
    score += scoreChart[letter];
  }
  
  if (word.length >= minWordLengthForBonus && word.length <= maxLetters) {
    score += bonusPoints;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  const winner = {
    word: '',
    score: 0
  };
  for (const word of words) {
    let score = scoreWord(word);
    if (score > winner.score) {
      winner.score = score;
      winner.word = word;
    } else if (score === winner.score) {
      if (winner.word.length !== maxLetters && (word.length < winner.word.length || word.length === maxLetters)) {
        winner.word = word;
      }
    }
  }
  return winner;
};