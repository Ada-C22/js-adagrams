export const drawLetters = () => {
  // Implement this method for wave 1
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
  const letterBank = [];
  const workingPool = { ...letterPool };
  let i = 0
  while (i < 10) {
    const letter = getWeightedRandom(workingPool);  
    if (workingPool[letter] > 0) {
      letterBank.push(letter);
      workingPool[letter]--;
      i++;
    }
  }
  return letterBank;
};

const getWeightedRandom = (object) => {
  const total = Object.values(object).reduce((sum, weight) => sum + weight);
  const random = Math.floor(Math.random() * total);
  
  let steppingSum = 0;

  for (const [letter, weight] of Object.entries(object)) {
    steppingSum += weight;
    if (steppingSum >= random) {
      return letter;
    }
  }
}

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // Frequency map for a letter bank
  const bankFreq = {};
  for (const letter of lettersInHand) {
    bankFreq[letter] = (bankFreq[letter] ?? 0) + 1;
  }
  // Frequency map for word
  const wordFreq = {}
  for (const char of input) {
    wordFreq[char] = (wordFreq[char] ?? 0) + 1;
  }

  // Check if letter in word exists in letter bank and word letter count does not exceed bank letter count
  for (const letter in wordFreq) {
    if (!bankFreq[letter] || wordFreq[letter] > bankFreq[letter]) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const lettersValue = {
   'A': 1,
   'B': 3,
   'C': 3,
   'D': 2,
   'E': 1,
   'F': 4, 
   'G': 2,
   'H': 4,
   'I': 1,
   'J': 8,
   'K': 5,
   'L': 1,
   'M': 3,
   'N': 1,
   'O': 1,
   'P': 3,
   'Q': 10,
   'R': 1,
   'S': 1,
   'T': 1,
   'U': 1,
   'V': 4,
   'W': 4,
   'X': 8,
   'Y': 4,
   'Z': 10
};
  let score = 0;
  for (const letter of word.toUpperCase()) {
    score += lettersValue[letter];
  }

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordScore = {};
  for (const word of words) {
    const score = scoreWord(word);
    wordScore[word] = score;
  }

  const maxScore = Math.max(...Object.values(wordScore));
  
  const candidates = []
  for (const [word, score] of Object.entries(wordScore)) {
    if (score === maxScore) {
      candidates.push(word);
    }
  }
  
  const minLength = Math.min(...candidates.map(word => word.length));

  let currentWinner = '';
  for (const word of candidates) {
    if (word.length === 10) {
      currentWinner = word;
      break;
    }
    if (word.length === minLength && !currentWinner) {
      currentWinner = word;
    }
  }
  return { word: currentWinner, score: maxScore };
};
