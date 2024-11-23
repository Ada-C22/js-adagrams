import {
  LETTER_POOL,
  NUM_LETTERS,
  POINT_VALUES
} from './constants.js'

export const createLetterPool = () => {
  const letterPool = LETTER_POOL.flatMap(([letter, frequency]) =>
    Array(frequency).fill(letter)
  );
  return letterPool;
};

export const drawRandomLetter = (pool) => {
  const randomIndex = Math.floor(Math.random() * pool.length);
  const letter = pool[randomIndex];

  pool.splice(randomIndex, 1);
  return letter;
};

export const getLetterScore = (letter) => {
  return POINT_VALUES[letter] || 0;
};

export const updateWinner = (currentData, winningData) => {
  const { currentWord, currentScore } = currentData;
  const { winningWord, winningScore } = winningData;

  if (!winningWord || currentScore > winningScore) {
    return { winningWord: currentWord, winningScore: currentScore };
  }
  if (currentScore === winningScore) {
    return { winningWord: tieBreaker(currentWord, winningWord), winningScore };
  }
  return { winningWord, winningScore };
};

export const tieBreaker = (word, winningWord) => {
  if (isMaxLength(word) || word.length < winningWord.length) {
    return word;
  }
  return winningWord;
};

export const isMaxLength = (word) => word.length === NUM_LETTERS;

export const createLetterCountsMap = (lettersInHand) => {
  const letterCounts = new Map();
  for (const letter of lettersInHand) {
    letterCounts.set(letter, (letterCounts.get(letter) || 0) + 1);
  }
  return letterCounts;
};

export const checkLetterAvailability = (letter, letterCounts) => {
  return letterCounts.has(letter) && letterCounts.get(letter) > 0;
};
