let num_1 = Number(prompt("Nhập vào một số: "));

if (num_1 < 2) {
    alert(num_1 + " không phải là số nguyên tố");
} else {
    let check = true;
    for (let i = 2; i <= Math.sqrt(num_1); i++) {
        if (num_1 % i == 0) {
            alert(num_1 + " không phải là số nguyên tố");
            check = false;
            break;
        }
    }

    if (check) {
        alert(num_1 + " là số nguyên tố");
    }
}