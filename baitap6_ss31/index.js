const form_login = document.getElementById("form-login-js");

form_login.addEventListener("submit", (event) => {
    event.preventDefault();

    let user = document.getElementById("user-js").value;
    let pass = document.getElementById("pass-js").value;

    if (user === "huanrose@gmail.com" && pass === "123456") {
        console.log("Thành công.");
    }
    else console.log("Thất bại!!");
});