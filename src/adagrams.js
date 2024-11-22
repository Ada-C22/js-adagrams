const handSize = 10;
const bonusLengthMin = 7;
const bonusPoints = 10;
const scoresChart = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10
};

export const drawLetters = () => {  // Check!
  const letterCounts = {
    A : 9,
    N : 6,
    B : 2,
    O : 8,
    C : 2,
    P : 2,
    D : 4,
    Q : 1,
    E : 12,
    R : 6,
    F : 2,
    S : 4,
    G : 3,
    T : 6,
    H : 2,
    U : 4,
    I : 9,
    V : 2,
    J : 1,
    W : 2,
    K : 1,
    X : 1,
    L : 4,
    Y : 2,
    M : 2,
    Z : 1
  };

  const createLetterPool = () => {
    let letterPool = [];
    for (const [letter, count] of Object.entries(letterCounts)) {
      const portion = letter.repeat(count).split('');
      letterPool.push(...portion);
    };
    return letterPool;
  };

  const createHand = (letterPool) => {
    let hand = [];
    while (hand.length < 10) {
      const letterIndex = Math.random() * letterPool.length;      
      hand.push(...letterPool.splice(letterIndex, 1));
    }
    return hand;
  };

  let letterPool = createLetterPool();
  const hand = createHand(letterPool);
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let lettersInHandCopy = [...lettersInHand];
  for (const letter of input) {
    const letterIndex = lettersInHandCopy.indexOf(letter);
    if (letterIndex < 0) {
      return false;
    } else {
      lettersInHandCopy.splice(letterIndex, 1);
    }
  };
  return true;
};

// console.log(usesAvailableLetters);


export const scoreWord = (word) => {
  // Implement this method for wave 3
  function countScores(word, scoresChart) {
    let scores = 0;
    for (const letter of word) {
      scores = scores + scoresChart[letter];
    };
    if (word.length >= bonusLengthMin) {
      scores = scores + bonusPoints;
    };
    return scores;
  };
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
