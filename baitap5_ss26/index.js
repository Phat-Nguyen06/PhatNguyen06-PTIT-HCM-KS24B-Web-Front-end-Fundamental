// function findMax(numbers) {
//     let max = numbers[0];
//     let maxIndex = 0;
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//             maxIndex = i;
//         }
//     }

//     return { max, maxIndex };
// }

// let numbers = [15, 42, 9, 33, 56, 7, 98, 23, 67, 5];
// let result = findMax(numbers);

// console.log(`Số lớn nhất là ${result.max} ở vị trí ${result.maxIndex}`);


function findMax(numbers) {
    return numbers.reduce((maxInfo, num, index) => {
        return num > maxInfo.value ? { value: num, index: index } : maxInfo;
    }, { value: -Infinity, index: -1 });
}

let numbers = [5, 12, 9, 30, 17, 22];
let result = findMax(numbers);

console.log("Số lớn nhất:", result.value);
console.log("Vị trí:", result.index);
