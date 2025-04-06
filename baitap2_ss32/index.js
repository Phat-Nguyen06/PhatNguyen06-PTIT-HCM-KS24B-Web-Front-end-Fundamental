let container = document.getElementById("container-js");
let btn = document.getElementById("btn");
let count = 0;

let render_count = document.createElement("p");
render_count.innerHTML = `Số lần bấm ${count}`;
container.appendChild(render_count);

btn.addEventListener("click", () => {
    count++;
    render_count.innerHTML = `Số lần bấm ${count}`;
});