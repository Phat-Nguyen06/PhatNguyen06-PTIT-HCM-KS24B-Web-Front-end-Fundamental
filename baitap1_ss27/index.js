let menu = `================== MENU ===================\n`
    + `1. Cộng hai số.\n`
    + `2. Trừ hai số.\n`
    + `3. Nhân hai số.\n`
    + `4. Chia hai số.\n`
    + `5. Thoát chương trình\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

let a = 6;
let b = 3;
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            alert(sum_number(a, b));
            break;
        case 2:
            alert(minus_number (a, b));
            break;
        case 3:
            alert(core_number (a, b));
            break;
        case 4:
            alert(divide_number (a, b));
            break;
        case 5:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice == 5) {
        break;
    }
}

function sum_number (a, b) {
    alert(`Tính tổng hai số ${a} và ${b}`);
    return a + b;
}

function minus_number (a, b) {
    alert(`Tính hiệu hai số ${a} và ${b}`);
    return a - b;
}

function core_number (a, b) {
    alert(`Tính tích hai số ${a} và ${b}`);
    return a * b;
}

function divide_number (a, b) {
    alert(`Tính thương hai số ${a} và ${b}`);
    return a / b;
}