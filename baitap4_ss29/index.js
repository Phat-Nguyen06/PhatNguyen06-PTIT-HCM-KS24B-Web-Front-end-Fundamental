let tasks = [];
let menu = `================== MENU ===================\n`
    + `1. Thêm công việc mới.\n`
    + `2. Hiển thị tất cả công việc.\n`
    + `3. Cập nhật trạng thái công việc theo ID.\n`
    + `4. Lọc công việc theo trạng thái.\n`
    + `5. Sắp xếp công việc theo trạng thái.\n`
    + `6. Thoát chương trình.\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            addTask();
            break;
        case 2:
            showAllTasks();
            break;
        case 3:
            updateTaskStatus();
            break;
        case 4:
            filterTasksByStatus();
            break;
        case 5:
            sortTasksByStatus();
            break;
        case 6:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
    if (choice === 6) break;
}

function addTask() {
    let id = tasks.length + 1;
    let name = prompt("Nhập tên công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let startTime = prompt("Nhập thời gian bắt đầu:");
    let status = "Chưa hoàn thành";

    tasks.push({ id, name, description, startTime, status });
    alert("Thêm công việc thành công!");
}

function showAllTasks() {
    if (tasks.length === 0) {
        alert("Không có công việc nào!");
        return;
    }
    let taskList = "Danh sách công việc:\n";
    tasks.forEach(task => {
        taskList += `ID: ${task.id} - ${task.name} (${task.status})\nMô tả: ${task.description}\nThời gian: ${task.startTime}\n----------------------\n`;
    });
    alert(taskList);
}

function updateTaskStatus() {
    let taskId = Number(prompt("Nhập ID công việc cần cập nhật trạng thái:"));
    let task = tasks.find(t => t.id === taskId);
    if (task) {
        task.status = task.status === "Chưa hoàn thành" ? "Hoàn thành" : "Chưa hoàn thành";
        alert("Cập nhật trạng thái thành công!");
    } else {
        alert("Không tìm thấy công việc!");
    }
}

function filterTasksByStatus() {
    let status = prompt("Nhập trạng thái cần lọc (Hoàn thành / Chưa hoàn thành):");
    let filteredTasks = tasks.filter(task => task.status === status);
    if (filteredTasks.length === 0) {
        alert("Không có công việc nào với trạng thái này!");
        return;
    }
    let result = `Công việc với trạng thái '${status}':\n`;
    filteredTasks.forEach(task => {
        result += `ID: ${task.id} - ${task.name} (${task.status})\n`;
    });
    alert(result);
}

function sortTasksByStatus() {
    tasks.sort((a, b) => a.status.localeCompare(b.status));
    alert("Đã sắp xếp công việc theo trạng thái!");
    showAllTasks();
}
