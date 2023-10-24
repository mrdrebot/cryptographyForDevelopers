export default class MyBigInt {
// class MyBigInt {
    // Creating a master field of our own data type for large numbers 
    constructor() {
        this.values = [];
    }
    
    // Retrieving a previously stored hexadecimal number
    getHex() {
        return this.createHexStr();
    }

    // Storage of a sixteen-year number
    setHex(hexString) {
        // console.log(`You entered a hexString: ${hexString}`);
        // console.log('\n');
        this.createIntArr(hexString);
        return this.createHexStr();
    }

    // A function to create an array of unsigned integers (32 bits) for storing large numbers
    createIntArr(str) {
        this.values = [];
        str = str.toLowerCase();

        for (let i = str.length - 1; i >= 0; i -= 8) {
            const chunk = str.slice(Math.max(0, i - 7), i + 1);
            this.values.push(parseInt(chunk, 16) >>> 0); // Ensure 32-bit unsigned integers
        }    
    }

    // Obtaining a hexadecimal number as a string from an array of unsigned integers
    createHexStr() {
        return this.values.map(value => value.toString(16).padStart(8, '0')).reverse().join('');
    }

    // Perform bitwise inversion
    inv() {
        const result = new MyBigInt();
        result.values = this.values.map(value => ~value >>> 0);
        return result;
    }
    
    // Perform bitwise XOR
    xor(other) {
        const result = new MyBigInt();
        result.values = this.values.map((value, index) => (value ^ other.values[index]) >>> 0);
        return result;
    }
    
    // Perform bitwise OR
    or(other) {
        const result = new MyBigInt();
        result.values = this.values.map((value, index) => (value | other.values[index]) >>> 0);
        return result;
    }

    // Perform bitwise AND
    and(other) {
        const result = new MyBigInt();
        result.values = this.values.map((value, index) => (value & other.values[index]) >>> 0);
        return result;
    }
    
    // Perform right shift by n bits
    shiftR(n) {
        const result = new MyBigInt();
        result.values = this.values.map(value => value >>> n);
        return result;
    }
    
    // Perform left shift by n bits
    shiftL(n) {
        const result = new MyBigInt();
        result.values = this.values.map(value => (value << n) >>> 0);
        return result;
    }

    // Task #3
    // Perform addition with another MyBigInt
    add(other) {
        const result = new MyBigInt();
        let carry = 0;

        for (let i = 0; i < Math.max(this.values.length, other.values.length) || carry; i++) {
            const sum = (this.values[i] >>> 0) + (other.values[i] >>> 0) + carry;
            result.values.push((sum & 0xFFFFFFFF) >>> 0);
            carry = (sum > 0xFFFFFFFF) ? 1 : 0;
        }

        return result;
    }

    // Perform subtraction with another MyBigInt
    sub(other) {
        const result = new MyBigInt();
        let borrow = 0;

        for (let i = 0; i < this.values.length || borrow; i++) {
            const diff = (this.values[i] >>> 0) - (other.values[i] >>> 0) - borrow;
            result.values.push(diff >>> 0);
            borrow = (diff < 0) ? 1 : 0;
        }

        return result;
    }

    // Perform modulo operation with another MyBigInt
    mod(other) {
        let dividend = this.values;
        console.log('dividend: ', dividend);

        while (dividend.compare(other) >= 0) {
            dividend = dividend.sub(other);
        }

        return dividend;
    }
}

// // Create variables
// const numberA = new MyBigInt();
// const numberB = new MyBigInt();
// const numberC = new MyBigInt();

// // Task #2.2. Implementation of bitwise operations
// console.log('Task #2.2. Bitwise operations');
// numberA.setHex('e035c6cfa42609b998b883bc1699df885cef74e2b2cc372eb8fa7e7');
// console.log(`You entered a hex numberA: ${numberA.getHex()}`);
// numberB.setHex('072f028943e0fd5fab3273782de14b1011741bd0c5cd6ba6474330');
// console.log(`You entered a hex numberB: ${numberB.getHex()}`);
// numberC.setHex(numberA.xor(numberB).getHex());                              // numberC = XOR(numberA, numberB)
// console.log(`The result of the XOR(numberA, numberB) ${numberC.getHex()}`); // print(numberC.getHex())                                       

// // Task #2.3. Implementation of arithmetic operations 
// // Let's check the execution of the XOR operation
// console.log('Task #2.3. Check the execution of the XOR operation');
// numberA.setHex('51bf608414ad5726a3c1bec098f77b1b54ffb2787f8d528a74c1d7fde6470ea4');
// console.log(`You entered a hex numberA: ${numberA.getHex()}`);
// numberB.setHex('403db8ad88a3932a0b7e8189aed9eeffb8121dfac05c3512fdb396dd73f6331c');
// console.log(`You entered a hex numberB: ${numberB.getHex()}`);
// numberC.setHex(numberA.xor(numberB).getHex());
// console.log(`The result of the XOR(numberA, numberB) ${numberC.getHex()}`);
// console.log('Comparison with the given answer:');
// console.log(`${numberC.getHex()} === 1182d8299c0ec40ca8bf3f49362e95e4ecedaf82bfd167988972412095b13db8`);
// console.log('Result: ', numberC.getHex() === '1182d8299c0ec40ca8bf3f49362e95e4ecedaf82bfd167988972412095b13db8');

// // Let's check the execution of the ADD operation
// console.log('Task #2.3. Check the execution of the ADD operation');
// numberA.setHex('36f028580bb02cc8272a9a020f4200e346e276ae664e45ee80745574e2f5ab80');
// console.log(`You entered a hex numberA: ${numberA.getHex()}`);
// numberB.setHex('70983d692f648185febe6d6fa607630ae68649f7e6fc45b94680096c06e4fadb');
// console.log(`You entered a hex numberB: ${numberB.getHex()}`);
// numberC.setHex(numberA.add(numberB).getHex());
// console.log(`The result of the ADD(numberA, numberB) ${numberC.getHex()}`);
// console.log('Comparison with the given answer:');
// console.log(`${numberC.getHex()} === a78865c13b14ae4e25e90771b54963ee2d68c0a64d4a8ba7c6f45ee0e9daa65b`);
// console.log('Result: ', numberC.getHex() === 'a78865c13b14ae4e25e90771b54963ee2d68c0a64d4a8ba7c6f45ee0e9daa65b');

// // Let's check the execution of the SUB operation
// console.log('Task #2.3. Check the execution of the SUB operation');
// numberA.setHex('33ced2c76b26cae94e162c4c0d2c0ff7c13094b0185a3c122e732d5ba77efebc');
// console.log(`You entered a hex numberA: ${numberA.getHex()}`);
// numberB.setHex('22e962951cb6cd2ce279ab0e2095825c141d48ef3ca9dabf253e38760b57fe03');
// console.log(`You entered a hex numberB: ${numberB.getHex()}`);
// numberC.setHex(numberA.sub(numberB).getHex());
// console.log(`The result of the ADD(numberA, numberB) ${numberC.getHex()}`);
// console.log('Comparison with the given answer:');
// console.log(`${numberC.getHex()} === 10e570324e6ffdbc6b9c813dec968d9bad134bc0dbb061530934f4e59c2700b9`);
// console.log('Result: ', numberC.getHex() === '10e570324e6ffdbc6b9c813dec968d9bad134bc0dbb061530934f4e59c2700b9');
