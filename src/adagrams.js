export const drawLetters = () => {
  const letterPool = {
    A : 9, 
    B : 2, 
    C : 2, 
    D : 4, 
    E : 12, 
    F : 2, 
    G : 3, 
    H : 2, 
    I : 9, 
    J : 1, 
    K : 1, 
    L : 4, 
    M : 2, 
    N : 6, 
    O : 8, 
    P : 2, 
    Q : 1, 
    R : 6, 
    S : 4, 
    T : 6, 
    U : 4, 
    V : 2, 
    W : 2, 
    X : 1, 
    Y : 2, 
    Z : 1
  };
  const drawnLetters = [];
  for (let iteration = 0; iteration < 10; iteration++) { 
    const keys = Object.keys(letterPool);
    const key = keys[getRandomInt(0, keys.length)];
    letterPool[key]--;
    drawnLetters.push(key)
    if (letterPool[key] == 0) {
      delete letterPool[key];
    }
  }
  return drawnLetters;
  
};


export const usesAvailableLetters = (input, lettersInHand) => {  
  if (input.length > 10) {
    return false;
  }
  const lettersInHandOccurenceDictionary = arrayToOccurenceDict(lettersInHand) 
  for (let index = 0; index < input.length; index++) {
    let key = input[index];
    if (lettersInHandOccurenceDictionary[key] === undefined) {
      return false
    }
    else if (lettersInHandOccurenceDictionary[key] === 0) {
      return false
    }
    else {
      lettersInHandOccurenceDictionary[key]--;
    }
  }
  return true;
  };




export const scoreWord = (word) => {
  if (word.length === 0) {
    return 0;
  }
  let wordScore = 0; 
  const letterOccurenceDict = arrayToOccurenceDict(word.toUpperCase())
  const keys = Object.keys(letterOccurenceDict);
  for (let index = 0; index < keys.length; index++) {
    let key = keys[index];
    wordScore = wordScore + (getLetterValue(key,letterOccurenceDict))
  }
  if (word.length >= 7) {
    wordScore += 8
  }
  console.log(`word score is `, wordScore)
  return wordScore




  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  let topScoreNum = 0;
  let topScoreWord = '';

  for (let index =0; index <words.length; index++) {
    let currentWord = words[index];
    let currentScore = scoreWord(currentWord);
    if (currentScore > topScoreNum){
      // console.log(`current score was greater than top score`)
      topScoreNum = currentScore;
      topScoreWord = currentWord;
    }
    else if (currentScore === topScoreNum) {
      // console.log(`current score equal to top score`)
      if (currentWord.length === 10 && topScoreWord.length !== 10) {
        // console.log(`current word is 10 top is not, current wins`)
        topScoreNum = currentScore; 
        topScoreWord =currentWord; 
      }
      else if (currentWord.length < topScoreWord.length && topScoreWord.length !== 10) {
        topScoreNum = currentScore; 
        topScoreWord = currentWord; 
      }
    }

    }
  console.log({word: topScoreWord, score: topScoreNum})
  return {word: topScoreWord, score:topScoreNum}
};


//// helper functions///////

const arrayToOccurenceDict = (array) => {
  const occurenceDictionary = {}
  for (let index = 0; index < array.length; index ++){
    let key = array[index];
    if (occurenceDictionary[key] !== undefined) {
      occurenceDictionary[key]++ 
    } else {
      occurenceDictionary[key] = 1
    }  
  }
  return occurenceDictionary
  }
  
  const getRandomInt = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximu
  }

  const getLetterValue = (key, letterOccurenceDict) => {
    const lettersAndValues = {
      //1 point
      'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1 , 'U' : 1, 'L' : 1, 'N' : 1, 'R' : 1, 'S' : 1, 'T' : 1,
      //2 points
      'D' : 2, 'G' : 2,
      //3 points
      'B' : 3, 'C' : 3, 'M' : 3, 'P' : 3,
      //4 points: 
      'F' : 4, 'H' : 4, 'V' : 4, 'W' : 4, 'Y': 4,
      //5 points: 
      'K' : 5,
      //6 points: 
      'J' : 8, 'X' : 8,
      //7 points: 
      'Q' : 10, 'Z' : 10
      }
    if (isNaN(lettersAndValues[key])){
      return letterOccurenceDict[key]
    }
    let letterValue = lettersAndValues[key];
    let letterOccurence = letterOccurenceDict[key];
    return letterValue * letterOccurence
    };