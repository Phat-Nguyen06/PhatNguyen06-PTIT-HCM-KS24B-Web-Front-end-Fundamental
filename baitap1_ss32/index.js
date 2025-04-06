let box_container = document.getElementById("container-box");
let btn_change = document.getElementById("btn-color-change");

btn_change.addEventListener("click", () => {
    let color = "#";
    const letters = "0123456789ABCDEF";
    for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    box_container.style.backgroundColor = color;
})
