let menu = `================== MENU ===================\n`
    + `1. Nhập mảng\n`
    + `2. Hiển thị mảng\n`
    + `3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n`
    + `4. Tính tổng các phần tử trong mảng\n`
    + `5. Tìm số lần xuất hiện của một phần tử trong mảng\n`
    + `6. Sắp xếp mảng tăng dần\n`
    + `7. Thoát chương trình\n`
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
                let num_max = arr[0];
                let num_min = arr[0];
                for (let i = 0; i < arr.length; i++) {
                    num_max = Math.max(num_max, arr[i]);
                    num_min = Math.min(num_min, arr[i]);
                }

                alert(`Giá trị lớn nhất của mảng là: ${num_max}\nGiá trị nhỏ nhất của mảng là: ${num_min}`);
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 4:
            if (arr.length > 0) {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }

                alert(`Tổng các phần tử trong mảng là: ${sum}`);
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 5:
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
        case 6:
            if (arr.length > 0) {
                arr.sort((a,b) => a - b);
                alert(`Mảng sau khi sắp xếp tăng dần: ${arr}`);
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 7:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice == 7) {
        break;
    }
}