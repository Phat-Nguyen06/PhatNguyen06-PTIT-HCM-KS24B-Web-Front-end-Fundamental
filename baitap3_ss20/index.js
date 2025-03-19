let num = Number(prompt("Nhập một số: "));

if (!isFinite(num)) {
    alert("Dữ liệu nhập vào không hợp lệ");
}
else {
    let reverseNum = 0;
    let temp = num;
    while (temp > 0) {
        reverseNum = reverseNum * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    if (num === reverseNum) {
        alert(`${num} là số đối xứng`);
    }
    else {
        alert(`${num} không phải là số đối xứng`);
    }
}