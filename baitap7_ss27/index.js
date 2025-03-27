function findMissingNumber(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5])); // 4
console.log(findMissingNumber([10, 11, 12, 14, 15])); // 13
console.log(findMissingNumber([21, 22, 24, 25, 26])); // 23
