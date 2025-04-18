let btnluu = document.getElementById("luu")
let count = 0
btnluu.addEventListener("click", ()=>{
    count++;
        if(count % 2===1){
            btnluu.textContent = "doi ten"
            let input = document.getElementById('input')
            if(input != ""){
                let p = document.getElementsByTagName("p")[0]
                p.textContent = `Xin chao, ${input.value}`
                
                input.classList.add('none')
            }else{
                alert("nhap ten cua ban")
            }
        }else{
            let input = document.getElementById('input')
            btnluu.textContent = "luu"
            input.classList.remove("none")
        }
})