export default function  permutationPblock(input) {
    let strToArr = input.split('');
    let arrToStr = [];

    strToArr.forEach((el, i) => {
        if (i === 0 || i === 1 || i === 4 || i === 5) {
            arrToStr[i + 2] = strToArr[i];
        } else {
            arrToStr[i - 2] = strToArr[i];
        }
    });

    return arrToStr.join('');
}