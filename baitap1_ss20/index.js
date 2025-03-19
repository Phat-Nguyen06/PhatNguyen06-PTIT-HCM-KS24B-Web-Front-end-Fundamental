let num = Number(prompt("Nhập một số: "));

if (!isFinite(num)) {
    alert("Dữ liệu nhập vào không hợp lệ");
}
else {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    alert(`Tổng các số từ 1 đến ${num} là: ${sum}`);
}