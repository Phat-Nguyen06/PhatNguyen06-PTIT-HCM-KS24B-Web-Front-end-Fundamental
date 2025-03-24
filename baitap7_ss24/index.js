let menu = `================== MENU ===================\n`
    + `1. Nhập chuỗi\n`
    + `2. Hiển thị chuỗi\n`
    + `3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi\n`
    + `4. Đảo ngược chuỗi ký tự\n`
    + `5. Đếm số lượng từ trong chuỗi\n`
    + `6. Tìm kiếm và thay thế ký tự\n`
    + `7. Thoát\n`
    + `============================================\n`
    + `Lựa chọn của bạn: `;

let str = "";
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi: ") || "";
            alert("Chuỗi đã được nhập thành công!");
            break;
        case 2:
            alert(str ? `Chuỗi hiện tại: ${str}` : "Chưa có dữ liệu!");
            break;
        case 3:
            str = str.trim();
            alert("Chuỗi sau khi loại bỏ khoảng trắng: " + str);
            break;
        case 4:
            str = str.split("").reverse().join("");
            alert("Chuỗi sau khi đảo ngược: " + str);
            break;
        case 5:
            let wordCount = str.trim() ? str.trim().split(/\s+/).length : 0;
            alert("Số lượng từ trong chuỗi: " + wordCount);
            break;
        case 6:
            let charToFind = prompt("Nhập ký tự cần tìm: ");
            if (!charToFind || charToFind.length !== 1) {
                alert("Vui lòng nhập một ký tự duy nhất!");
                break;
            }
            if (!str.includes(charToFind)) {
                alert(`Không tìm thấy ký tự '${charToFind}' trong chuỗi!`);
                break;
            }
            let replaceChar = prompt("Nhập ký tự thay thế: ") || "";
            str = str.split(charToFind).join(replaceChar);
            alert("Chuỗi sau khi thay thế: " + str);
            break;
        case 7:
            alert("Hẹn gặp lại!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
    if (choice === 7) break;
}