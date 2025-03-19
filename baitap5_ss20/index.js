let a = +prompt("Nhập vào số a:");
let b = +prompt("Nhập vào số b:");

let result = 1;

for (let i = 0; i < b; i++) {
    result *= a;
}

alert(`Kết quả của ${a}^${b} là: ` + result);
