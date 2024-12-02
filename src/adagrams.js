export const drawLetters = () => {
  const letterPool = {
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

  // Create a string containing all the letters based on their counts
  let letters = "";
  for (const [letter, num] of Object.entries(letterPool)) {
    letters += letter.repeat(num);
  }

  const result = [];
  const lettersCountDict = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
  };

  while (result.length < 10) {
    const i = Math.floor(Math.random() * letters.length);
    const selectedLetter = letters[i];

    if (lettersCountDict[selectedLetter] < letterPool[selectedLetter]) {
      lettersCountDict[selectedLetter]++;
      result.push(selectedLetter);
    }
  }

  return result;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letterCounts = {};

  for (const letter of lettersInHand) {
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }

  for (const char of input.toUpperCase()) {
    if (!letterCounts[char] || letterCounts[char] === 0) {
      return false;
    }
    letterCounts[char]--;
  }

  return true;
};

export const scoreWord = (word) => {
  const scoreDict = {
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
    Z: 10,
  };

  let totalScore = 0;

  for (const letter of word.toUpperCase()) {
    totalScore += scoreDict[letter] || 0;
  }

  if (word.length >= 7 && word.length <= 10) {
    totalScore += 8;
  }

  return totalScore;
};

export const highestScoreFrom = (words) => {
  let maxWord = words[0];
  let maxScore = scoreWord(maxWord);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const score = scoreWord(word);

    if (score > maxScore) {
      maxScore = score;
      maxWord = word;
    } else if (score === maxScore && maxWord.length !== 10) {
      if (word.length === 10 || word.length < maxWord.length) {
        maxWord = word;
      }
    }
  }

  return { word: maxWord, score: maxScore };
};
