let courses = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm thì',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci ớt ớt',
    },
];
courses = JSON.parse(localStorage.getItem("list"));





showlist();
// function show danh sach courses
function showlist() {
    // khoi tao cac the de show danh sach
    let table = document.getElementsByTagName("table")[0];
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""

    // duyet qua tung phan tu theo courses
    for (let i = 0; i < courses.length; i++) {

        // tao the tr va fan cac the td noi dung
        let tr = document.createElement("tr")
        tr.classList.add("tr-td");

        for (let member in courses[i]) {

            // tao the td
            let td = document.createElement("td");
            td.textContent = courses[i][member]


            // them td vao tr
            tr.appendChild(td)
        }

        // tao the td chua button sua va xoa
        let td = document.createElement("td")
        let btnSua = document.createElement("button");
        btnSua.classList.add("sua")
        let btnXoa = document.createElement("button");
        btnXoa.classList.add("xoa")
        btnXoa.textContent = "xoa"
        btnSua.textContent = "sua"

        btnSua.addEventListener("click", () => {
            courses[i].content = window.prompt("sua content",courses[i].content)
            courses[i].dueDate = window.prompt("sua date",courses[i].date)
            courses[i].status = window.prompt("sua status",courses[i].status)
            courses[i].assignedTo = window.prompt("sua username",courses[i].assignedTo)
            showlist();
        })
        btnXoa.addEventListener("click", () => {
            let check = confirm("ban muon xoa no chu");
            if(check === true){
                courses.splice(i,1);
                showlist();
            }
            
        })


        td.appendChild(btnSua)
        td.appendChild(btnXoa)
        // them the td sua xoa vao tr
        tr.appendChild(td)

        // them tr vao td
        tbody.appendChild(tr);
    }
    let list_courses = JSON.stringify(courses)
    localStorage.setItem("list" , list_courses);
}

function add(){
    let form = document.getElementsByClassName("form")[0];
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        let ob = {};
        ob.id = courses.length+1;
        ob.content = form.content.value;
        ob.dueDate = form.date.value;
        ob.assignedTo= form.choose.value;
        ob.status = form.Username.value;
        if(ob.content !='' && ob.dueDate != '' && ob.status != '' && ob.assignedTo != ''){
            courses.push(ob)
            showlist();
        }
        form.reset();
    })
}
add();