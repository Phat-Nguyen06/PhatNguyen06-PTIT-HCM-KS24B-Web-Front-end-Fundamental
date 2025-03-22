let num = Number(prompt("Enter a number: "));

let check = true;
if (num < 2) {
    check = false;
}
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        check = false;
        break;
    }
}

if (check) {
    console.log(`${num} là số nguyên tố`);
} else {
    console.log(`${num} không phải là số nguyên tố`);
}