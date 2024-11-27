export const drawLetters = () => {
	// Implement this method for wave 1
	const letterPool =
	{
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
	}


	const listLetters = [];
	while (listLetters.length != 10) {
		let letters = Object.keys(letterPool);
		let randomIndex = Math.floor(Math.random() * letters.length);
		let randomLetter = letters[randomIndex];
		let value = letterPool[randomLetter];
		if (value > 0) {
			letterPool[randomLetter] = value - 1;
			listLetters.push(randomLetter);
		}
	}

	return listLetters
}


export const usesAvailableLetters = (input, lettersInHand) => {
	// Implement this method for wave 2
	input = input.toUpperCase();
	const lettersCopy = lettersInHand.slice();
	for (let letter of input) {
		const index = lettersCopy.indexOf(letter);
		if (index != -1) {
			lettersCopy.splice(index, 1);
		} else {
			return false;
		}
	}
	return true;
}
export const scoreWord = (word) => {
	// Implement this method for wave 3
	const score = {
		'A': 1,
		'E': 1,
		'I': 1,
		'O': 1,
		'U': 1,
		'L': 1,
		'N': 1,
		'R': 1,
		'S': 1,
		'T': 1,
		'D': 2,
		'G': 2,
		'B': 3,
		'C': 3,
		'M': 3,
		'P': 3,
		'F': 4,
		'H': 4,
		'V': 4,
		'W': 4,
		'Y': 4,
		'K': 5,
		'J': 8,
		'X': 8,
		'Q': 10,
		'Z': 10
	}
	let totalScore = 0;
	word = word.toUpperCase();
	for (let i = 0; i < word.length; i++) {
		let letter = word[i];
		let value = score[letter] || 0;
		totalScore += value;
	}
	if (word.length >= 7 && word.length <= 10) {
		totalScore += 8;
	}
	return totalScore;
};

export const highestScoreFrom = (words) => {
	// Implement this method for wave 4

	if (words.length === 0) {
		return ['', 0]
	}
	let highestWord = '';
	let highestScore = 0;
	for (let word of words) {
		let wordScore = scoreWord(word);
		if (wordScore > highestScore) {
			highestScore = wordScore;
			highestWord = word;
		} else if (wordScore === highestScore) {
			if (highestWord.length === 10) {
				continue;
			} else if (word.length === 10) {
				highestWord = word;
			} else if (word.length < highestWord.length) {
				highestWord = word;
			}

		}

	}
	return  {'score': highestScore,  'word' : highestWord}

}
