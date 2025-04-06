document.querySelector(".toggle-password").addEventListener('click', () => {
    let pass = document.getElementById("password");

    if(pass.type == "password") {
        pass.type = "text";
    }
    else {
        password.type = "password";
    }
});

