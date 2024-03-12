// 1. Double using callback
function doubleArray(arr, callback) {
    const doubledArray = arr.map(callback);
    return doubledArray;
}

// Example usage:
const numbers = [1, 2, 3, 4];
const doubleCallback = num => num * 2;
const doubledNumbers = doubleArray(numbers, doubleCallback);
console.log(doubledNumbers);
