export const drawLetters = () => {
  const distOfLetters = {
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
  
  const availableLetters = [];
  const randomDrawnLetters = [];

  for (const letter in distOfLetters) {
    for (let i = 0; i < distOfLetters[letter]; i++) {
        availableLetters.push(letter)
    }
  }
  
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * availableLetters.length);
    const removedLetter = availableLetters.splice(randomIndex, 1)[0];
    randomDrawnLetters.push(removedLetter);
  }

  return randomDrawnLetters;
};
  

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();

  const lettersInHandCount = {};
  for (const letter of lettersInHand) {
    lettersInHandCount[letter] = (lettersInHandCount[letter] || 0) + 1;
  }

  for (let i = 0; i < word.length; i++) {
    if (lettersInHandCount[word[i]] > 0) {
      lettersInHandCount[word[i]]--;
    } else {
    return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const scoreDict = {
    A: 1, E: 1, I: 1, O: 1, U: 1,
    L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  };

  if (word === '') {
    return 0;
  }

  const upperWord = word.toUpperCase();
  let score = 0;

  for (let i = 0; i < upperWord.length; i++) {
    const char = upperWord[i];
    if (char in scoreDict) {
      score += scoreDict[char];
    }
  }
  if ([7,8,9,10].includes(upperWord.length)) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  
  let winningScore = 0;
  let winningWord = null;
  const winningWordScore = {};

  for (const word of words) {
    const runningScore = scoreWord(word);

    if (runningScore > winningScore) {
      winningScore = runningScore;
      winningWord = word;
    }

    else if (runningScore === winningScore) {
      if (word.length === 10 && winningWord.length !== 10) {
        winningWord = word;
      }
      else if (word.length < winningWord.length && word.length !== 10 && winningWord.length !== 10) {
        winningWord = word;
      }
    }
  }
  winningWordScore.word = winningWord;
  winningWordScore.score = winningScore;
  return winningWordScore;
};
