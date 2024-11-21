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
  
  let letterPoolList= generateLetterPoolList(letterPool);
  let lPLLength = letterPoolList.length;

  let drawnLetters = []
  for (let iteration = 0; iteration < 10; iteration++) { 
    console.log(`length of letter list`)
    console.log(letterPoolList.length)
    let randomIndex = randomInteger(0, lPLLength);
    console.log(`random index is:`)
    console.log(randomIndex)
    // console.log(`letter list before`)
    // console.log(letterPoolList)
    let pulledLetter = letterPoolList.splice(randomIndex,1);
    // console.log(`letter list after `)
    // console.log(letterPoolList)
    drawnLetters.push(pulledLetter[0]);
    console.log(`pulled letter is: `)
    console.log(pulledLetter[0])
    console.log(`drawn letter list after`)
    console.log(drawnLetters)

    lPLLength = letterPoolList.length;    
  }
  console.log(`final drawn letters`)
  console.log(drawnLetters)
  return drawnLetters;
}
  
const generateLetterPoolList = (letterPool) => {
  let letterPoolList = [];
  Object.keys(letterPool).forEach(key => {
    const timesToAdd = letterPool[key];
    for (let i = 0; i < timesToAdd; i++) {
      letterPoolList.push(key);
    }
  })
  return letterPoolList;
}

const randomInteger = (min,max) => {
  console.log(`min is`)
  console.log(min)
  console.log(`max is`)
  console.log(max)
  return Math.random(min,max)
  // return Math.floor(Math.random() * (max - min - 1)) + min;
}


  // Implement this method for wave 1

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};


