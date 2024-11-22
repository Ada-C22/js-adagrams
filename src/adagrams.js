const handSize = 10;

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
export const drawLetters = () => {  // Check!

  let letterPool = createLetterPool();
  const hand = createHand(letterPool);
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {  // Check!
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


export const scoreWord = (word) => {  // Checked!
  const bonusLengthMin = 7;
  const bonusPoints = 8;
  const scoresChart = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  };

  let scores = 0;

  if (word.length >= bonusLengthMin) {
    scores = scores + bonusPoints;
  };

  for (const letter of word.toUpperCase()) {
    scores = scores + scoresChart[letter];
  };

  return scores;
};

export const highestScoreFrom = (words) => {

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

    let maxScoreWord = maxScores[0];
    let maxScoreWordLength = maxScoreWord.word.length;
    
    for (const wordInMaxScore of maxScores) {      
      if (wordInMaxScore.word.length === 10) {
        return wordInMaxScore;
      } else if (wordInMaxScore.word.length < maxScoreWordLength) {
        maxScoreWord = wordInMaxScore;
        maxScoreWordLength = maxScoreWord.length;
      };
    };
    return maxScoreWord;
  };

  const scores = findAllScores(words);
  
  const maxScores = findMaxScores(scores);

  // Return the word if there is only one word with max score
  if (maxScores.length === 1) return maxScores[0];

  return pickWinner(maxScores)
  };

console.log(highestScoreFrom(["WWW", "MMMM"]));


