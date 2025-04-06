function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Vui lòng nhập nhiệm vụ!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;
    li.classList.add("li-js");

    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

let btn_add = document.getElementById("btn-add-task");
btn_add.addEventListener("click", () => {
    addTask();
})