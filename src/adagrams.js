let letterPool = {};
  letterPool['A'] = 9;
  letterPool['B'] = 2;
  letterPool['C'] = 2;
  letterPool['D'] = 4;
  letterPool['E'] = 12;
  letterPool['F'] = 2;
  letterPool['G'] = 3;
  letterPool['H'] = 2;
  letterPool['I'] = 9;
  letterPool['J'] = 1;
  letterPool['K'] = 1;
  letterPool['L'] = 4;
  letterPool['M'] = 2;
  letterPool['N'] = 6;
  letterPool['O'] = 8;
  letterPool['P'] = 2;
  letterPool['Q'] = 1;
  letterPool['R'] = 6;
  letterPool['S'] = 4;
  letterPool['T'] = 6;
  letterPool['U'] = 4;
  letterPool['V'] = 2;
  letterPool['W'] = 2;
  letterPool['X'] = 1;
  letterPool['Y'] = 2;
  letterPool['Z'] = 1;

// console.log(letterPool);

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterList = []
  let poolLetterTiles = []

  for (const [letter, count] of Object.entries(letterPool)) {
    for (let i = 0; i < count; i++) {
      poolLetterTiles.push(letter)
    };
  };
  while (letterList.length < 10) {
    let letterPosition = Math.floor(Math.random() * poolLetterTiles.length);
    let letter = poolLetterTiles[letterPosition];
    letterList.push(letter);
    poolLetterTiles.splice(letterPosition, 1);
  }
  return letterList;
};

// do {
//   let letterPosition = Math.floor(Math.random() * poolLetterTiles.length);
//   let lastPos = poolLetterTiles.length -1;
//   [poolLetterTiles[lastPos], poolLetterTiles[letterPosition]] = [poolLetterTiles[letterPosition], poolLetterTiles[lastPos]]
//   poolLetterTiles.pop()
// }
// while (letterList.length < 10)
// return letterList;


// export const buildTilePile = () => {
//   let poolLetterTiles = []

//   for (const [letter, count] of Object.entries(letterPool)) {
//     for (let i = 0; i < count; i++) {
//       poolLetterTiles.push(letter)
//     };
//   };
// }

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const clonedArray = [...lettersInHand];
  input = input.toUpperCase();

  for (const letter of input) {
    if (!clonedArray.includes(letter)) {
      return false;
    } 
  const index = clonedArray.indexOf(letter); 
  clonedArray.splice(index, 1); //removes the letter from the array 
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
