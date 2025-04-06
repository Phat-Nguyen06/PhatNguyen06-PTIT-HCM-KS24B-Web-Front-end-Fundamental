let box = document.getElementById("box-js");
let title = document.getElementById("title-js");
let content =  document.getElementById("content-js");
let btn = document.getElementById("btn-js");

btn.addEventListener('click', () => {
    if(box.style.backgroundColor == "white") {
        box.style.backgroundColor = "black";
        title.style.color = "white";
        content.style.color = "white";
    }
    else {
        box.style.backgroundColor = "white";
        title.style.color = "black";
        content.style.color = "black";
    }
})