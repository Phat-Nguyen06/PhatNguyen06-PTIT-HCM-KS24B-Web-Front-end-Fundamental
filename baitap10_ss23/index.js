let menu = `================== MENU ===================\n`
    + `1. Nhập số phần tử cần nhập và giá trị các phần tử\n`
    + `2. In ra giá trị các phần tử đang quản lý\n`
    + `3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n`
    + `4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n`
    + `5. In ra các số nguyên tố trong mảng và tính tổng\n`
    + `6. Nhập một số và đếm số lần xuất hiện trong mảng\n`
    + `7. Thêm một phần tử vào vị trí chỉ định\n`
    + `8. Xóa một phần tử theo giá trị\n`
    + `9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n`
    + `0. Thoát\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn: `;

let menu_2 = `================== MENU ===================\n`
    + `1. Sắp xếp mảng tăng dần\n`
    + `2. Sắp xếp mảng giảm dần\n`
    + `0. Thoát\n`
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
            if (arr.length > 0) {
                let sum = 0;
                let sub_arr = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 == 0) {
                        sub_arr.push(arr[i]);
                        sum += arr[i];
                    }
                }

                sub_arr.sort((a, b) => b - a);
                alert(`Mảng gồm phần tử chẵn và sắp xếp theo mảng giảm dần: ${sub_arr}\nTổng các phần tử chẵn là: ${sum}`);
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 4:
            if (arr.length > 0) {
                let num_max = arr[0];
                let location_num_max = 0;
                let num_min = arr[0];
                let location_num_min = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > num_max) {
                        num_max = arr[i];
                        location_num_max = i;
                    }
                    if (arr[i] < num_min) {
                        num_min = arr[i];
                        location_num_min = i;
                    }
                }

                alert(`Giá trị lớn nhất của mảng là: ${num_max} tại vị trí ${location_num_max}\nGiá trị nhỏ nhất của mảng là: ${num_min} tại vị trí ${location_num_min}`);
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 5:
            if (arr.length > 0) {
                let sub_arr = [];
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    let check = true;
                    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                        if (arr[i] % j == 0) {
                            check = false;
                            break;
                        }
                    }

                    if (check && arr[i] >= 2) {
                        sub_arr.push(arr[i]);
                        sum += arr[i];
                    }
                }

                alert(`Các phần tử là số nguyên tố trong mảng là: ${sub_arr}\nTổng giá trị của số nguyên tố là: ${sum}`);
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 6:
            if (arr.length > 0) {
                let enter_statistics = Number(prompt("Nhập vào số cần thống kê: "));
                if (isNaN(enter_statistics)) {
                    alert("Số nhập vào không hợp lệ");
                }
                else {
                    let count = 0;
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] == enter_statistics) {
                            count++;
                        }
                    }

                    if (count == 0) {
                        alert(`Thông kê không có số ${enter_statistics} trong mảng`);
                    }
                    else {
                        alert(`Thống kê số ${enter_statistics} có ${count} phần tử trong mảng`);
                    }
                }
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 7:
            if (arr.length > 0) {
                let num = Number(prompt("Nhập số muốn thêm:"));
                let index = Number(prompt("Nhập vị trí muốn chèn vào:"));

                if (index >= 0 && index <= arr.length) {
                    arr.splice(index, 0, num);
                    alert(`Mảng sau khi chèn: ${arr}`);
                } else {
                    alert("Vị trí không hợp lệ!");
                }
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 8:
            if (arr.length > 0) {
                let index = Number(prompt("Nhập vị trí muốn chèn vào:"));

                if (index >= 0 && index < arr.length) {
                    arr.splice(index, 1);
                    alert("Mảng sau khi xóa: " + arr);
                } else {
                    alert("Vị trí không hợp lệ!");
                }
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 9:
            if (arr.length > 0) {
                while (true) {
                    choice_2 = Number(prompt(menu_2))
                    switch (choice_2) {
                        case 1:
                            arr.sort((a, b) => a - b);
                            alert(`Mảng sau khi sắp xếp tăng dần: ${arr}`);
                            break;
                        case 2:
                            arr.sort((a, b) => b - a);
                            alert(`Mảng sau khi sắp xếp giảm dần: ${arr}`);
                            break;
                        case 0:
                            //
                            break;
                        default:
                            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
                    }

                    if (choice_2 == 0) {
                        break;
                    }
                }
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 0:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice == 0) {
        break;
    }
}