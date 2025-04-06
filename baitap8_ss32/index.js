let tasks = [];

let btnAdd = document.querySelector(".btn-add");
let taskList = document.getElementById("taskList");

function renderTask() {
    let text = ``;

    tasks.forEach((task, index) => {
        text += `
            <li>
                <span>${task}</span>
                <div>
                    <button onclick="editTask(${index})">Sửa</button>
                    <button onclick="deleteTask(${index})">Xóa</button>
                </div>
            </li>
        `;
    });

    taskList.innerHTML = text;
}

function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput) {
        tasks.push(taskInput);
        renderTask();
        document.getElementById("taskInput").value = '';
    }
}

function editTask(index) {
    let newTask = prompt("Chỉnh sửa task:", tasks[index]);
    if (newTask !== null && newTask !== "") {
        tasks[index] = newTask;
        renderTask();
    }
}

function deleteTask(index) {
    if (confirm("Bạn có chắc muốn xóa task này không?")) {
        tasks = tasks.filter((_, i) => i !== index);
        renderTask();
    }
}

btnAdd.addEventListener('click', () => {
    addTask();
});

renderTask();
