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

const scoreChart = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};

export const drawLetters = () => {
  const lettersList = [];
  const randomTenLetters = [];

  for(let letter in LETTER_POOL) {
    for(let i = 0; i < LETTER_POOL[letter]; i++) {
      lettersList.push(letter);
    };
  };

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * lettersList.length);
    randomTenLetters.push(lettersList[randomIndex]);
    lettersList.splice(randomIndex, 1);
  };

  return randomTenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandCopy = [... lettersInHand];
  input = input.toUpperCase();

  for (const letter of input) {
    const index = lettersInHandCopy.indexOf(letter);
    if (index != -1) {
      lettersInHandCopy.splice(index, 1)
    } else {
      return false;
    }
  };
  return true;
};

export const scoreWord = (word) => {
  let points = 0;
  word = word.toUpperCase();

  for (let letter of word) {
    points += scoreChart[letter];
  }

  if (word.length >= 7) {
    points += 8;
  }
  return points;
};

export const highestScoreFrom = (words) => {
  let bestWord = '';
  let bestScore = 0;

  for(const word of words) {
    const score = scoreWord(word);

    if (score >  bestScore) {
      bestWord = word;
      bestScore = score;

    } else if (score == bestScore) {
      if (word.length === 10 && bestWord.length < 10) {
        bestWord = word;

      } else if (word.length < bestWord.length && bestWord.length != 10) {
        bestWord = word;
      }
    }
  }
  return {
    word: bestWord,
    score: bestScore
  };
};
