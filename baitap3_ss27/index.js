let menu = `=== MENU QUẢN LÝ HÌNH HỌC ===\n`
    + `1. Tính diện tích hình tròn.\n`
    + `2. Tính chu vi hình tròn.\n`
    + `3. Tính diện tích hình chữ nhật.\n`
    + `4. Tính chu vi hình chữ nhật.\n`
    + `5. Thoát.\n`
    + `\n============================================\n`
    + `\nNhập lựa chọn (1-5):   `;

let pi = Math.PI;

while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            area_of_circle();
            break;
        case 2:
            circumference_of_circle();
            break;
        case 3:
            area_of_rectangle();
            break;
        case 4:
            perimeter_of_rectangle();
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

function area_of_circle() {
    let radius = Number(prompt("Nhập vào bán kính hình tròn:"));
    if (radius <= 0 || isNaN(radius)) {
        alert("Bán kính không hợp lệ!");
        return;
    }
    let area = pi * Math.pow(radius, 2);
    alert(`Diện tích hình tròn = ${area.toFixed(3)}`);
}

function circumference_of_circle() {
    let radius = Number(prompt("Nhập vào bán kính hình tròn:"));
    if (radius <= 0 || isNaN(radius)) {
        alert("Bán kính không hợp lệ!");
        return;
    }
    let circumference = 2 * pi * radius;
    alert(`Chu vi hình tròn = ${circumference.toFixed(3)}`);
}

function area_of_rectangle() {
    let width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
    let length = Number(prompt("Nhập chiều dài hình chữ nhật:"));
    if (width <= 0 || length <= 0 || isNaN(width) || isNaN(length)) {
        alert("Chiều rộng hoặc chiều dài không hợp lệ!");
        return;
    }
    let area = width * length;
    alert(`Diện tích hình chữ nhật = ${area.toFixed(3)}`);
}

function perimeter_of_rectangle() {
    let width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
    let length = Number(prompt("Nhập chiều dài hình chữ nhật:"));
    if (width <= 0 || length <= 0 || isNaN(width) || isNaN(length)) {
        alert("Chiều rộng hoặc chiều dài không hợp lệ!");
        return;
    }
    let perimeter = 2 * (width + length);
    alert(`Chu vi hình chữ nhật = ${perimeter.toFixed(3)}`);
}
