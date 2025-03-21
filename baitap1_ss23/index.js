let n = Number(prompt("Nhập vào số lượng của mảng "));
let number_arr = [];

for (let i = 0; i < n; i++) {
    number_arr.push(Number(prompt(`Nhập số thứ ${i + 1}: `)));
}

let arr_more_than_10 = [];
for (let i = 0; i < number_arr.length; i++) {
    if (number_arr[i] >= 10) {
        arr_more_than_10.push(number_arr[i]);
    }
}

if (arr_more_than_10.length == 0) {
    alert("Không có số nào lớn hơn hoặc bằng 10.");
} else {
    alert(arr_more_than_10);
}