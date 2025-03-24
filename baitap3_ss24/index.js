let menu = `================== MENU ===================\n`
    + `1. Nhập mảng số nguyên\n`
    + `2. Hiển thị mảng\n`
    + `3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n`
    + `4. Tính tổng và trung bình cộng của các số dương trong mảng\n`
    + `5. Đảo ngược mảng\n`
    + `6. Kiểm tra mảng có đối xứng không\n`
    + `7. Thoát\n`
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
                let num_max = 0;
                for (let i = 0; i < arr.length; i++) {
                    num_max = Math.max(num_max, arr[i]);
                }

                alert(`Giá trị lớn nhất của mảng là: ${num_max}`);
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

                let average = sum / (arr.length);
                alert(`Trung bình cộng của mảng là: ${average.toFixed(2)}`);
            }
            else {
                alert("Mảng chưa được khởi tạo");
            }
            break;
        case 5:
            if (arr.length > 0) {
                let index = Number(prompt("Nhập vị trí muốn xóa:"));

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
        case 6:
            if (arr.length > 0) {
                let max_1 = arr[0];
                let max_2 = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > max_1) {
                        max_1 = arr[i];
                    }
                }
            
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] < max_1 && arr[i] > max_2) {
                        max_2 = arr[i];
                    }
                }
            
                alert(`Mảng vừa nhập: Phần tử lớn nhất thứ hai: ${max_2}`);
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