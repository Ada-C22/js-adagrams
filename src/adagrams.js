const LETTER_POOL = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
};
const SCORE_CHART = {  
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
}


const LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'];

const WEIGHTS = [
  9, 2, 2, 4, 12, 2, 3, 2,
  9, 1, 1, 4,  2, 6, 8, 2,
  1, 6, 4, 6,  4, 2, 2, 1,
  2, 1
];

const HAND_SIZE = 10;

const MIN_LEN_FOR_BONUS = 7;

const BONUS_POINTS = 8; 

const TIE_BREAKER_WORD_LEN = 10;

let totalWeight=0;
for (const weight of WEIGHTS) {
  totalWeight += weight;
}


const weightedRandomLetter = () => {

  const randomNum = Math.random() * totalWeight; 
  
  let currentWeight = 0;
  for (let i = 0; i < LETTERS.length; i++) {
    currentWeight += WEIGHTS[i];
    if (currentWeight >= randomNum) {
      return LETTERS[i]
    }
  }
};


export const drawLetters = () => {
  const drawnLetters = []
  let i=0;
  const letterFreq = {};

  while( i < HAND_SIZE){
    const randomLetter = weightedRandomLetter()
      if (randomLetter in letterFreq) {
        letterFreq[randomLetter] += 1;
      } else {
        letterFreq[randomLetter] = 1;
      }
    if (letterFreq[randomLetter] <= LETTER_POOL[randomLetter]){
      drawnLetters.push(randomLetter);
      i++
    }
  }
return drawnLetters
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandCopy = Array.from(lettersInHand);
  for (const letter of input){
  if (lettersInHandCopy.includes(letter) === false){
    return false;
  } else {
    const index = lettersInHandCopy.indexOf(letter);
    lettersInHandCopy.splice(index, 1);
  }
}
  return true
};

export const scoreWord = (word) => {
  let score = 0;

  for (let letter of word){
    letter = letter.toUpperCase()
    score += SCORE_CHART[letter];
  }

  if (word.length >= MIN_LEN_FOR_BONUS){
    score += BONUS_POINTS;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  
  const possibleWinners = getPossibleWinners(words);

  let winner = possibleWinners[0];

  if (possibleWinners.length === 1) {
    ;
  } else {
    winner = tieBreaker(possibleWinners);
  }
  return winner;
};

const getPossibleWinners = (words) => {
  const wordAndScores = new Map();

  for (const word of words){
    wordAndScores.set(word, scoreWord(word))
  }

  const highestScore = Math.max(...wordAndScores.values());

  const possibleWinners = [];

  for (const [word, score] of wordAndScores) {
    if (score === highestScore) {
      possibleWinners.push({word, score});
    }
  }
  return possibleWinners;
}

const tieBreaker = possibleWinners => {
  let fewestLetters = possibleWinners[0].word.length;
  let winner = possibleWinners[0];

  for (const possibleWinner of possibleWinners){
    if (possibleWinner.word.length === TIE_BREAKER_WORD_LEN){
      return possibleWinner;
    } else if (possibleWinner.word.length < fewestLetters){
      fewestLetters = possibleWinner.word.length;
      winner = possibleWinner;
    }
  }
  return winner; 
}