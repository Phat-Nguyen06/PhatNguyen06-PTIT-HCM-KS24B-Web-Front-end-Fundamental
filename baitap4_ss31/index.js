let btn_open_modal = document.getElementById("open-modal-js");
let close_modal = document.getElementById("close-modal-js");
let menu_modal = document.getElementById("modal-js");
// console.log(close_modal);

btn_open_modal.addEventListener('click', () => {
    menu_modal.style.display = "flex";
});

close_modal.addEventListener('click', () => {
    menu_modal.style.display = "none";
});