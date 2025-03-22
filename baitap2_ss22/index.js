let numbers = [2, 5, 7, 4, 1, 8, 6];

let input_check = Number(prompt("Enter a number: "));
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (input_check == numbers[i]) {
        console.log("Bingo");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Chúc bạn may mắn lần sau");
}