import cyclicShiftOperation from './shiftSblock.js';
import reversePermutationPblock from './revTransPblock.js';

export default function convertfromBinaryToString(input) { 
    input = input.replaceAll(' ', '');
    let strResult = '';
    let orgBinArr = [];
    let pblockArr = [];
    let sblockArr = [];
    
    for (let i = 0; i < input.length - 1; i = i + 8) {
        sblockArr.push(input.slice(i, i + 8));
        const sBlock = cyclicShiftOperation(input.slice(i, i + 8));
        pblockArr.push(sBlock);
        const result = reversePermutationPblock(sBlock);
        orgBinArr.push(result);
        strResult += String.fromCharCode(parseInt(result, 2));
    }

    console.log('S-blocks binary array:: ', sblockArr);
    console.log('P-blocks binary array: ', pblockArr);
    console.log('Original binary array: ', orgBinArr);

    return strResult.split('').join('').trim(); 
}