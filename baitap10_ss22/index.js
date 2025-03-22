let menu = `================== MENU ===================\n`
    + `1. Nhập vào mảng\n`
    + `2. Hiển thị mảng\n`
    + `3. Thêm phần tử\n`
    + `4. Sửa phần tử\n`
    + `5. Xóa phần tử\n`
    + `6. Thoát\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn: `;

let arr = [];
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập số lượng của mảng"));
            arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(Number(prompt(`Nhập vào phần tử thứ ${i + 1}: `)));
            }
            break;
        case 2:
            alert(arr.length > 0 ? `Mảng hiện tại: ${arr}` : "Mảng chưa có dữ liệu!");
            break;
        case 3:
            arr.push(Number(prompt(`Nhập vào một số muốn thêm vào: `)));
            break;
        case 4:
            if (arr.length > 0) {
                let index_location = Number(prompt("Nhập vào vị trí cần sửa: "));
                if (isNaN(index_location) || index_location < 0 || index_location >= arr.length) {
                    alert("Dữ liệu ko hợp lệ");
                }
                else {
                    for (let i = 0; i < arr.length; i++) {
                        if(i == index_location) {
                            arr[i] = Number(prompt(`Nhập vào số cần sửa: `));
                            break;
                        }
                    }
                    alert("Sửa thành công!");
                }
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 5:
            if (arr.length > 0) {
                let index_location = Number(prompt("Nhập vào vị trí cần xóa: "));
                if (isNaN(index_location) || index_location < 0 || index_location >= arr.length) {
                    alert("Dữ liệu ko hợp lệ");
                }
                else {
                    arr.splice(index_location, 1);
                    alert("Xóa thành công!");
                }
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 6:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice == 6) {
        break;
    }
}