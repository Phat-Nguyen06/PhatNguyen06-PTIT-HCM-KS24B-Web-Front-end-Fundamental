let numbers = [3,9,7,4,1,8,6,2,5,7];
let freqMap = {};
let maxFreq = 0;
let minElement = Infinity;

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (freqMap[num] === undefined) {
        freqMap[num] = 1;
    } else {
        freqMap[num]++;
    }
    if (freqMap[num] > maxFreq) {
        maxFreq = freqMap[num];
    }
}

for (let key in freqMap) {
    if (freqMap[key] === maxFreq) {
        if (Number(key) < minElement) {
            minElement = Number(key);
        }
    }
}

if (minElement === Infinity) {
    console.log(maxFreq);
} else {
    console.log("Phần tử xuất hiện nhiều nhất là:", minElement);
}
