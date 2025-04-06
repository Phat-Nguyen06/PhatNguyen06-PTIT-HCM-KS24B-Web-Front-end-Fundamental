let img_crocodile_big = document.getElementById("img-crocodile-big");
let img_snake_big = document.getElementById("img-snake-big");
let img_rabbit_big = document.getElementById("img-rabbit-big");

document.getElementById("img-crocodile").addEventListener("click", () => {
    img_crocodile_big.style.display = "flex";
})

img_crocodile_big.addEventListener("click", (event) => {
    if (event.target === img_crocodile_big) {
        img_crocodile_big.style.display = "none";
    }
});

document.getElementById("img-snake").addEventListener("click", () => {
    img_snake_big.style.display = "flex";
})

img_snake_big.addEventListener("click", (event) => {
    if (event.target === img_snake_big) {
        img_snake_big.style.display = "none";
    }
});

document.getElementById("img-rabbit").addEventListener("click", () => {
    img_rabbit_big.style.display = "flex";
})

img_rabbit_big.addEventListener("click", (event) => {
    if (event.target === img_rabbit_big) {
        img_rabbit_big.style.display = "none";
    }
});