let title = document.getElementById("font-size");
let btn_plus = document.getElementById("btn-plus");
let btn_minus = document.getElementById("btn-minus");
// Lấy kích thước hiện tại, nếu chưa có thì mặc định 16px
let currentSize = parseInt(window.getComputedStyle(title).fontSize);
// title.style.fontSize = 200 + "px";

btn_plus.addEventListener("click", () => {
    title.style.fontSize = (currentSize += 2) + "px"
});

btn_minus.addEventListener("click", () => {
    title.style.fontSize = (currentSize -= 2) + "px"
});
