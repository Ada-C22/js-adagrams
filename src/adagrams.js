const handSize = 10

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

const letterPointValues = {
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


export const createLetterPool = () => {
  const listOfAllLetters = [];

  for (const [letter, letterFrequency] of Object.entries(letterPool)) {
    for (let i = 0; i < letterFrequency; i++) {
      listOfAllLetters.push(letter);
    }
  }

  return listOfAllLetters;

};


export const drawLetters = () => {
  const handOfLettersList = [];
  const listOfAllLetters = createLetterPool();

  while (handOfLettersList.length < handSize) {
    const aRandomIndexThatAccessesRandomLetter = Math.floor(Math.random() * listOfAllLetters.length);
    const randomLetterChosen = listOfAllLetters[aRandomIndexThatAccessesRandomLetter];
    handOfLettersList.push(randomLetterChosen);
    listOfAllLetters.splice(aRandomIndexThatAccessesRandomLetter, 1);
  }

  return handOfLettersList;

};


export const usesAvailableLetters = (word, handOfLettersList) => {
  const wordBankList = [...handOfLettersList];

  for (const letter of word.toUpperCase()) {

    if (!wordBankList.includes(letter)) {
      return false;

    } else {
      const index = wordBankList.indexOf(letter);
      wordBankList.splice(index, 1);
    }
  }

  return true;

};


export const scoreWord = (word) => {
  if (!word) {
    return 0;
  }
  let totalScore = 0;

  for (const letter of word.toUpperCase()) {
    totalScore += letterPointValues[letter];
  }
  if (word.length >= 7) {
    totalScore += 8;
  }

  return totalScore;

};


export const highestScoreFrom = (wordList) => {
  let winningWord = null;
  let winningScore = 0;

  for (const word of wordList) {
    const wordScore = scoreWord(word); 

    if (winningWord === null) {
      winningWord = word;
      winningScore = wordScore;
    } else if (wordScore > winningScore) {
      winningWord = word;
      winningScore = wordScore;

    } else if (wordScore === winningScore) {
      if (winningWord.length === 10) {
        return { word: winningWord, score: winningScore }; 
      }
      if (word.length === 10) {
        winningWord = word;
        winningScore = wordScore;
      } else if (word.length < winningWord.length) {
        winningWord = word;
        winningScore = wordScore;
      }
    }
  }

  return { word: winningWord, score: winningScore };

};