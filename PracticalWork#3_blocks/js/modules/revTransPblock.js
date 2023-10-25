export default function  reversePermutationPblock(input) {
    let strToArr = input.split('');
    let arrToStr = [];

    strToArr.forEach((el, i) => {
        if (i === 2 || i === 3 || i === 6 || i === 7) {
            arrToStr[i - 2] = strToArr[i];
        } else {
            arrToStr[i + 2] = strToArr[i];
        }
    });

    return arrToStr.join('');
}