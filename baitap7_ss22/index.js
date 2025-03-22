let n = Number(prompt("Nhập số lượng phần tử của mảng: "));

if (isNaN(n) || n <= 0) {
    alert("Vui lòng nhập một số nguyên dương hợp lệ!");
} else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        let value = prompt(`Nhập phần tử thứ ${i + 1}:`);
        arr.push(value);
    }

    console.log(arr.sort());
    alert(arr.sort());
}

