let users = [];

function registerEmail() {
    let email = prompt("Nhập vào email muốn đăng ký:");

    if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".vn"))) {
        alert("Email không hợp lệ! Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
        return;
    }

    if (users.includes(email)) {
        alert("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        alert("Đăng ký thành công!");
    }
}

registerEmail();
