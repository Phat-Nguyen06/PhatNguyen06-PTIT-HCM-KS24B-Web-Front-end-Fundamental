let num = Number(prompt("Nhập một số: "));

if (!isFinite(num)) {
    alert("Dữ liệu nhập vào không hợp lệ");
}
else {
    for (let i = 1; i <= num; i++) {
        if (i % 5 === 0) {
            alert(i);
        }
    }
}