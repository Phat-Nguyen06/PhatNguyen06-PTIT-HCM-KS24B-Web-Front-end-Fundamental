let overall_backgound = document.getElementById("change-backgound");
let box = document.getElementsByClassName("box");

for(let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', () => {
        overall_backgound.style.backgroundColor = box[i].style.backgroundColor;
    })
}