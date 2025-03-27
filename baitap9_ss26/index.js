function sum_even_odd(numbers) {
    return numbers.reduce(
        (acc, num) => {
            if (num % 2 === 0) {
                acc.even_sum += num;
            } else {
                acc.odd_sum += num;
            }
            return acc;
        },
        { even_sum: 0, odd_sum: 0 }
    );
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = sum_even_odd(numbers);

console.log("Tổng số chẵn:", result.even_sum);
console.log("Tổng số lẻ:", result.odd_sum);
