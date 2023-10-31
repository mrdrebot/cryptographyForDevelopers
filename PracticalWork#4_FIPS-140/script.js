'use strict';

// Constants
const SEQUENCE_LENGTH = 20_000;
const NUMBER_OF_IDENTICAL_BITS_START = 9_654; 
const NUMBER_OF_IDENTICAL_BITS_END = 10_346;
const MAX_LENGTH_BIT_STREAM = 36;
const MIN_LIMIT_OF_POKKER = 1.03;
const MAX_LIMIT_OF_POKKER = 57.4;
const MIN_LIMITS_OF_REPETITIONS = [2267, 1079, 502, 223, 90];
const MAX_LIMITS_OF_REPETITIONS = [2733, 1421, 748, 402, 223];

// Function which generate a random sequence of 20,000 bits
function generateRandomSequence(length) {
	let sequence = '';
	
	for (let i = 0; i < length; i++) {
		sequence += (Math.random() < 0.5) ? '0' : '1';
	}
	
	return sequence;
}


// Generate a random sequence of 20,000 bits
const randomSequence = generateRandomSequence(SEQUENCE_LENGTH);

// 2.1. Implementation of the monobit test
console.log('#Start the monobit test!\n');
// Function to perform the monobit test
function monobitTest(sequence) {
	let onesCount = 0;
  
	for (let char of sequence) {
		if (char === '1') {
			onesCount++;
		}
	}

	console.log('Number of "1": ', onesCount);
   
	// Check if the counts are within the specified range
	console.log(`${NUMBER_OF_IDENTICAL_BITS_START} ${(NUMBER_OF_IDENTICAL_BITS_START <= onesCount) ? '<=' : '>'} ${onesCount} ${(NUMBER_OF_IDENTICAL_BITS_END >= onesCount) ? '<=' : '>'} ${NUMBER_OF_IDENTICAL_BITS_END}`);
	console.log(`Test is ${(onesCount >= NUMBER_OF_IDENTICAL_BITS_START && onesCount <= NUMBER_OF_IDENTICAL_BITS_END) ? 'passed!' : 'failed!'}`);
	return (onesCount >= NUMBER_OF_IDENTICAL_BITS_START && onesCount <= NUMBER_OF_IDENTICAL_BITS_END) ? 'passed!' : 'failed!';
}
  
// Perform the monobit test
const resultMonobitTest = monobitTest(randomSequence);

// 2.2. Implementation of the maximum series length test
console.log('\n#Start the maximum series length test!\n');
// Function which calculate maximum series length of "0" and "1" bits
let maxOnes = 0;
let maxZeros = 0;

function maxSeriesLength(sequence) {
	let countOnes = 0;
	let countZeros = 0;
  
	for (let i = 0; i < sequence.length; i++) {
		if (sequence[i] === '0') {
			countZeros++;
			if (countZeros > maxZeros) maxZeros = countZeros;
			countOnes = 0;
		}

		if (sequence[i] === '1') {
			countOnes++;
			if (countOnes > maxOnes) maxOnes = countOnes;
			countZeros = 0;
		}
	}

	console.log('Max length of bit stream = ', MAX_LENGTH_BIT_STREAM);
	console.log(`Max length of "1" bit stream: ${maxOnes} ${(maxOnes < MAX_LENGTH_BIT_STREAM) ? '<' : '>'} ${MAX_LENGTH_BIT_STREAM}`);
	console.log(`Max length of "0" bit stream: ${maxZeros} ${(maxZeros < MAX_LENGTH_BIT_STREAM) ? '<' : '>'} ${MAX_LENGTH_BIT_STREAM}`);
	console.log(`Test is ${(maxOnes < MAX_LENGTH_BIT_STREAM && maxZeros < MAX_LENGTH_BIT_STREAM) ? 'passed' : 'failed!'}`);
	return (maxOnes < MAX_LENGTH_BIT_STREAM && maxZeros < MAX_LENGTH_BIT_STREAM) ? true : false;
}

// Perform the maximum series length test
const resultMaximumSeriesLengthTest = maxSeriesLength(randomSequence);

// 2.3 Implementation of the Pokker test
console.log('\n#Start the Pokker test!\n');
// Function which create binarry array with posible subsequence of "0" and "1" bits
function generateBinaryArray(maxLength) {
	const binaryArray = [];
  
	for (let i = 0; i < 2 ** maxLength; i++) {
		const binaryNumber = i.toString(2).padStart(maxLength, '0');
		binaryArray.push(binaryNumber);
	}
  
	return binaryArray;
}

// Function which calculate value for the Pokker test
function pokkerTest(sequence) {
	const m = 4;    // Change this value to set the maximum length of the binary numbers
	const binaryArray = generateBinaryArray(m);
	console.log('Posible subsequence of "0" and "1" bits:\n', binaryArray);
	let сoincidenceBinaryNumber = [];

	for (let i = 0; i < binaryArray.length; i++) {
		const regexp = new RegExp(`\\w${binaryArray[i]}`, 'g');
		const сoincidence = sequence.match(regexp);
		сoincidenceBinaryNumber.push(сoincidence.length);
	}
	
	console.log('Subsequence of "0" and "1" bits:\n', сoincidenceBinaryNumber);
	const k = сoincidenceBinaryNumber.reduce((sum, number) => sum += number, 0);
	console.log('Сalculate the variable "k": ', k);
	const sum = сoincidenceBinaryNumber.reduce((sum, number) => sum += number ** 2, 0);
	const x3 = ((2 ** m)/k) * sum - k;
	console.log('Сalculate the variable "X_3": ', x3);
	console.log(`(min X_3) ${MIN_LIMIT_OF_POKKER} ${(x3 > MIN_LIMIT_OF_POKKER) ? '<' : '>'} ${x3} ${(x3 < MAX_LIMIT_OF_POKKER) ? '<' : '>'} ${MAX_LIMIT_OF_POKKER} (max X_3)`);
	console.log(`Test is ${(x3 > MIN_LIMIT_OF_POKKER && x3 < MAX_LIMIT_OF_POKKER) ? 'passed!\n' : 'failed!\n'}`);
	return (x3 > MIN_LIMIT_OF_POKKER && x3 < MAX_LIMIT_OF_POKKER) ? true : false;
}

// Perform the Pokker test
const resultPokkerTest = pokkerTest(randomSequence);

// 2.4. Implementation of the series lengths test
console.log('#Start the series lengths test\n');

// Function which calculate value for the Pokker test
function createArray(number, bit) {
	let str = bit;
	let arr = [];

	for (let i = 0; i < number; i++) {
		arr.push(str);
		str += bit;
	}

	return arr;
}

// Function which calculated value of the repetitions
function сountNumberRepetitions(sequence, arr) {
	let repetitionsArr = [];

	for (let i = 0; i < arr.length; i++) {
		const regexp = new RegExp(`\\w${arr[i]}`, 'g');
		const сoincidence = sequence.match(regexp);
		repetitionsArr.push(сoincidence.length);
	}

	return repetitionsArr;
}

//  Function which calculate value of the series lengths
function compareData(minArr, maxArr, valueArr, cycles) {
	let result = true;

	for (let i = 0; i < cycles; i++) {
		if (valueArr[i] < minArr[i] || valueArr[i] > maxArr[i]) result = false;

		if (i < 4) {
			console.log(`${minArr[i]} ${(valueArr[i] > minArr[i]) ? '<' : '>'} ${valueArr[i]} ${(valueArr[i] < maxArr[i]) ? '<' : '>'} ${maxArr[i]}`);
		} else {
			console.log(`${minArr[4]} ${(valueArr[i] > minArr[4]) ? '<' : '>'} ${valueArr[i]} ${(valueArr[i] < maxArr[4]) ? '<' : '>'} ${maxArr[4]}`);
		}
	}

	return result;
}

// Function which calculate value of the series lengths
function seriesLength(sequence) {
	let onesArr = createArray(maxOnes, '1');
	let zerosArr = createArray(maxZeros, '0');
	console.log('Number and values of repetitions for "1": ', onesArr);
	console.log('Number and values of repetitions for "0": ', zerosArr);

	let сoincidenceOneArr = сountNumberRepetitions(sequence, onesArr);
	let сoincidenceZeroArr = сountNumberRepetitions(sequence, zerosArr);
	console.log('Number of repetitions for "1"', сoincidenceOneArr);
	console.log('Number of repetitions for "0"',сoincidenceZeroArr);
	console.log('Compare number repetitions of the "1":');
	const resultCompareOne = compareData(MIN_LIMITS_OF_REPETITIONS, MAX_LIMITS_OF_REPETITIONS, сoincidenceOneArr, maxOnes);
	console.log('Compare number repetitions of the "0":');
	const resultCompareZero = compareData(MIN_LIMITS_OF_REPETITIONS, MAX_LIMITS_OF_REPETITIONS, сoincidenceZeroArr, maxZeros);
	console.log(`\nTest ${(resultCompareOne && resultCompareZero) ? 'passed!\n' : 'failed!\n'}`);
	return (resultCompareOne && resultCompareZero) ? true : false;
}

// Perform of the series lengths test
const resultSeriesLengthsTest = seriesLength(randomSequence);

// Generalized result of tests
console.log(`Monobit test is ${(resultMonobitTest) ? 'passed!' : 'failed!'}`);
console.log(`Maximum series length test is ${(resultMaximumSeriesLengthTest) ? 'passed!' : 'failed!'}`);
console.log(`Pokker test is ${(resultPokkerTest) ? 'passed!' : 'failed!'}`);
console.log(`Series lengths test is ${(resultSeriesLengthsTest) ? 'passed!' : 'failed!'}`);
console.log(`Generalized result of tests is ${(resultMonobitTest && resultMaximumSeriesLengthTest && resultPokkerTest && resultSeriesLengthsTest) ? 'passed!' : 'failed!'}`);
