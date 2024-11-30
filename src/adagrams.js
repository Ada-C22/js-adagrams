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

  const result = [];

  for (const [letter, count] of Object.entries(letterPool)) {
    for (let i = 0; i < count; i++) {
      result.push(letter);
    }
  }

  const shuffledPool = result.sort(() => Math.random() - 0.5);
  return shuffledPool.slice(0, 10);
};

// export default drawLetters;

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

// export default usesAvailableLetters;

export const scoreWord = (word) => {

};



export const highestScoreFrom = (words) => {

};


