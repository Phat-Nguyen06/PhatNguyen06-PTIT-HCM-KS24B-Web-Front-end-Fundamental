let todolist = [
  { id: 1, task: "task1" },
  { id: 2, task: "task2" },
  { id: 4, task: "task3" },
  { id: 3, task: "task4" },
];

todolist = JSON.parse(localStorage.getItem("taskList"));

function showlist() {
  // luu vao localStorage
  let task = JSON.stringify(todolist);
  localStorage.setItem("taskList", task);
  
  // lay ra the ul
  let ul = document.getElementById("myUL");
  ul.innerHTML = ""; // reset ul
  todolist.forEach((Element, index) => {
    // tao the li them class va them noi dung
    let li = document.createElement("li");
    li.classList.add("task");
    li.textContent = Element.task;
    ul.appendChild(li);

    // tao the button xoa sua them class va them va noi dung
    let btnxoa = document.createElement("button");
    btnxoa.classList.add("xoa");
    btnxoa.textContent = "xoa";

    let btnsua = document.createElement("button");
    btnsua.classList.add("sua");
    btnsua.textContent = "sua";
    //tao the div them vao btn
    let div = document.createElement("div");
    li.appendChild(div);
    div.appendChild(btnsua);
    div.appendChild(btnxoa);

    btnxoa.addEventListener("click", () => {
      let kiemtra = confirm("ban co muon xoa chu");
      if (kiemtra) {
        todolist = todolist.filter((member) => {
          return member.id !== Element.id;
        });
        showlist();
      }
    });
    // bam vao su yeu cau nhap vao van ban sua
    btnsua.addEventListener("click", () => {
      let contentEdit = window.prompt("nhap vao noi dung sua task", Element.task);
      todolist[index].task = contentEdit;
      showlist();
    });
  });
}
showlist();

function addNewTaskTo_ToDoList() {
  let input = document.getElementById("input");
  let btn = document.getElementsByClassName("them")[0];
  btn.addEventListener("click", () => {
    let content = input.value;
    if (content != "") {
      let ob = {};
      ob.id = Math.round(Math.random() * 10000000000);
      ob.task = content;
      todolist.push(ob);
      input.value = "";
      showlist();
    }
  });
}
addNewTaskTo_ToDoList();
