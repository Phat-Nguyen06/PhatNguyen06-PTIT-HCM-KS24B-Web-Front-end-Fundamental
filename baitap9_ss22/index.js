let numbers = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];

let uniqueArray = [];

for (let i = 0; i < numbers.length; i++) {
    let exists = false;

    for (let j = 0; j < uniqueArray.length; j++) {
        if (numbers[i] === uniqueArray[j]) {
            exists = true;
            break;
        }
    }

    if (!exists) {
        uniqueArray.push(numbers[i]);
    }
}

uniqueArray.sort();

console.log(uniqueArray);