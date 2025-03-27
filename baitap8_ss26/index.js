let arr = [10, 2, 3, 5, 7, 9];

function is_prime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let result = arr.filter((element) => is_prime(element) && element % 2 !== 0);

console.log(result);