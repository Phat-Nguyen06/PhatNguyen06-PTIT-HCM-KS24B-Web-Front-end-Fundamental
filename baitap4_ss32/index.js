let btn_check = document.getElementById("btn-check");
let message_valid = document.getElementById("message_valid");
let message_error = document.getElementById("message_error");

btn_check.addEventListener("click", () => {
    let email = document.getElementById("email").value.trim();

    message_valid.style.display = "none";
    message_error.style.display = "none";

    if ((email.endsWith(".com") || email.endsWith(".vn")) && email.includes("@")) {
        message_valid.style.display = "block";
    } else {
        message_error.style.display = "block";
    }
});
