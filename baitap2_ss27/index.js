let menu = `=== MENU QUẢN LÝ SINH VIÊN ===\n`
    + `1. Nhập danh sách sinh viên.\n`
    + `2. Hiển thị danh sách sinh viên.\n`
    + `3. Tìm sinh viên theo tên.\n`
    + `4. Xóa sinh viên khỏi danh sách.\n`
    + `5. Thoát.\n`
    + `\n============================================\n`
    + `\nNhập lựa chọn (1-5):   `;

let students = [];
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            addNewStudent();
            break;
        case 2:
            showStudentList();
            break;
        case 3:
            find_name();
            break;
        case 4:
            delete_student();
            break;
        case 5:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice == 5) {
        break;
    }
}

function addNewStudent() {
    let input_name = prompt("Nhập vào tên học sinh đầy đủ:");

    if (!isNaN(input_name)) {
        alert("Nhập sai dữ liệu! Hãy nhập tên hợp lệ.");
        return;
    }

    let nameParts = input_name.trim().split(" ");

    if (nameParts.length < 3) {
        alert("Vui lòng nhập đầy đủ họ, đệm và tên.");
        return;
    }
    else if (input_name.split("").some(char => !isNaN(char) && char !== " ")) {
        alert("Vui lòng không nhập kí tự số trong chuỗi!!!");
        return;
    }

    students.push(input_name);
}

function showStudentList() {
    if (students.length === 0) {
        alert("Danh sách sinh viên đang trống!");
        return;
    }

    let studentText = "Danh sách sinh viên:\n";
    for (let i = 0; i < students.length; i++) {
        studentText += `${i + 1}. Tên sinh viên: ${students[i]}\n`;
    }

    alert(studentText);
}

function find_name() {
    let searchName = prompt("Nhập tên sinh viên cần tìm:").trim().toLowerCase();

    let results = students.filter(s => s.toLowerCase().includes(searchName));

    if (results.length > 0) {
        alert("Danh sách sinh viên tìm thấy:\n" + results.join("\n"));
    } else {
        alert("Không tìm thấy sinh viên!");
    }
}

function delete_student() {
    let delete_name = prompt("Nhập tên sinh viên cần xóa:").trim();
    let check = false;
    let newStudents = [];

    for (let i = 0; i < students.length; i++) {
        if (delete_name == students[i]) {
            check = true;
        }
        else newStudents.push(students[i]);
    }

    if (check) {
        students = newStudents;
        alert(`Xóa thành công sinh viên ${delete_name}`);
    } else {
        alert(`Không tồn tại sinh viên với tên = ${delete_name}`);
    }
}


