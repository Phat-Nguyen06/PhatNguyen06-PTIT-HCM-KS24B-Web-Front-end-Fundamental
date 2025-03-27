let n = Number(prompt("Nhập vào 1 số kiểm tra"));

function is_prime(a) {
    if (a < 2 || !isFinite(a)) {
        alert("Số nhập vào không hợp lệ!!!");
        return;
    }
    else {
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i == 0) {
                return "Không phải số nguyên tố";
            }
        }

        return "Là số nguyên tố";
    }
}

alert(is_prime(n));