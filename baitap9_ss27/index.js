let n = [5, 8, 6, 3, 4, 2, 7];

function even_ascending(arr) {
    let evens = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);

    let evenIndex = 0;
    return arr.map(num => (num % 2 === 0 ? evens[evenIndex++] : num));
}

console.log(even_ascending(n));
