let a = Number(prompt("Nhập vào số thứ nhất"));
let b = Number(prompt("Nhập vào số thứ hai"));

function sum_num(a, b) {
    if (!isFinite(a) || !isFinite(b)) {
        alert("Dữ liệu không hợp lệ!!");
        return;
    }

    return a + b;
}

alert(sum_num(a, b));
