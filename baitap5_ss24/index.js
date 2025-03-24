let menu = `================== MENU ===================\n`
    + `1. Nhập mảng 2 chiều\n`
    + `2. Hiển thị mảng 2 chiều\n`
    + `3. Tính tổng các phần tử trong mảng\n`
    + `4. Tính tổng đường chéo chính\n`
    + `5. Tính tổng đường chéo phụ\n`
    + `6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n`
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
                alert("Mảng chưa có dữ liệu!");
                break;
            }

            let sum = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    sum += arr[i][j];
                }
            }

            alert(`Tổng các phần tử trong mảng là: ${sum}`);
            break;

        case 4:
            if (arr.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }

            if (rows !== cols) {
                alert("Không thể tính tổng đường chéo chính vì mảng không phải ma trận vuông!");
                break;
            }

            let sumMainDiagonal = 0;
            for (let i = 0; i < rows; i++) {
                sumMainDiagonal += arr[i][i];
            }

            alert(`Tổng đường chéo chính là: ${sumMainDiagonal}`);
            break;

        case 5:
            if (arr.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }

            if (rows !== cols) {
                alert("Không thể tính tổng đường chéo phụ vì mảng không phải ma trận vuông!");
                break;
            }

            let sumSubDiagonal = 0;
            for (let i = 0; i < rows; i++) {
                sumSubDiagonal += arr[i][cols - 1 - i];
            }

            alert(`Tổng đường chéo phụ là: ${sumSubDiagonal}`);
            break;

        case 6:
            if (arr.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }

            let type = prompt("Bạn muốn tính trung bình cộng của (hàng/cột)? Nhập 'h' cho hàng, 'c' cho cột: ").toLowerCase();

            if (type === 'h') {
                let rowIndex = Number(prompt(`Nhập chỉ số hàng (0 - ${rows - 1}): `));
                if (isNaN(rowIndex) || rowIndex < 0 || rowIndex >= rows) {
                    alert("Chỉ số hàng không hợp lệ!");
                    break;
                }

                let rowSum = arr[rowIndex].reduce((acc, val) => acc + val, 0);
                let rowAvg = rowSum / cols;
                alert(`Trung bình cộng của hàng ${rowIndex} là: ${rowAvg}`);
            } 
            else if (type === 'c') {
                let colIndex = Number(prompt(`Nhập chỉ số cột (0 - ${cols - 1}): `));
                if (isNaN(colIndex) || colIndex < 0 || colIndex >= cols) {
                    alert("Chỉ số cột không hợp lệ!");
                    break;
                }

                let colSum = 0;
                for (let i = 0; i < rows; i++) {
                    colSum += arr[i][colIndex];
                }

                let colAvg = colSum / rows;
                alert(`Trung bình cộng của cột ${colIndex} là: ${colAvg}`);
            } 
            else {
                alert("Lựa chọn không hợp lệ!");
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
