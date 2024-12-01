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

// export default scoreWord;

export const highestScoreFrom = (words) => {
  let highestScoringWord = {
    word: "",
    score: 0,
  };

  for (const word of words) {
    const wordScore = scoreWord(word);

    if (
      wordScore > highestScoringWord.score ||
      (wordScore === highestScoringWord.score &&
        (word.length < highestScoringWord.word.length ||
          (word.length === 10 && highestScoringWord.word.length !== 10)))
    ) {
      highestScoringWord = {
        word: word,
        score: wordScore,
      };
    }
  }

  return highestScoringWord;
};

// export default highestScoreFrom;
