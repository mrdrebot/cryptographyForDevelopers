export default function cryptFromBinaryToString(input) { 
    input = input.replaceAll(' ', '');
    let strResult = '';
    
    for (let i = 0; i < input.length - 1; i = i + 8) {
        const sBlock = input.slice(i, i + 8);
        strResult += String.fromCharCode(parseInt(sBlock, 2));
    }

    return strResult.split('').join('').trim(); 
}