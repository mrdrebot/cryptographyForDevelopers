import convertFromStringToBinary from './modules/fromStrToBin.js';
import convertfromBinaryToString from './modules/fromBinToStr.js';
import cryptFromBinaryToString from './modules/cryptFromBinToStr.js';

const inputText = prompt('Please enter the data:');

const binary = convertFromStringToBinary(inputText);
console.log('inputText: ', inputText);
console.log('Entered text is encrypted: ', cryptFromBinaryToString(binary));
console.log('\n');

const outputText = convertfromBinaryToString(binary);
console.log('outputText: ', outputText);
console.log('\n');

console.log('inputText = outputText ? ', inputText === outputText);

