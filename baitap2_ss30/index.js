let library = {};
let cart = [];
let menu = `================== MENU ===================\n`
    + `1. Hiển thị danh sách sách theo thể loại.\n`
    + `2. Thêm sách mới vào kho.\n`
    + `3. Tìm kiếm sách theo tên hoặc id.\n`
    + `4. Mua sách.\n`
    + `5. Sắp xếp sách theo giá.\n`
    + `6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng.\n`
    + `7. Hiển thị tổng số lượng sách trong kho.\n`
    + `8. Thoát chương trình.\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

let menu2 = `===========TÌM KIẾM SÁCH===========\n`
    + `1. Tìm kiếm sách theo tên.\n`
    + `2. Tìm kiếm sách theo mã sách (ID).\n`
    + `3. Thoát\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

let menu3 = `===========TÌM KIẾM SÁCH===========\n`
    + `1. Sắp xếp tăng dần.\n`
    + `2. Sắp xếp giảm dần.\n`
    + `3. Thoát\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            show_all_books();
            break;
        case 2:
            add_new_book();
            break;
        case 3:
            book_search();
            break;
        case 4:
            buy_book();
            break;
        case 5:
            sort_by_price();
            break;
        case 6:
            calculate_cart_total();
            break;
        case 7:
            show_total_books();
            break;
        case 8:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ    , vui lòng nhập lại!");
    }
    if (choice === 8) break;
}

function add_new_book() {
    let category = prompt("Nhập vào thể loại của sách (Sách Bí ẩn, Sách trinh thám,...)").trim();
    let id = Number(prompt("Nhập vào mã sách (001,...)"));
    let name = prompt("Nhập vào tên sách").trim();
    let price = Number(prompt("Nhập vào giá sách"));
    if (isNaN(price) || price <= 0) {
        alert("Giá sách không hợp lệ!");
        return;
    }
    let quantity = Number(prompt("Nhập vào số lượng"));

    if (!library[category]) library[category] = [];
    library[category].push({ id, name, price, quantity })
    alert("Đã thêm thành công sách");
}

function show_all_books() {
    if (Object.keys(library).length == 0) {
        alert("Hiện tại không có sách nào!!!");
        return;
    }

    let library_text = "======DANH SÁCH THƯ VIỆN======\n";
    for (let categr in library) {
        library_text += `\n${categr}\n`;
        library[categr].forEach((element, index) =>
            library_text += `${index + 1}. Mã sách: ${element.id} - Tên sách: ${element.name} - Giá: ${element.price} - Số lượng: ${element.quantity}\n`);
    }

    alert(library_text);
}

function book_search() {
    while (true) {
        let choice_2 = Number(prompt(menu2));
        switch (choice_2) {
            case 1:
                let index_name = prompt("Mời bạn nhập vào tên cần tìm kiếm").trim();

                let results = [];
                for (let categr in library) {
                    library[categr].forEach((element) => {
                        if (element.name.toLowerCase().includes(index_name.toLowerCase())) {
                            results.push(`${categr}\nMã sách: ${element.id} - Tên sách: ${element.name} - Giá: ${element.price} - Số lượng: ${element.quantity}\n`)
                        }
                    });
                }
                alert(results.length > 0 ? results.join('\n\n') : `❌ Không tìm thấy sách có tên: "${index_name}"`);
                break;
            case 2:
                let index_id = Number(prompt("Mời bạn nhập vào id cần tìm kiếm"));

                let results_text = "";
                for (let categr in library) {
                    library[categr].forEach((element) => {
                        if (element.id === index_id) {
                            results_text += `Thể loại: ${categr}\nMã sách: ${element.id} - Tên sách: ${element.name} - Giá: ${element.price} - Số lượng: ${element.quantity}\n\n`;
                        }
                    });
                }
                alert(results_text ? results_text : `❌ Không tìm thấy sách với ID: ${index_id}`);

                break;
            case 3:
                alert("Thoát tìm kiếm!");
                break;
        }
        if (choice_2 == 3) break;
    }
}

function buy_book() {
    let index_id = Number(prompt("Nhập váo id sách cần mua."));

    let found_book = null;
    for (let category in library) {
        let book = library[category].find(element => element.id == index_id);
        if (book) {
            found_book = book;
            found_category = category;
            break;
        }
    }

    if (!found_book) {
        alert(`Không tìm thấy id ${index_id}`);
        return;
    }

    let quantity = Number(prompt(`Nhập số lượng muốn mua: (hàng tồn kho: ${found_book.quantity})`));

    if (isNaN(quantity) || quantity <= 0) {
        alert("Dữ liệu nhập vào không hợp lệ");
        return;
    }

    if (quantity > found_book.quantity) {
        alert("Số lượng sản phẩm không đủ!");
        return;
    }

    found_book.quantity -= quantity;
    let cart_item = cart.find(element => element.id == found_book.id);
    if (cart_item) {
        cart_item.quantity += quantity;
        cart_item.total_price += found_book.price * quantity;
        alert(`📚 Đã cập nhật giỏ hàng:\n- Tên sách: ${found_book.name}\n- Số lượng: ${cart_item.quantity}\n- Tổng giá: ${cart_item.total_price} VND`);
    } else {
        cart.push({
            id: found_book.id,
            name: found_book.name,
            price: found_book.price,
            total_price: found_book.price * quantity,
            quantity: quantity
        });
        alert(`📚 Đã thêm vào giỏ hàng:\n- Tên sách: ${found_book.name}\n- Số lượng: ${quantity}\n- Tổng giá: ${found_book.price * quantity} VND`);
    }
    
}

function sort_by_price() {
    while (true) {
        let choice_3 = Number(prompt(menu3));
        switch (choice_3) {
            case 1:
                for (let category in library) {
                    library[category].sort((a, b) => a.price - b.price);
                }
                alert("📚 Sắp xếp tăng dần thành công.");
                break;
            case 2:
                for (let category in library) {
                    library[category].sort((a, b) => b.price - a.price);
                }
                alert("Sắp xếp giảm dần thành công.");
                break;
            case 3:
                alert("Thoát tìm kiếm!");
                break;
        }
        if (choice_3 == 3) break;
    }
}

function calculate_cart_total() {
    if (cart.length === 0) {
        alert("🛒 Giỏ hàng trống!");
        return;
    }

    let cart_details = "=======🛒 Giỏ hàng của bạn=======\n";

    let total_quantity = 0;
    let total_price = 0;

    cart.forEach(element => {
        total_price += element.total_price;
        total_quantity += element.quantity;

        cart_details += `📚 Tên sách: ${element.name}\n`;
        cart_details += `   - Số lượng: ${element.quantity}\n`;
        cart_details += `   - Tổng giá: ${element.total_price} VND\n\n`;
    });

    cart_details += `===========================\n`;
    cart_details += `📦 Tổng số lượng sách: ${total_quantity}\n`;
    cart_details += `💰 Tổng tiền cần thanh toán: ${total_price} VND\n`;

    alert(cart_details);
}


function show_total_books() {
    if (Object.keys(library).length === 0) {
        alert("📚 Hiện tại kho sách trống!");
        return;
    }

    let totalBooks = 0;
    let stockDetails = "📦 Tổng số lượng sách trong kho:\n\n";

    for (let category in library) {
        let categoryTotal = library[category].reduce((sum, book) => sum + book.quantity, 0);
        totalBooks += categoryTotal;
        stockDetails += `📖 ${category}: ${categoryTotal} cuốn\n`;
    }

    stockDetails += `\n========================\n`;
    stockDetails += `📊 Tổng tất cả các sách: ${totalBooks} cuốn\n`;

    alert(stockDetails);
}
