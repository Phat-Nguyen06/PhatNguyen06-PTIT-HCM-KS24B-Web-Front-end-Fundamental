let n = parseInt(prompt("Nhập số lượng phần tử của mảng: "));
let arr = [];
let digits = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt(`Nhập phần tử thứ ${i + 1}:`));
}

for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== ' ') {
        digits.push(arr[i]);
    }
}

if (digits.length > 0) {
    alert(digits.join(" "));
} else {
    alert("Không có ký tự số");
}
