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

// Wave 1 //
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

// Wave 2 //
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

// Wave 3 //
export const addBonusPoints = (word) => {
  let bonusPoints = 0
  // check if the word length is the length for bonus points and awarding points if it is
  if (word.length >= bonusWordLength) {
    bonusPoints += bonusForLongWord
  }
  return bonusPoints
};

export const scoreWord = (word) => {
  let wordScore = 0;

  word = word.toUpperCase();
  // loop through each letter in the word and add the points assigned to each letter
  for (const letter of word) {
    wordScore += letterScores[letter]
  } 
  // add the bonus points as necessary with helper function
  wordScore += addBonusPoints(word)

  return wordScore
};

// Wave 4 //
export const tieBreaker = (highScoreWords, maxScore) => {
  let shortestWord = highScoreWords[0];

  // loop through the highScoreWords if one of them has length of 10 than that is the winner
  for (const word of highScoreWords) {
    if (word.length === 10) {
      return { word: word, score: maxScore };
    }
  }

  // otherwise loop through and the shortest word is the winner
  for (const word of highScoreWords) {
    if (word.length < shortestWord.length) {
      shortestWord = word
    }
  }
  return { word: shortestWord, score: maxScore }
};

export const highestScoreFrom = (words) => {
  let maxScore = 0;
  let highScoreWords = [];

  // get a map of the words and their scores
  let wordScoreMap = getWordScoreMap(words);

  // for each word in wordScoreMap check if the score is higher than the set maxScore 
  // if it is it replaces the maxScore and gets added to highScoreWords
  for (const [word, score] of Object.entries(wordScoreMap)) {
    if (score > maxScore) {
      maxScore = score;
      highScoreWords = [word];
    // if its equal then it gets added to highScoreWords list as well
    } else if (score === maxScore) {
      highScoreWords.push(word);
    }
  }
  // if the highScoreWords is only 1 word than return that along with maxScore
  if (highScoreWords.length === 1) {
    return { word: highScoreWords[0], score: maxScore };
  // otherwise go into tieBreaker
  } else {
    return tieBreaker(highScoreWords, maxScore);
  }
};

export const getWordScoreMap = (words) => {
  const wordScoreMap = {};
  // loops through words and add each word and its score to a map
  for (const word of words) {
    wordScoreMap[word] = scoreWord(word);
  }
  return wordScoreMap;
};