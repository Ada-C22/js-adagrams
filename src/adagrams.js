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

const SCORE_CHART = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};

export const drawLetters = () => {
  const hand = [];
  const copyPool = {};

  let idx = 0;
  for (const [key, value] of Object.entries(LETTER_POOL)) {
    copyPool[idx] = { [key]: value };
    idx++;
  }

  while (hand.length < 10) {
    const letterDrawn = Math.floor(Math.random() * 26);
    const letterAndQuantity = copyPool[letterDrawn];

    if (letterAndQuantity) {
      for (const [letter, quantity] of Object.entries(letterAndQuantity)) {
        if (quantity > 0) {
          hand.push(letter);
          letterAndQuantity[letter] -= 1;
        }
      }
    }
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const copyLIH = [...lettersInHand];
  const upperInput = input.toUpperCase();

  for (let i = 0; i < upperInput.length; i++) {
    let letter = upperInput[i];
    if (copyLIH.includes(letter)) {
      copyLIH.splice(copyLIH.indexOf(letter), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const upperWord = word.toUpperCase();
  let totalScore = 0;

  if (upperWord.length >= 7 && upperWord.length <= 10) {
    totalScore += 8;
  }
  for (let letter of upperWord) {
    for (const [score, letters] of Object.entries(SCORE_CHART)) {
      if (letters.includes(letter)) {
        totalScore += parseInt(score); 
      }
    }
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  let winningWord = null;
  let highScore = 0;

  for (let word of words) {
    const score = scoreWord(word);

    if (score > highScore) {
      highScore = score;
      winningWord = word;
    } else if (score === highScore) {
      if (
        word.length === 10 && winningWord.length !== 10 || 
        word.length < winningWord.length && winningWord.length !== 10 || 
        word === winningWord 
      ) {
        winningWord = word;
      }
    }
  }

  return { word: winningWord, score: highScore };
};


