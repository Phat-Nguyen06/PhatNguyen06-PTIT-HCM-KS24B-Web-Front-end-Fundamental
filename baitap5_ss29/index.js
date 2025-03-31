let users = [];

function isValidEmail(email) {
    return email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));
}

function isValidPassword(password) {
    let hasUpperCase = false;
    let hasSpecialChar = false;
    let specialChars = "!@#$%^&*";
    
    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
        if (specialChars.includes(char)) {
            hasSpecialChar = true;
        }
    }
    
    return hasUpperCase && hasSpecialChar && password.length >= 6;
}

function register() {
    let email, password, name;
    while (true) {
        email = prompt("Nhập email (phải chứa '@' và kết thúc bằng .com hoặc .vn):");
        if (!isValidEmail(email)) {
            alert("Email không hợp lệ! Vui lòng nhập lại.");
            continue;
        }
        if (users.some(user => user.email === email)) {
            alert("Email đã tồn tại, vui lòng nhập email khác.");
            continue;
        }
        break;
    }

    while (true) {
        password = prompt("Nhập mật khẩu (ít nhất 6 ký tự, chứa ký tự đặc biệt và chữ hoa):");
        if (!isValidPassword(password)) {
            alert("Mật khẩu không hợp lệ! Vui lòng nhập lại.");
            continue;
        }
        break;
    }

    name = prompt("Nhập tên của bạn:");
    users.push({ name, email, password });
    alert("Đăng ký thành công!");
}

function login() {
    let email, password;
    while (true) {
        email = prompt("Nhập email để đăng nhập:");
        password = prompt("Nhập mật khẩu:");
        let user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert(`Đăng nhập thành công!\nTên: ${user.name}\nEmail: ${user.email}`);
            return;
        } else {
            alert("Sai email hoặc mật khẩu! Vui lòng thử lại.");
        }
    }
}

while (true) {
    let choice = prompt("Chọn chức năng:\n1. Đăng ký\n2. Đăng nhập\n3. Thoát");
    switch (choice) {
        case "1":
            register();
            break;
        case "2":
            login();
            break;
        case "3":
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
    if (choice === "3") break;
}
