let pass = prompt("Nhập vào mật khẩu");

function isStrongPassword(password) {
    if (password.length < 8) {
        alert("Không đủ 8 kí tự");
        return;
    }
    let uppercase = false;
    let lowercase = false;
    let is_number = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "a" && password[i] <= "z") lowercase = true;
        if (password[i] >= "A" && password[i] <= "Z") uppercase = true;
        if (password[i] >= "0" && password[i] <= "9") is_number = true;

    }

    if (uppercase && lowercase && is_number) {
        return true;
    }
    else return false
}

alert(isStrongPassword(pass));