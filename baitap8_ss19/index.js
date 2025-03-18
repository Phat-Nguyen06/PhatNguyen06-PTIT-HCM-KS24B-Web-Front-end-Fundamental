let thang = Number(prompt("Nhập vào tháng: "));

switch (thang) {
    case 1: case 2: case 3:
        alert("Tháng " + thang + " là mùa xuân");
        break;
    case 4: case 5: case 6:
        alert("Tháng " + thang + " là mùa hè");
        break;
    case 7: case 8: case 9:
        alert("Tháng " + thang + " là mùa thu");
        break;
    case 10: case 11: case 12:
        alert("Tháng " + thang + " là mùa đông");
        break;
    default:
        alert("Tháng không hợp lệ");
        break;
}