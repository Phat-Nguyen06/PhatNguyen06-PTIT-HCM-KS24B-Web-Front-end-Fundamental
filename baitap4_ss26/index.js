function is_prime(num) {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) return false;
    }

    return true;
}

function filter_arr_prime (arr) {
    return arr.filter(arr => is_prime(arr));
}

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 20];

let primeNumbers = filter_arr_prime(numbers);
console.log(primeNumbers); 