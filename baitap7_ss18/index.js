let a = Number(prompt("Nhập a"));
let b = Number(prompt("Nhập b"));

let input = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");

if (input === "+") {
    alert(`a + b = ${a + b}`);
}
else if (input === "-") {
    alert(`a - b = ${a - b}`);
}
else if (input === "*") {
    alert(`a * b = ${a * b}`);
}
else if (input === "/") {
    alert(`a / b = ${a / b}`);
}
else {
    alert("Không hợp lệ");
}