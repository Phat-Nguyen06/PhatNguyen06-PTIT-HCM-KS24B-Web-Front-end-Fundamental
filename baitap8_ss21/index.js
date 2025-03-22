let num = Number(prompt("Nhập vào một số có 3 chữ số: "));

if (num < 100 || num > 999 || isNaN(num)) {
    console.log("Số bạn nhập không hợp lệ.");
} else {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        sum += Math.pow(temp % 10, 3);
        temp = Math.floor(temp / 10);
    }
    if (sum === num) {
        console.log(`${num} là số Armstrong.`);
    } else {
        console.log(`${num} không phải là số Armstrong.`);
    }
}