let n = Number(prompt("Nhập vào số lượng mảng: "));

if (isNaN(n) || n < 0) {
    alert("Số lượng phần tử không được nhỏ hơn 0 và phải là một số");
}
else if (n === 0) {
    alert("Mảng không có phần tử nào");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Number(prompt(`Nhập vào phần tử thứ ${i + 1}: `)));
    }

    let max_1 = arr[0];
    let max_2 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > max_1) {
            max_1 = arr[i];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] < max_1 && arr[i] > max_2) {
            max_2 = arr[i];
        }
    }

    alert(`Mảng vừa nhập: Phần tử lớn nhất thứ hai: ${max_2}`);
}