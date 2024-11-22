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

const LETTER_SCORES = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10
}

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterList = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < count; i++) {
    letterList.push(letter)
    }
  }
  let hand = [];
  for (let i = 0; i < 10; i++) {
    const randomPick = Math.floor(Math.random() * letterList.length);
    const randomLetter = letterList[randomPick];
    hand.push(randomLetter);
    letterList.splice(randomPick, 1);
  };
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const copyLettersInHand = [...lettersInHand];
  const upperCaseInput = input.toUpperCase();

  for (const letter of upperCaseInput) {
    if (copyLettersInHand.includes(letter)) {
      const index = copyLettersInHand.indexOf(letter);
      copyLettersInHand.splice(index,1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  word = word.toUpperCase(); 
  let totalScore = 0;

  for (const letter of word) {
    totalScore += LETTER_SCORES[letter] || 0;
  }
  if (word.length >= 7) {
    totalScore += 8;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
