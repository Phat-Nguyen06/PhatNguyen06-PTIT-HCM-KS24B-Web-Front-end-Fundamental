let employees = [
    { id: 1, name: "Nguyen van A", position: "Developer" },
    { id: 2, name: "Tran thi B", position: "Developer" },
    { id: 3, name: "Pham van C", position: "Developer" },
]

employees = JSON.parse(localStorage.getItem("employee-list"))
showlist();
function showlist() {
    let epl = JSON.stringify(employees)
    localStorage.setItem("employee-list", epl);

    // lay the tbody tu table 2 (danh sach nhan vien)
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = "";

    employees.forEach(Element => {
        console.log(Element);

        let tr = document.createElement("tr");
        for (let index in Element) {
            let td = document.createElement("td")
            td.textContent = Element[index]
            console.log(Element[index]);
            

            tr.appendChild(td)
        }
        tbody.appendChild(tr);
    })
}

function add() {
    let form = document.getElementsByTagName("form")[0]
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let ob = {}
        ob.id = employees.length + 1;
        ob.name = form.name.value;
        ob.position = form.position.value
        if (ob.name != "" && ob.position != "") {
            employees.push(ob);
            showlist()
        }else{
            alert("nhap vao them nhan vien")
        }
        form.reset();
    })

}
add();