let sum = 0;
let check = true;

for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`Nhập số thứ ${i}:`));

    if (isNaN(num)) {
        alert("Có lỗi xảy ra, vui lòng nhập lại số!");
        check = false; 
        break;
    }

    if (num % 2 !== 0) {
        sum += num;
    }
}

if (check) {
    alert(`Tổng các số lẻ là: ${sum}`);
}
