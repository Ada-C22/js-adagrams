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

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximu
}


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
  }


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
  
//   const dCLettersinHand = JSON.parse(JSON.stringify(lettersInHand));
//   for (let index = 0; index < input.length; index ++) {
//     let letter = input[index]
//     if (checkArray(lettersInHand,letter) !== undefined ) {
//       let dcLettersinHand = dcLettersinHand.remove(letter);
//     else {
      

//     }
//     };

    


// //   }

//   const checkArray = (array, subStr) => { 
//     const regex = new RegExp(substr, 'i');
//     const subStr = array.filter(str => regex.test(str));
//   }
  
// };

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};


