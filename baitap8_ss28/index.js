let menu = `================== MENU ===================\n`
    + `1. Thêm nhân viên mới.\n`
    + `2. Hiện thị danh sách nhân viên.\n`
    + `3. Xóa nhân viên theo id.\n`
    + `4. Cập nhật mức lương của nhân viên theo id.\n`
    + `5. Tìm kiếm nhân viên theo tên.\n`
    + `6. Thoát chương trình\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

let staffs = [];
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            add_staff();
            break;
        case 2:
            show_staff_list();
            break;
        case 3:
            delete_staff_id();
            break;
        case 4:
            update_salary();
            break;
        case 5:
            search_name();
            break;
        case 6:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice == 6) {
        break;
    }
}

function add_staff() {
    let id = prompt("Nhập vào id nhân viên");
    let name = prompt("nhập vào tên nhân viên");
    let position = prompt("Nhập vào chức vụ của nhân viên");
    let salary = prompt("Nhập vào lương của nhân viên");

    staffs.push({ id, name, position, salary });
    alert("Thêm thành công nhân viên");
}

function show_staff_list() {
    if (staffs.length === 0) {
        alert("Hiện không có nhân viên nào!!!");
        return;
    }

    let staff_text = "";
    staffs.forEach((curr) => {
        staff_text += (`ID: ${curr.id}. Tên nhân viên: ${curr.name} - Chức vụ: ${curr.position} - Lương: ${curr.salary}\n`);
    });

    alert(staff_text);
}

function find_staff_by_id(id) {
    return staffs.find(staff => staff.id === id);
}

function delete_staff_id() {
    if (staffs.length === 0) {
        alert("Hiện không có nhân viên nào!!!");
        return;
    }
    let id_delete = prompt("Hãy nhập ID nhân viên cần xóa");

    let staff = find_staff_by_id(id_delete);
    if (staff) {
        let confirmDelete = confirm(`Bạn có chắc chắn muốn xóa nhân viên ${staff.name}?`);
        if (confirmDelete) {
            staffs = staffs.filter(staff => staff.id !== id_delete);
            alert("Nhân viên đã được xóa.");
        }
    } else {
        alert(`Không tìm thấy nhân viên với ID: ${id_delete}`);
    }
}

function update_salary() {
    if (staffs.length === 0) {
        alert("Hiện không có nhân viên nào!!!");
        return;
    }

    let input_id = prompt("Hãy nhập ID nhân viên cần cập nhật lương");

    let staff = find_staff_by_id(input_id);
    if(staff) {
        let newSalary = prompt(`Nhập vào mức lương mới của của nhân viên: ${staff.name}`);

        staff.salary = newSalary;
        alert(`Cập nhật mức lương ${newSalary} cho nhân viên ${staff.name} thành công`);
    }
    else {
        alert(`Không tìm thấy nhân viên với ID: ${input_id}`);
    }
}

function search_name() {
    let input_name = prompt("Nhập vào tên nhân viên cần tìm kiếm").trim().toLowerCase();
    
    let temp_name = staffs.filter((staff) => staff.name.toLowerCase().includes(input_name));

    if (temp_name.length === 0) {
        alert("Không tìm thấy nhân viên nào!");
        return;
    }

    let resultText = "Nhân viên tìm thấy:\n";
    temp_name.forEach((staff) => {
        resultText += `ID: ${staff.id} - Tên: ${staff.name} - Chức vụ: ${staff.position} - Lương: ${staff.salary}\n`;
    });

    alert(resultText);
}