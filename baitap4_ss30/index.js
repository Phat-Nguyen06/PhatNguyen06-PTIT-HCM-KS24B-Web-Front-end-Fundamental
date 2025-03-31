let courses = [];
let users = [];

let mainMenu = `================== MENU ===================\n`
    + `1. Quản lý khóa học\n`
    + `2. Quản lý người dùng\n`
    + `3. Thoát chương trình\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

let courseMenu = `===========QUẢN LÝ KHÓA HỌC===========\n`
    + `1. Thêm khóa học\n`
    + `2. Tìm kiếm khóa học\n`
    + `3. Xóa khóa học\n`
    + `4. Thoát\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

let userMenu = `===========QUẢN LÝ NGƯỜI DÙNG===========\n`
    + `1. Thêm người dùng mới\n`
    + `2. Đăng ký khóa học\n`
    + `3. Hủy đăng ký khóa học\n`
    + `4. Hiển thị danh sách khóa học của một người dùng\n`
    + `5. Thoát\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

while (true) {
    let choice = Number(prompt(mainMenu));
    switch (choice) {
        case 1:
            manageCourses();
            break;
        case 2:
            manageUsers();
            break;
        case 3:
            alert("Hẹn gặp lại!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
    if (choice === 3) break;
}

function manageCourses() {
    while (true) {
        let choice = Number(prompt(courseMenu));
        switch (choice) {
            case 1:
                addCourse();
                break;
            case 2:
                searchCourse();
                break;
            case 3:
                deleteCourse();
                break;
            case 4:
                alert("Thoát quản lý khóa học!");
                return;
        }
    }
}

function addCourse() {
    let id = Number(prompt("Nhập ID khóa học:"));
    let name = prompt("Nhập tên khóa học:").trim();
    let instructor = prompt("Nhập tên giảng viên:").trim();
    courses.push({ id, name, instructor, students: [] });
    alert("📚 Đã thêm khóa học thành công!");
}

function searchCourse() {
    let name = prompt("Nhập tên khóa học cần tìm:").trim().toLowerCase();
    let results = courses.filter(course => course.name.toLowerCase().includes(name));
    alert(results.length > 0 ? results.map(c => `${c.id} - ${c.name} - ${c.instructor}`).join("\n") : "Không tìm thấy khóa học!");
}

function deleteCourse() {
    let id = Number(prompt("Nhập ID khóa học cần xóa:"));
    courses = courses.filter(course => course.id !== id);
    users.forEach(user => {
        user.registeredCourses = user.registeredCourses.filter(courseId => courseId !== id);
    });
    alert("📚 Đã xóa khóa học và cập nhật danh sách người dùng!");
}

function manageUsers() {
    while (true) {
        let choice = Number(prompt(userMenu));
        switch (choice) {
            case 1:
                addUser();
                break;
            case 2:
                registerCourse();
                break;
            case 3:
                unregisterCourse();
                break;
            case 4:
                showUserCourses();
                break;
            case 5:
                alert("Thoát quản lý người dùng!");
                return;
        }
    }
}

function addUser() {
    let id = Number(prompt("Nhập ID người dùng:"));
    let name = prompt("Nhập tên người dùng:").trim();
    users.push({ id, name, registeredCourses: [] });
    alert("👤 Đã thêm người dùng mới!");
}

function registerCourse() {
    let userId = Number(prompt("Nhập ID người dùng:"));
    let user = users.find(u => u.id === userId);
    if (!user) {
        alert("Người dùng không tồn tại!");
        return;
    }
    let courseId = Number(prompt("Nhập ID khóa học muốn đăng ký:"));
    let course = courses.find(c => c.id === courseId);
    if (!course) {
        alert("Khóa học không tồn tại!");
        return;
    }
    if (!user.registeredCourses.includes(courseId)) {
        user.registeredCourses.push(courseId);
        course.students.push(userId);
        alert("✅ Đăng ký khóa học thành công!");
    } else {
        alert("⚠ Bạn đã đăng ký khóa học này rồi!");
    }
}

function unregisterCourse() {
    let userId = Number(prompt("Nhập ID người dùng:"));
    let user = users.find(u => u.id === userId);
    if (!user) {
        alert("Người dùng không tồn tại!");
        return;
    }
    let courseId = Number(prompt("Nhập ID khóa học muốn hủy đăng ký:"));
    if (!user.registeredCourses.includes(courseId)) {
        alert("⚠ Bạn chưa đăng ký khóa học này!");
        return;
    }
    user.registeredCourses = user.registeredCourses.filter(id => id !== courseId);
    let course = courses.find(c => c.id === courseId);
    if (course) {
        course.students = course.students.filter(id => id !== userId);
    }
    alert("❌ Hủy đăng ký khóa học thành công!");
}

function showUserCourses() {
    let userId = Number(prompt("Nhập ID người dùng:"));
    let user = users.find(u => u.id === userId);
    if (!user) {
        alert("Người dùng không tồn tại!");
        return;
    }
    let registered = courses.filter(c => user.registeredCourses.includes(c.id));
    alert(registered.length > 0 ? registered.map(c => `${c.id} - ${c.name}`).join("\n") : "Bạn chưa đăng ký khóa học nào!");
}
