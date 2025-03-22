let n = Number(prompt("Nhập vào số n: "));
while (isNaN(n) || n < 0) {
    n = Number(prompt("Nhập lại số n (n >= 0): "));
}

let uoc = "";
for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        uoc += i + " ";
        if (i !== n / i) {
            uoc += (n / i) + " ";
        }
    }
}

alert(`Ước của ${n} là: ${uoc}`);
