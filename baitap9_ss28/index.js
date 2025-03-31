let menu = `================== MENU ===================\n`
    + `1. Thêm sách mới.\n`
    + `2. Hiển thị danh sách sách.\n`
    + `3. Tìm kiếm sách theo tiêu đề.\n`
    + `4. Cập nhật trạng thái mượn/trả sách theo id sách.\n`
    + `5. Xóa sách theo id sách ra khỏi danh sách.\n`
    + `6. Sắp xếp sách theo giá tăng dần.\n`
    + `7. Thoát chương trình\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

library = [];
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            add_library_list();
            break;
        case 2:
            show_menu_library();
            break;
        case 3:
            search_by_title();
            break;
        case 4:
            Book_status();
            break;
        case 5:
            delete_by_id();
            break;
        case 6:
            ascending_price_order();
            break;
        case 7:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice == 7) {
        break;
    }
}

function add_library_list() {
    let id = Number(prompt("Nhập mã sách"));
    let title = prompt("Nhập tên sách");
    let author = prompt("Nhập tên tác giả");
    let year = prompt("Nhập năm xuất bản");
    let price = Number(prompt("Nhập giá sách"));
    let isAvailable = confirm("Lựa chọn trạng thái mượn sách: Đang mượn (OK) / Chưa mượn (Hủy)");

    library.push({ id, title, author, year, price, isAvailable });
    alert("Nhập thông tin sách thành công.");
}

function show_menu_library() {
    if (library.length === 0) {
        alert("Hiện không có sách nào!");
        return;
    }

    let itemsPerPage = 5;
    let currentPage = 1;
    let totalPages = Math.ceil(library.length / itemsPerPage);

    while (true) {
        let start = (currentPage - 1) * itemsPerPage;
        let end = start + itemsPerPage;
        let booksOnPage = library.slice(start, end);

        let resultText = `📖 Danh sách sách - Trang ${currentPage}/${totalPages}\n`;
        booksOnPage.forEach((curr, index) => {
            resultText += `\n${index + 1}. Mã: ${curr.id}, Tên: ${curr.title}, Giá: ${curr.price}, Trạng thái: ${curr.isAvailable ? "Đang mượn" : "Chưa mượn"}`;
        });

        resultText += `\n\nChọn:\n- Nhập 'n' để trang tiếp theo.\n- Nhập 'p' để trang trước.\n- Nhập số trang để chuyển nhanh.\n- Nhập 'q' để thoát.`;

        let input = prompt(resultText);

        if (input === 'n' && currentPage < totalPages) {
            currentPage++;
        } else if (input === 'p' && currentPage > 1) {
            currentPage--;
        } else if (!isNaN(input) && Number(input) >= 1 && Number(input) <= totalPages) {
            currentPage = Number(input);
        } else {
            break;
        }
    }
}

function find_library_by_name(in_name) {
    in_name = in_name.trim().toLowerCase();
    return library.filter((element) => element.title.toLocaleLowerCase().includes(in_name));
}

function find_library_by_id(in_id) {
    return library.find(library => library.id == in_id);
}

function search_by_title() {
    let index_title = prompt("Nhập vào tên sách muốn tìm kiếm");

    let edit_library = find_library_by_name(index_title);

    if (edit_library.length === 0) {
        alert(`Không tìm thấy tên sách ${index_title}`);
    }
    else {
        let resultText = "Sách tìm thấy\n+------------+--------------+-------------+-------------+-------------+\n";
        edit_library.forEach((curr) => {
            resultText += `Mã sách: ${curr.id}\nTên sách: ${curr.title}\nTác giá: ${curr.author}\nNăm xuất bản: ${curr.year}\nGiá: ${curr.price}\nTrạng thái: ${curr.isAvailable ? "Đang mượn" : "Chưa mượn"}\n+------------+--------------+-------------+-------------+-------------+\n`;
        });

        alert(resultText);
    }
}

function Book_status() {
    let index_id = prompt("Nhập vào ID sách cần cập nhật trạng thái").trim();
    let temp_library = find_library_by_id(index_id);

    if (temp_library) {
        let newStatus = confirm(`Sách "${temp_library.title}" hiện đang ở trạng thái: ${temp_library.isAvailable ? "Đang mượn" : "Chưa mượn"}\nBạn có muốn thay đổi trạng thái không?`);

        if (newStatus) {
            temp_library.isAvailable = !temp_library.isAvailable;
            alert(`Trạng thái của sách "${temp_library.title}" đã được cập nhật thành: ${temp_library.isAvailable ? "Đang mượn" : "Chưa mượn"}`);
        }
    } else {
        alert(`Không tìm thấy sách có ID: ${index_id}`);
    }
}

function delete_by_id() {
    let delete_id = prompt("Nhập vào ID sách muốn xóa").trim();

    let temp_library = find_library_by_id(delete_id);

    if (temp_library) {
        let confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sách có ID: ${delete_id}?`);
        if (confirmDelete) {
            library = library.filter(libra => libra.id != delete_id);
            alert(`ID ${delete_id} đã được xóa thành công.`);
        }
    } else {
        alert(`Không tìm thấy sách có ID: ${delete_id}`);
    }
}

function ascending_price_order() {
    library.sort((a, b) => Number(a.price) - Number(b.price));
    alert("Sắp xếp sách theo giá tăng dần thành công!");
}
