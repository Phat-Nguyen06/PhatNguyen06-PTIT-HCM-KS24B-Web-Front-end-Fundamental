let account = JSON.parse(localStorage.getItem("email"));
console.log(account);
console.log(account.pass);
console.log(account.email);


let form = document.getElementsByTagName("form")[0]
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let email = form.email.value;
    let pass = form.pass.value;
    console.log(email);
    console.log(pass);
    
    if(email != account.email || pass != account.pass){
        alert("nhap sai tai khoan hoac mat khau")
    } else{
        window.location.assign("https://www.facebook.com/")
    }
})