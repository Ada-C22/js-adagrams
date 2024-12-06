/*constructing a leeterpool object with letter as key and no. of times it can be drawn as value*/
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

export const drawLetters = () => {
  // Implement this method for wave 1
  const drawnLetters = [];
  //Evaluating total size of probable letters can be drawn
  let totalSize = Object.values(LETTERPOOL).reduce((acc, val) => acc + val, 0);
  let letterPoolArr = Object.entries(LETTERPOOL);
  let count = 0;
  let letterIdx;
  const HAND_SIZE = 10;

  while (drawnLetters.length < handSize) {
    if (totalSize === 0) {
      console.log('No more letters available to draw.');
      break;
    }

    letterIdx = Math.random() * totalSize;
    for (const [letter, frequency] of letterPoolArr) {
      count += frequency;
      if (letterIdx < count) {
        drawnLetters.push(letter);
        totalSize -= 1;
        //updating array with already drawn letters
        const updatedArr = letterPoolArr.map(([l, freq]) =>
          l === letter ? [l, freq - 1] : [l, freq]
        );
        letterPoolArr = updatedArr.filter(([l, freq]) => freq > 0);
        break;
      }
    }
  }
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  for (let letter of lettersInHand) {
    letter.toUpperCase();
  }
  const letterObj = {};
  for (let letter of lettersInHand) {
    letterObj[letter] ? letterObj[letter]++ : (letterObj[letter] = 1);
  }
 //Utilizing object to track the letters drawn
  for (let letter of input) {
    letter = letter.toUpperCase();
    if (letterObj[letter] === undefined || letterObj[letter] === 0)
      return false;
    else {
      letterObj[letter] -= 1;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  const LETTERSCORES = {
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
  word = word.toUpperCase();
  let totalScore = 0;

  for (let i = 0; i < word.length; i++) {
    totalScore += LETTERSCORES[word[i]];
  }
  //Adding 8 bonus points for letters with length 7 to 10
  if (word.length >= 7 && word.length <= 10) {
    totalScore += 8;
  }

  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordScores = {};
  let maxWord = '';
  let maxScore = 0;
  for (let word of words) {
    wordScores[word] = scoreWord(word);
  }
  for (let [word, score] of Object.entries(wordScores)) {

    if (score > maxScore) {
      maxWord = word;
      maxScore = score;
    } else if (score === maxScore) {
      //logic for words with score tied
      if (word.length === 10 && maxWord.length !== 10) maxWord = word;
      else if (word.length < maxWord.length && maxWord.length !== 10)
        maxWord = word;
    }
  }

  return { score: maxScore, word: maxWord };
};
