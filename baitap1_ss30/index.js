let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let cart = [];

function showProductsByCategory() {
    let categories = {};
    products.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });
    
    let message = "Danh sách sản phẩm theo danh mục:\n";
    for (let category in categories) {
        message += `\n${category}:\n`;
        categories[category].forEach(p => {
            message += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Số lượng: ${p.quantity}\n`;
        });
    }
    alert(message);
}

function buyProduct() {
    let productId = Number(prompt("Nhập ID sản phẩm muốn mua:"));
    let product = products.find(p => p.id === productId);
    
    if (!product) {
        alert("Sản phẩm không tồn tại!");
        return;
    }
    
    let quantity = Number(prompt("Nhập số lượng muốn mua:"));
    if (quantity > product.quantity) {
        alert("Số lượng sản phẩm không đủ!");
        return;
    }
    
    product.quantity -= quantity;
    let cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    alert("Thêm vào giỏ hàng thành công!");
}

function sortProductsByPrice(order) {
    if (order === "asc") {
        products.sort((a, b) => a.price - b.price);
    } else {
        products.sort((a, b) => b.price - a.price);
    }
    showProductsByCategory();
}

function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Tổng tiền cần thanh toán: ${total} VND`);
}

while (true) {
    let choice = prompt(
        "Chọn chức năng:\n" +
        "1. Hiển thị sản phẩm theo danh mục\n" +
        "2. Chọn sản phẩm để mua\n" +
        "3. Sắp xếp sản phẩm theo giá (1: Tăng dần, 2: Giảm dần)\n" +
        "4. Tính số tiền thanh toán\n" +
        "5. Thoát"
    );
    
    switch (choice) {
        case "1":
            showProductsByCategory();
            break;
        case "2":
            buyProduct();
            break;
        case "3":
            let order = prompt("Nhập 1 để sắp xếp tăng dần, 2 để sắp xếp giảm dần:");
            sortProductsByPrice(order === "1" ? "asc" : "desc");
            break;
        case "4":
            calculateTotal();
            break;
        case "5":
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
    
    if (choice === "5") break;
}