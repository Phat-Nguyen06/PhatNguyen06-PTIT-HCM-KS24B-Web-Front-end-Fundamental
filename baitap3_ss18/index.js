let username = prompt("Nhập tên đăng nhập");
let pass;
if(username === "ADMIN") {
    pass = prompt("Nhập mật khẩu");
    if (pass === "TheMaster") {
        alert("Welcome.")
    }
    else if (pass === "") {
        alert("Cancelled.");
    }
    else {
        alert("Wrong password.");
    }
}
else if (username === "") {
    alert("Cancelled.");
}
else {
    alert("I Don’t know you.");
}