let n = Number(prompt("Nhập số phần tử của dãy Fibonacci: "));
if (isNaN(n) || n <= 0) {
    console.log("Không hợp lệ! Vui lòng nhập một số nguyên dương.");
}
else {
    let a = 1;
    let b = 1;
    let Fibonacci;

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            Fibonacci = a;
        } else if (i == 1) {
            Fibonacci = b;
        } else {
            Fibonacci = a + b;
            a = b;
            b = Fibonacci;
        }
        console.log(Fibonacci);
    }
}
