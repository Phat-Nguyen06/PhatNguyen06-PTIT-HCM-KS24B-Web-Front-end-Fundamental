let menu = `================== MENU ===================\n`
    + `1. Nhập chuỗi\n`
    + `2. Hiển thị chuỗi\n`
    + `3. Tính độ dài của chuỗi\n`
    + `4. Đếm số lần xuất hiện của một ký tự\n`
    + `5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n`
    + `6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n`
    + `7. Thoát\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn: `;

let str = "";
while (true) {
    let choice = Number(prompt(menu));

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi của bạn:");
            alert("Nhập chuỗi thành công!");
            break;

        case 2:
            if (str === "") {
                alert("Chuỗi chưa có dữ liệu!");
            } else {
                alert(`Chuỗi hiện tại: "${str}"`);
            }
            break;

        case 3:
            if (str === "") {
                alert("Chuỗi chưa có dữ liệu!");
            } else {
                alert(`Độ dài của chuỗi là: ${str.length}`);
            }
            break;

        case 4:
            if (str === "") {
                alert("Chuỗi chưa có dữ liệu!");
                break;
            }

            let charToCount = prompt("Nhập ký tự cần đếm:");
            if (!charToCount || charToCount.length !== 1) {
                alert("Vui lòng nhập một ký tự duy nhất!");
                break;
            }

            let count = 0;
            for (let char of str) {
                if (char === charToCount) {
                    count++;
                }
            }

            alert(`Ký tự '${charToCount}' xuất hiện ${count} lần trong chuỗi.`);
            break;

        case 5:
            if (str === "") {
                alert("Chuỗi chưa có dữ liệu!");
                break;
            }

            let reversedStr = str.split("").reverse().join("");
            if (str === reversedStr) {
                alert("Chuỗi này là chuỗi đối xứng!");
            } else {
                alert("Chuỗi này không phải là chuỗi đối xứng!");
            }
            break;

        case 6:
            if (str === "") {
                alert("Chuỗi chưa có dữ liệu!");
                break;
            }

            let capitalizedStr = str
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

            alert(`Chuỗi sau khi chuyển đổi: "${capitalizedStr}"`);
            break;

        case 7:
            alert("Hẹn gặp lại bạn!");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 7) {
        break;
    }
}
