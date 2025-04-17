let todoList = [
    {task: "hoc js"},
    {task: "hoc localstorage"}
]
todoList = JSON.parse(localStorage.getItem("listss4"))
showlist();
function showlist(){
    // reset danh sach ul
    let ul = document.getElementById("ul")
    ul.innerHTML =""
    todoList.forEach((Element, index)=>{
    
        // tao the li ben trong li co p va button
        let li = document.createElement("li");
        let p = document.createElement("p")
        let button = document.createElement("button")
        button.classList.add("delete")
        button.textContent = "xoa"
        p.textContent = Element.task;
        // them vao li
        li.appendChild(p)
        li.appendChild(button)
        // them li vao ul
        ul.appendChild(li);

        button.addEventListener("click" ,()=>{
            todoList = todoList.filter((member)=>{return member != Element})
            showlist();
        })
    })
}
function add(){
    let form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        let content = form.task.value;
        
        if(content!=""){
            let ob = {task:content};
            todoList.push(ob);
            showlist();
        }

        form.reset()
        let listss4 = JSON.stringify(todoList);
        localStorage.setItem("listss4", listss4);
    })
}
add();