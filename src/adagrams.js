const letterPool = {
  'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3,
  'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6,
  'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4,
  'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1
};  
  
  //Map of points 
  const letterValue = new Map([
    [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
    [['D', 'G'], 2],
    [['B', 'C', 'M', 'P'], 3],
    [['F', 'H', 'V', 'W', 'Y'], 4],
    [['K'], 5],
    [['J', 'X'], 8],
    [['Q', 'Z'], 10]
  ]);


export const drawLetters = () => {

// Create a list of letters based on the pool
let lettersList = [];
for (const [letter, count] of Object.entries(letterPool)) {
    for (let i = 0; i < count; i++) {
        lettersList.push(letter);
    }
}

// Generate a hand of 10 random letters
let hand = [];
let temporaryLettersList = [...lettersList];

for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * temporaryLettersList.length);

    // Remove the letter from the list
    const randomLetter = temporaryLettersList.splice(randomIndex, 1)[0];
    hand.push(randomLetter);
}
return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    
    if (!lettersInHand.includes(letter)) {
      return false;
    }
    
    const index = lettersInHand.indexOf(letter);
    lettersInHand.splice(index, 1); 
  }

  return true;
};



export const scoreWord = (word) => {


  if (word.length === 0){
    return 0;
  }

  let totalScore = 0
  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toUpperCase();

    for (let [letters, score] of letterValue) {
      if (letters.includes(letter)) {
        totalScore += score;
        break; 
      }
    }
  }
  if (word.length > 6){
    totalScore += 8
  }
  return totalScore 
};
export const highestScoreFrom = (words) => {

  if (words.length === 0) {
    return 0;
  }

  let winner = { word: '', score: 0 };

  for (let word of words) {
    let currentScore = scoreWord(word);

    if (currentScore > winner.score) {
      winner = { word, score: currentScore };
    } 

    else if (currentScore === winner.score) {
      if (word.length === 10 && winner.word.length !== 10) {
        winner = { word, score: currentScore };
      } 

      else if (
        word.length !== 10 && 
        winner.word.length !== 10 && 
        word.length < winner.word.length
      ) {
        winner = { word, score: currentScore };
      }
    }
  }
  return winner;
};
