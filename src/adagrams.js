export const drawLetters = () => {
  // Implement this method for wave 1

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
    Z: 1
  };

  let lettersInHand = [];
  let lettersList = [];
  let count = 0;

  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      lettersList.push(letter);
    }
  }

  while (count < 10) {
    let randomLetterIndex = Math.floor(Math.random() * lettersList.length);
    lettersInHand.push(lettersList[randomLetterIndex]);
    lettersList.splice(randomLetterIndex, 1);
    count++;
  }

  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  for (const letter of input) {
    if (!lettersInHand.includes(letter)) {
      return false;
    }

    lettersInHand.splice(letter, 1);
  }

  return true;
};

const isWordAtListSevenCharsLong = (word) => {
  return word.length >= 7;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  const LETTER_SCORE = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  };

  let totalScore = 0;

  if (!word) {
    return totalScore;
  }

  word = word.toUpperCase();

  if (isWordAtListSevenCharsLong(word)) {
    totalScore += 8;
  }

  for (let letter of word) {
    totalScore += LETTER_SCORE[letter];
  }

  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4

  let score;
  let highestScore = 0;
  let wordsWithHighestScore = [];

  for (let word of words) {
    score = scoreWord(word);
    if (score > highestScore) {
      wordsWithHighestScore = [];
      wordsWithHighestScore.push(word);
      highestScore = score;
    } else if (score === highestScore) {
      wordsWithHighestScore.push(word);
    }
  }

  for (let word of wordsWithHighestScore) {
    if (word.length === 10) {
      return {
        'word': word,
        'score': highestScore
      };
    }
  }

  let minLength = 10;
  let wordWithMihLength;

  for (let word of wordsWithHighestScore) {
    if (word.length < minLength) {
      wordWithMihLength = word;
      minLength = word.length;
    }
  }

  return {
    'word': wordWithMihLength,
    'score': highestScore
  };
};
