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

const SCORE_CHART = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1,
    'T': 1, 'D': 2, 'G': 2, 'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4,
    'V': 4, 'W': 4, 'Y': 4, 'k': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10
}

export const drawLetters = () => {
    // Implement this method for wave 1
    const allLetters = []
    const hand = []
    for (let key of Object.keys(LETTER_POOL)) {
        for (let num = 0; num < LETTER_POOL[key]; num++) {
            allLetters.push(key)
        }
    }
    for (let pepar = 0; pepar < 10; pepar++) {
        let randomIndex = Math.floor(Math.random() * allLetters.length);
        hand.push(allLetters[randomIndex])
        allLetters.splice(randomIndex, 1);
    }
    return hand
};

export const usesAvailableLetters = (input, lettersInHand) => {
    // Implement this method for wave 2
    const word = input.toUpperCase()
    for (let char of word) {
        if (!lettersInHand.includes(char)) {
            return false
        }
        if (word.split('').filter(it => it === char).length > lettersInHand.filter(it => it === char).length) {
            return false
        }
    }
    return true

};

export const scoreWord = (word) => {
    // Implement this method for wave 3
    const scoreList= []
    for (let char of word.toUpperCase()) {
        if( Object.keys(SCORE_CHART).includes(char) ){
            scoreList.push(SCORE_CHART[char])
        }
    }
    let totalScore = 0
    if(scoreList.length > 0) {
         totalScore = scoreList.reduce((acc, curr) => {
            return acc + curr

        })
    }
    if(word.length >= 7){
        totalScore = totalScore + 8
    }
    return totalScore
};

export const highestScoreFrom = (words) => {
    // Implement this method for wave 4
    let winningWord = ''
    let winningScore = 0

    for (let word of words) {
        let score = scoreWord(word)
        if (winningScore === score) {
            if (word.length === 10 && winningWord.length !== 10) {
                winningWord = word;
            } else if (word.length < winningWord.length && winningWord.length !== 10) {
                winningWord = word;
            }
        } else if (winningScore < score) {
            winningScore = score
            winningWord = word

        }
    }
    return {word: winningWord, score: winningScore}

};
