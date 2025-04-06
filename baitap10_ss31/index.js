let employeeList = [
    { id: 1, name: "Nguyễn Văn A", role: "Developer" },
    { id: 2, name: "Trần Thị B", role: "Designer" },
    { id: 3, name: "Phạm Văn C", role: "Project Manager" },
    { id: 4, name: "Lê Văn D", role: "Tester" },
    { id: 5, name: "Đỗ Thị E", role: "HR" },
    { id: 6, name: "Trương Minh F", role: "Marketing" }
];

let currentPage = 1;
const employeesPerPage = 3;

function renderTable() {
    let tableBody = document.querySelector("#table-employee tbody");
    tableBody.innerHTML = "";

    let start = (currentPage - 1) * employeesPerPage;
    let end = start + employeesPerPage;
    let employeesToShow = employeeList.slice(start, end);

    employeesToShow.forEach((emp, index) => {
        let row = `<tr>
            <td>${start + index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.role}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    renderPagination();
}

// Nút bấm thêm NV
document.getElementById("add-employee").addEventListener("click", () => {
    let name = document.getElementById("employee-name").value;
    let role = document.getElementById("employee-role").value;

    if (name && role) {
        employeeList.push({ id: employeeList.length + 1, name, role });
        document.getElementById("employee-name").value = "";
        document.getElementById("employee-role").value = "";
        renderTable();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
});

function renderPagination() {
    let paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = "";

    let totalPages = Math.ceil(employeeList.length / employeesPerPage);

    let prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous";
    prevBtn.disabled = currentPage === 1; // Chức năng nếu ở trang đầu thì nút bị vô hiệu hóa
    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
    paginationContainer.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        let pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        if (i === currentPage) {
            pageBtn.classList.add("active");
        }
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            renderTable();
        });
        paginationContainer.appendChild(pageBtn);
    }

    let nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
    paginationContainer.appendChild(nextBtn);
}

renderTable();
