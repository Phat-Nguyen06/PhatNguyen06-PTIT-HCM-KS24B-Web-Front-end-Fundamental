let menu = `=== MENU QUẢN LÝ HÌNH HỌC ===\n`
    + `1. Nhập danh sách số nguyên.\n`
    + `2. Tính trung bình các số.\n`
    + `3. Tìm số chẵn lớn nhất.\n`
    + `4. Tìm số lẻ nhỏ nhất.\n`
    + `5. Thoát.\n`
    + `\n============================================\n`
    + `\nNhập lựa chọn (1-5):   `;

let arr = [];
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            enter_arr();
            break;
        case 2:
            average_of_numbers();
            break;
        case 3:
            largest_even_number();
            break;
        case 4:
            smallest_odd_number();
            break;
        case 5:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 5) {
        break;
    }
}

function enter_arr() {
    let n = Number(prompt("Nhập vào số lượng phần tử muốn nhập"));

    for (let i = 0; i < n; i++) {
        arr.push(Number(prompt(`Nhập vào giá trị phần tử thứ ${i + 1}`)));
    }

    alert("Nhập danh sách số nguyên thành công!");
}

function average_of_numbers() {
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }

    let average = sum / arr.length;

    alert(`Trung bình các số = ${average}`);
}

function largest_even_number() {
    let arr_even_num = [];

    for (let value of arr) {
        if (value % 2 == 0) arr_even_num.push(value);
    }
    let num_max = arr_even_num[0];

    for (let i = 0; i < arr_even_num.length; i++) {
        if (arr_even_num[i] > num_max) num_max = arr_even_num[i];
    }
    
    alert(`Số chẵn lớn nhất trong mảng là: ${num_max}`);
}

function smallest_odd_number() {
    let arr_odd_num = [];

    for (let value of arr) {
        if (value % 2 != 0) arr_odd_num.push(value);
    }
    let num_min = arr_odd_num[0];

    for (let i = 0; i < arr_odd_num.length; i++) {
        if (arr_odd_num[i] < num_min) num_min = arr_even_num[i];
    }
    
    alert(`Số lẻ nhỏ nhất trong mảng là: ${num_min}`);
}