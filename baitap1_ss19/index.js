let thang = Number(prompt("Nhập vào tháng số bất kỳ: "));
let so_ngay;
switch (thang) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        so_ngay = "có 31 ngày"
        break;
    case 4: case 6: case 9: case 11:
        so_ngay = "có 30 ngày"
        break;
    case 2:
        so_ngay = "có 28 hoặc 29 ngày năm nhuận"
        break;
    default:
        so_ngay = "không hợp lệ"
        break;
}

console.log(`Tháng ${thang} ${so_ngay}`);