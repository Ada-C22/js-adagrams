export const drawLetters = () => {
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

  let LETTER_LIST = [];
  for (const property in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[property]; i++) {
      LETTER_LIST.push(property);
    } ;
  }  
  
  const LETTER_COPY = [...LETTER_LIST];
  let cards = [];

  for (let i = 0; i < 10; i++) {
    let letterIndex = Math.floor(Math.random() * LETTER_COPY.length);
      cards.push(LETTER_COPY[letterIndex]);
      LETTER_COPY.splice(letterIndex, 1)
  };
  return cards;
};

export const usesAvailableLetters = (input, lettersInHand) => {

  for (const letter of input) {
    if (!lettersInHand.includes(letter)) {
      return false;
    }
    lettersInHand.splice(lettersInHand.indexOf(letter), 1)
  }
  return true;
  };

export const scoreWord = (word) => {
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
  
  if (!word) {
    return 0;
  };

  let score = 0;
  let upperWord = word.toUpperCase()
  for (const char of upperWord) {
      score += scoreChart[char];    
  };

  if (upperWord.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let highestScoreWord = '';
  let lenOfHighestScoreWord = 0;

  for (const word of words) {
    const score = scoreWord(word);

    if (score < highestScore) {
      continue;
    } else if (score === highestScore && lenOfHighestScoreWord === 10) {
      continue;
    } else if (score === highestScore && word.length !== 10 && word.length >= lenOfHighestScoreWord ) {
      continue;
    }

    highestScore = score;
    highestScoreWord = word;
    lenOfHighestScoreWord = word.length;
  };

  return {
    word: highestScoreWord, 
    score: highestScore,
  };
};
