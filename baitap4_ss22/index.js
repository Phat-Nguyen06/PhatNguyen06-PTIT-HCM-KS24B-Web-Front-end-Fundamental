let input = prompt("Nhập vào số cần kiểm tra: ");

if (isNaN(input)) {
    alert("Đây không phải là số");
}
else {
    let arr = input.split("");
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    alert("Chữ số lớn nhất trong dãy là: " + max);
}
