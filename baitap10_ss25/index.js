let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

let cart = [];
//--------------------------------------------------------
let menu = `================== MENU ===================\n`
    + `1. Xem danh sách sản phẩm có sẵn trong cửa hàng.\n`
    + `2. Chọn sản phẩm để mua bằng cách nhập tên sản phẩm.\n`
    + `3. Tính tổng tiền và hiển thị hóa đơn.\n`
    + `4. Thoát chương trình\n`
    + `\n============================================\n`
    + `\nLựa chọn của bạn:   `;

while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            showProducts();
            break;
        case 2:
            buyProduct();
            break;
        case 3:
            showCart();
        case 4:
            alert("Hẹn gặp lại bạn!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice == 4) {
        break;
    }
}

//---------------------------------------------------------
function showProducts() {
    let list = "Danh sách sản phẩm trong cửa hàng:\n";
    for (let i = 0; i < products.length; i++) {
        list += `${products[i][0]} - Số lượng: ${products[i][1]} - Giá: ${products[i][2]} VNĐ\n`;
    }
    alert(list);
}

function buyProduct() {
    let productName = prompt("Nhập tên sản phẩm bạn muốn mua (hoặc 'exit' để thoát):");
    
    if (productName.toLowerCase() === "exit") return false;

    let productIndex = -1;

    for (let i = 0; i < products.length; i++) {
        if (products[i][0] === productName) {
            productIndex = i;
            break;
        }
    }

    if (productIndex === -1) {
        alert("Sản phẩm không có trong cửa hàng!");
        return true;
    }

    if (products[productIndex][1] === 0) {
        alert("Sản phẩm đã hết hàng!");
        return true;
    }

    products[productIndex][1]--;

    let cartIndex = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][0] === productName) {
            cartIndex = i;
            break;
        }
    }

    if (cartIndex === -1) {
        cart.push([productName, 1, products[productIndex][2]]);
    } else {
        cart[cartIndex][1]++;
    }

    alert(`Bạn đã thêm ${productName} vào giỏ hàng!`);
    return true;
}

function showCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }

    let list = "Giỏ hàng của bạn:\n";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        list += `${cart[i][0]} - Số lượng: ${cart[i][1]} - Giá: ${cart[i][2]} VNĐ\n`;
        total += cart[i][1] * cart[i][2];
    }

    list += `\nTổng tiền: ${total} VNĐ`;
    alert(list);
}
