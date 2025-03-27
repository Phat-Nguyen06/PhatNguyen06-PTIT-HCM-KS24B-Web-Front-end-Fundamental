let arr = [4, 5.4, 6, -2];
// let arr = [1, 2, 5, 7, -8, 6];
// let arr = [1.2, -3, -6];

function isPositiveInteger(arr) {
    if(!arr.every(Number.isFinite)) {
        alert("Giá trị nhập vào không hợp lệ!!!");
    }
    else {
        let count = 0;
        for (let num of arr) {
            if (Number.isInteger(num) && num > 0) {
                count++;
            }
        }
    }

    return count === 0 ? "Không có số nguyên dương trong mảng" : count;
}

alert(isPositiveInteger(arr));