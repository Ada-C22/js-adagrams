const letterPool = {
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

const letterScores = {
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
const handSize = 10;
const bonusWordLength = 7
const bonusForLongWord = 8

const getListOfLetters = () => {
  // create an empty list to hold the letter pool as weighted list
  let weightedList = [];

  // loop through the letterPool and add the letter the number of times mentioned in letter pool
  for (const [letter, amount] of Object.entries(letterPool)) {
    for (let i = 0; i < amount; i++)
      weightedList.push(letter);
  } 
  return weightedList
};

export const drawLetters = () => {
  let weightedList = getListOfLetters();

  // create an empty list letters that is your hand
  let letters = []

  // while loop that loops until there are enough letters in your hand to equal handSize
  while (letters.length < handSize) {
    const weightedListLength = weightedList.length;
    let randomIndex = Math.floor(Math.random() * weightedListLength);
    letters.push(weightedList[randomIndex]);
    let lastPos = weightedListLength - 1;
    [weightedList[lastPos], weightedList[randomIndex]] = [weightedList[randomIndex], weightedList[lastPos]];
    weightedList.pop();
  }
  return letters
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // take the input and change it to upper case so it matches the lettersInHand
  input = input.toUpperCase()

  // make a copy of the lettersInHand
  const lettersInHandCopy = lettersInHand.slice()

  // loop through each letter of the input and if not in lettersInHandCopy return false
  for (const letter of input) {
    if (!(lettersInHandCopy.includes(letter))) {
      return false; 
    }
    // otherwise take that letter and remove it from lettersInHandCopy
    const index = lettersInHandCopy.indexOf(letter);
    lettersInHandCopy.splice(index, 1);
} 
  // return true if all letters were available
  return true;
};

export const addBonusPoints = (word) => {
  let bonusPoints = 0

  if (word.length >= bonusWordLength) {
    bonusPoints += bonusForLongWord
  }
  return bonusPoints
}

export const scoreWord = (word) => {
  let wordScore = 0;

  word = word.toUpperCase();

  for (const letter of word) {
    wordScore += letterScores[letter]
  } 
  wordScore += addBonusPoints(word)

  return wordScore
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
