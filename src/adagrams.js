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
  const letterPool = {...LETTER_POOL};
  const TenStringsArray = []
  for(let i = 0; i < 10; i++) {
    const availableLetters = Object.keys(letterPool).filter(
      (letter) => letterPool[letter] > 0
  );
    const randomIndex = Math.floor(Math.random()*availableLetters.length);
    const chosenLetter = availableLetters[randomIndex];
    TenStringsArray.push(chosenLetter);

    letterPool[chosenLetter] -= 1;
  }
  return TenStringsArray;
};



export const usesAvailableLetters = (input, lettersInHand) => {
  const copyLettersInHand = [...lettersInHand]
  for (const char of input){
    const index = copyLettersInHand.indexOf(char);
    if (index === -1) {
      return false;
    }
    copyLettersInHand.splice(index, 1);
  }
  return true;
};


export const scoreWord = (word) => {
  const SCORES = {
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
  const upperWord = word.toUpperCase();
  let count = 0;
  if (upperWord.length >6){
    count += 8;
  }
  for (let char of upperWord){
    if (char in SCORES){
      count += SCORES[char];
    }
  }
  return count;
};

export const highestScoreFrom = (words) => {
  const winningWord = {word: '', score: 0};
  for (let word of words){
    let score = scoreWord(word);
    if (score > winningWord.score){
      winningWord.word = word;
      winningWord.score = score;
      continue;
    }
    if (score < winningWord.score||winningWord.word.length === 10){
      continue;
    }
    if (word.length === 10|| word.length < winningWord.word.length){
      winningWord.word = word;
      winningWord.score = score;
    }
  }
    return winningWord;

};

