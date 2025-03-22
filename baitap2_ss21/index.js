let odd = 0;
let even = 0;

for (let i = 0; i < 5; i++) {
    let num = Number(prompt(`Nhập vào số thứ ${i + 1}: `));

    if (num % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

alert(`Số chẵn: ${even}`);
alert(`Số lẻ: ${odd}`);