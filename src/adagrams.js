const HAND_SIZE = 10;

const LETTER_BANK = {
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

const SCORES_CHART = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10
};

const BONUS_MIN_LENGTH = 7;
const BONUS_POINTS = 8;

const createLetterPool = () => {
  let letterPool = [];
  for (const [letter, count] of Object.entries(LETTER_BANK)) {
    const portion = letter.repeat(count).split('');
    letterPool.push(...portion);
  };
  return letterPool;
};

const createHand = (letterPool) => {
  let hand = [];
  while (hand.length < HAND_SIZE) {
    const letterIndex = Math.random() * letterPool.length;      
    hand.push(...letterPool.splice(letterIndex, 1));
  }
  return hand;
};

export const drawLetters = () => {
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


export const scoreWord = (word) => {
  let scores = word.length >= BONUS_MIN_LENGTH ? BONUS_POINTS : 0;

  for (const letter of word.toUpperCase()) {
    scores += SCORES_CHART[letter];
  };

  return scores;
};

const findAllScores = (words) => {
  let scores = [];
  for (const word of words) {
    let wordData = {};
    wordData.word = word;
    wordData.score = scoreWord(word);
    scores.push(wordData);
  }
  return scores;
};

const findMaxScores = (scores) => {
  let maxScores = [scores[0]];
  for (let i = 1; i < scores.length; i++ ) {
    if (maxScores[0].score < scores[i].score) {
      maxScores = [scores[i]]
    } else if (maxScores[0].score === scores[i].score) {
      maxScores.push(scores[i])
    };
  };
  
    return maxScores;
  };

  const pickWinner = (maxScores) => {

    let winner = maxScores[0];
    let winnerLength = winner.word.length;
    
    for (const candidate of maxScores) {      
      if (candidate.word.length === 10) {
        return candidate;
      } else if (candidate.word.length < winnerLength) {
        winner = candidate;
        winnerLength = winner.word.length;
      };
    };
    return winner;
  };

export const highestScoreFrom = (words) => {
  if (!words || words.length === 0) {
    return { word: null, score: 0 };
  };

  const scores = findAllScores(words);
  const maxScores = findMaxScores(scores);

  // Return the word if there is only one word with max score
  if (maxScores.length === 1) return maxScores[0];

  return pickWinner(maxScores)
  };
