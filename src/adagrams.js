export const drawLetters = () => {
  const numTiles = 10;
  const lettersInHand = [];
  const currentLetterPool = [...listOfLetters]
  for (let i = 0; i < numTiles; i++) {
    // 98 letters, i want index from 0 to 97 inclusive
    let randIndex = Math.floor(Math.random() * currentLetterPool.length);
    let randLetter = currentLetterPool[randIndex];
    lettersInHand.push(randLetter);
    currentLetterPool.splice(randIndex, 1)
  }
  return lettersInHand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letterMap = lettersInHandToDict(lettersInHand);
  input = input.toUpperCase();
  for (const char of input) {
    // doesn't have char in map -> false
    // has char in map
      // if value > 0 -> -1
      // if value = 0 -> false
    if (!letterMap.has(char)) {
      return false;
    } else if (letterMap.has(char)) {
      if (letterMap.get(char) > 0) {
        letterMap.set(char, letterMap.get(char) - 1);
      } else {
        return false;
      }
    }
  }
  // if it hasn't return false at this point, return true
  return true;
};

const lettersInHandToDict = lettersInHand => {
  const letterMap = new Map();
  for (const char of lettersInHand) {
    // char already exists in the map, get value and += 1
    if (letterMap.has(char)) {
      letterMap.set(char, letterMap.get(char) + 1);
    } else { // char not in dict yet, create it with value 1
      letterMap.set(char, 1);
    }
  }
  return letterMap
}

export const scoreWord = (word) => {
  word = word.toUpperCase();

  if (! word) {
    return 0;
  }

  let score = 0;
  for (const char of word) {
    score += letterValues[char]
  }
  if (word.length >= 7) {
    score += 8
  }
  return score
};

export const highestScoreFrom = (words) => {
  let maxScore = 0;
  let maxWord = '';

  for (const word of words) {
    const score = scoreWord(word)
    if (score > maxScore) {
      maxScore = score;
      maxWord = word;
    }
    else if (score === maxScore) {
      if (maxWord.length === 10) {
        // keep the original word, since it came first
        continue
      } else if (word.length === 10) {
        // make word the new maxWord
        maxWord = word;
      } else if (word.length < maxWord.length) {
        // make word the new maxWord 
        maxWord = word;
      } else {
        // keep maxWord to maxWord
        continue
      }
    }
  }

  return { 
    score: maxScore,
    word: maxWord };
};

const listOfLetters = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'N', 'N', 'N', 'N', 'N', 'N', 'B', 'B', 
  'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'C', 'C', 'P', 'P', 'D', 'D', 'D', 'D', 'Q', 
  'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'R', 'R', 'R', 'R', 'R', 
  'R', 'F', 'F', 'S', 'S', 'S', 'S', 'G', 'G', 'G', 'T', 'T', 'T', 'T', 'T', 'T', 'H', 
  'H', 'U', 'U', 'U', 'U', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'V', 'V', 'J', 
  'W', 'W', 'K', 'X', 'L', 'L', 'L', 'L', 'Y', 'Y', 'M', 'M', 'Z'];

const letterValues = {
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