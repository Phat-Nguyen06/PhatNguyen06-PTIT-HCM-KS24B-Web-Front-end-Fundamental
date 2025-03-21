let n = Number(prompt("Nhập số lượng phần tử của mảng: "));

if (isNaN(n) || n < 2) {
    alert("Mảng phải có ít nhất 2 phần tử!");
} else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(Number(prompt(`Nhập phần tử thứ ${i + 1}: `)));
    }

    let isFibonacci = true;
    
    for (let i = 2; i < n; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break;
        }
    }

    if (isFibonacci) {
        alert("Mảng này là dãy Fibonacci!");
    } else {
        alert("Mảng này KHÔNG phải dãy Fibonacci!");
    }
}
