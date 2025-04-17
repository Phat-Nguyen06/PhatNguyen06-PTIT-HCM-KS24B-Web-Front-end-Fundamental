let btn_submit = document.getElementById("btn-submit");

btn_submit.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    
    if (email === "" || !email.includes("@") || !(email.endsWith(".com") || email.endsWith(".vn"))) {
        alert("Email bạn nhập lỗi");
        return;
    }

    if (password.length < 8 || password === "") {
        alert("Nhập sai dữ liệu password");
        return;
    }

    if (confirm_password !== password) {
        alert("password nhập lại ko đúng");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Đăng ký thành công!");
});
