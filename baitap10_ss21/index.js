let n = Number(prompt("Nhập vào n là số nguyên tố sẽ hiển thị"));
if (isNaN(n) || n <= 0) {
    console.log("Không hợp lệ! Vui lòng nhập một số nguyên dương.");
}
else {
    let dem = 0;
    let a = 2;
    while (dem < n) {
        let flag = true;
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i == 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            console.log(a);
            dem++;
        }
        a++;
    }
}
