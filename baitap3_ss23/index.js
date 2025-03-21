let n = Number(prompt("Nhập vào số lượng mảng: "));
if (isNaN(n) || n < 0) {
    alert("Số lượng mảng không hợp lệ");
    exit();
}

let arr = [];

let negative_number = 0;
for (let i = 0; i < n; i++) {
    arr.push(Number(prompt("Nhập vào phần tử thứ " + (i + 1) + ": ")));
    if (arr[i] < 0) {
        negative_number++;
    }
}

if (negative_number === 0) {
    alert("Mảng không có phần tử");
}
else {
    alert(negative_number);
}

