let demo_title = document.getElementById("demo-title-js");
let btn_1 = document.getElementById("btn-hide-js");
let btn_2 = document.getElementById("btn-show-js");

btn_1.addEventListener('click', () => {
    demo_title.style.display = "none";
});

btn_2.addEventListener('click', () => {
    demo_title.style.display = "block";
});