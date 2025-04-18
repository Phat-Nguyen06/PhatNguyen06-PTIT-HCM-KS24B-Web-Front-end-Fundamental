let congviec = JSON.parse(localStorage.getItem('bangcongviec'))
/*
let congviec =  [{ten: "dev tool", tiendo: 2}, {ten: "bao cao", tiendo: 1}, {ten: "fix bug", tiendo: 1}]
*/
// ket suat du lieu ra man hinh
function render(list){
    let main = document.getElementsByTagName("main")[0]
    let html =""
    main.innerHTML = ""
    list.forEach((element, index) =>{
        html +=`
        <div>
            <h3>'${element.ten}'</h3> 
            <div class="board">
                <div class="column" id="pendingCol">
                    <h3>🕐 Chờ xử lý</h3>
                    <div id="pendingTasks">
                    <div class="task">
                            <p>Nội dung</p>
                            <button onclick="hclick(${index})" >Chuyển tiếp</button>
                        </div>
                    </div>
                </div>
                <div class="column" id="inProgressCol">
                    <h3>🔨 Đang làm</h3>
                    <div id="inProgressTasks">
                    <div class="task">
                            <p>Nội dung</p>
                            <button onclick="hclick(${index})">Chuyển tiếp</button>
                        </div>
                    </div>
                </div>
                <div class="column" id="doneCol">
                    <h3>✅ Hoàn thành</h3>
                    <div id="doneTasks">
                    <div class="task">
                    <p>Nội dung</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>`
    })
    main.innerHTML = html
    showHide(list)
}
// render ket suat ra cong viec
render(congviec)

function showHide(list){
    let id1 = document.querySelectorAll("#pendingTasks")
    let id2 = document.querySelectorAll("#inProgressTasks")
    let id3 = document.querySelectorAll("#doneTasks")
    console.log(id1, id2, id3);
    
    list.forEach((element, index)=>{
        if(element.tiendo == 1){
            id1[index].style.display = "block"
            id2[index].style.display = "none"
            id3[index].style.display = "none"
        } else if(element.tiendo === 2){
            id2[index].style.display = "block"
            id1[index].style.display = "none"
            id3[index].style.display = "none"
        }else{
            id3[index].style.display = "block"
            id2[index].style.display = "none"
            id1[index].style.display = "none"
        }
    })
}
showHide(congviec)


function hclick(x){
    congviec[x].tiendo +=1
    render(congviec)
    localStorage.setItem("bangcongviec", JSON.stringify(congviec))
}