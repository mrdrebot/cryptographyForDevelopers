import permutationPblock from './transPblock.js';
import cyclicShiftOperation from './shiftSblock.js';

export default function convertFromStringToBinary(input) { 
    let binaryResult = '';
    let orgBinArr = [];
    let pblockArr = [];
    let sblockArr = [];
    
    for (const char of input) {
        const codePoint = char.codePointAt(0);
        let binaryValue = codePoint.toString(2);
        orgBinArr.push(binaryValue.padStart(8, '0'));
        binaryValue = permutationPblock(binaryValue.padStart(8, '0'));
        pblockArr.push(binaryValue);
        binaryValue = cyclicShiftOperation(binaryValue);
        sblockArr.push(binaryValue);
        binaryResult += binaryValue + ' ';
    }
    
    console.log('Original binary array: ', orgBinArr);
    console.log('P-blocks binary array: ', pblockArr);
    console.log('S-blocks binary array: ', sblockArr);

    return binaryResult.trim();
}