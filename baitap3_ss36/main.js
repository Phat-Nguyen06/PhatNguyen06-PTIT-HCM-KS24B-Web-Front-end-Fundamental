function color(str){
    let div = document.getElementById("container")
    div.style.backgroundColor = str
    localStorage.setItem("bgcl", str)
}

color(localStorage.getItem("bgcl"))