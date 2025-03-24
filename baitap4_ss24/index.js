let menu = `================== MENU ===================\n`
    + `1. Nhập mảng 2 chiều\n`
    + `2. Hiển thị mảng 2 chiều\n`
    + `3. Tính tổng các phần tử trong mảng\n`
    + `4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n`
    + `5. Tính trung bình cộng các phần tử của một hàng cụ thể\n`
    + `6. Đảo ngược các hàng trong mảng\n`
    + `7. Thoát\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn: `;

let arr = [];
let rows;
let cols;

while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            rows = Number(prompt("Nhập số hàng của mảng: "));
            cols = Number(prompt("Nhập số cột của mảng: "));

            if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
                alert("Vui lòng nhập số nguyên dương!");
                break;
            }

            arr = [];
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = Number(prompt(`Nhập phần tử tại vị trí [${i}][${j}]: `));
                }
            }
            alert("Nhập mảng thành công!");
            break;

        case 2:
            if (arr.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }

            let result = "Mảng 2 chiều vừa nhập:\n";
            for (let i = 0; i < rows; i++) {
                result += arr[i].join("\t") + "\n";
            }
            alert(result);
            break;

        case 3:
            if (arr.length === 0) {
                alert("Mảng chưa được khởi tạo");
                break;
            }

            let sum = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    sum += arr[i][j];
                }
            }
            alert(`Tổng phần tử trong mảng là: ${sum}`);
            break;
        case 4:
            if (arr.length === 0) {
                alert("Mảng chưa được khởi tạo");
                break;
            }

            let maxValue = arr[0][0];
            let maxRow = 0, maxCol = 0;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (arr[i][j] > maxValue) {
                        maxValue = arr[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }

            alert(`Giá trị lớn nhất trong mảng là: ${maxValue} tại vị trí [${maxRow}][${maxCol}]`);
            break;
        case 5:
            if (arr.length === 0) {
                alert("Mảng chưa được khởi tạo");
                break;
            }

            let rowIndex = Number(prompt(`Nhập số hàng cần tính trung bình (0 đến ${rows - 1}):`));

            if (rowIndex < 0 || rowIndex >= rows || isNaN(rowIndex)) {
                alert("Hàng nhập không hợp lệ!");
                break;
            }

            let sum_avge = 0;
            for (let j = 0; j < cols; j++) {
                sum_avge += arr[rowIndex][j];
            }

            let avg = sum_avge / cols;
            alert(`Trung bình cộng của hàng ${rowIndex} là: ${avg}`);
            break;
        case 6:
            if (arr.length === 0) {
                alert("Mảng chưa được khởi tạo");
                break;
            }

            arr.reverse();

            alert("Mảng sau khi đảo ngược các hàng:\n" + arr.map(row => row.join("\t")).join("\n"));
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
