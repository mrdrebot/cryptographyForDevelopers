export default function cyclicShiftOperation(input) {
    let newArr = [];

    for (let i = 0; i < input.length; i = i + 4) {
        newArr.push(input.slice(i, i + 4));
    }

    return newArr.reverse().join('');
}