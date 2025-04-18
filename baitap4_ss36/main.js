let sun = document.getElementById("mode-icon")
console.log(sun);
let count;
let body = document.getElementsByTagName("body")[0]
addRemove()
function addRemove(){
    count = JSON.parse(localStorage.getItem("countDarkMode"))
    console.log(count);
    if(count % 2 === 1){
        body.classList.add("dark-mode")
    }else{
        body.classList.toggle("dark.mode")
    }
}
function togglerun(){
    body.classList.toggle("dark-mode")
}
function tang(){
    count++;
    localStorage.setItem("countDarkMode", JSON.stringify(count))
}

function runall(){
    togglerun()
    tang();
}