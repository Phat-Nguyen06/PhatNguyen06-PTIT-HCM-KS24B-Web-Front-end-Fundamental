let n = Number(prompt("Nhập vào số lượng mảng: "));
if (isNaN(n) || n < 0) {
    alert("Nhập sai dữ liệu");
    exit();
}
else if (n === 0) {
    alert("Mảng không có phần tử");
    exit();
}
else {
    let arr = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        arr.push(Number(prompt(`Nhập vào phần tử thứ ${i+1}: `)));
    }
    
    for (let i = 0; i < n; i++) {
        if(!isNaN(arr[i])) {
            sum += arr[i];
        }
    }
    
    if (sum === 0) {
        alert("Không có phần tử nào là số");
    }
    else {
        alert(`Tổng các số trong mảng là: ${sum}`);
    }
}