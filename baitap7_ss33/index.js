const products = [
    {
        id: 1,
        name: 'Điện thoại Samsung Galaxy A54',
        price: 7490000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg" alt="" class="product-img',
    },
    {
        id: 2,
        name: 'Laptop Dell Inspiron 15',
        price: 15990000,
        image: 'https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053',
    },
    {
        id: 3,
        name: 'Tai nghe AirPods Pro',
        price: 4990000,
        image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836',
    },
    {
        id: 4,
        name: 'Đồng hồ thông minh Apple Watch',
        price: 8990000,
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA',
    },
    {
        id: 5,
        name: 'Máy ảnh Canon EOS M50',
        price: 12490000,
        image: 'https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg',
    },
    {
        id: 6,
        name: 'Loa Bluetooth JBL Flip 5',
        price: 2190000,
        image: 'https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910',
    },
    {
        id: 7,
        name: 'MBàn phím cơ Logitech G Pro',
        price: 2490000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s',
    },
    {
        id: 8,
        name: 'Chuột không dây Logitech MX Master',
        price: 1890000,
        image: 'https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png',
    }
];
let cart = [];
let productList = document.querySelector(".product-grid-js");
let cartList = document.getElementById("cart-items");
let cartTotalEl = document.querySelector(".cart-total-js");
let checkout_btn = document.querySelector(".checkout-btn");

function renderProductAll() {
    let textProduct = "";

    products.forEach(product => {
        textProduct += `
        <div class="product-item">
            <img src="${product.image}" alt="" class="product-img">
            <h4 class="product-title">${product.name}</h4>
            <p class="product-price">${product.price.toLocaleString("vi-VN")}₫</p>
            <button class="add-to-cart-btn" onclick="addCart(${product.id})">Thêm vào giỏ hàng</button>
        </div>
        `
    });

    productList.innerHTML = textProduct;
}

function addCart(productId) {
    const index = cart.findIndex(p => p.id == productId);
    if(index != -1) {
        cart[index].quantity += 1
    }
    else {
        let product = products.find(p => p.id == productId);
        cart.push({...product, quantity: 1});
    }
    renderCart();
}

let total = 0;
function renderCart() {
    cartList.innerHTML = ""; // Xóa hết trước khi render lại
    total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = `<div class="empty-cart">Giỏ hàng trống</div>`;
        cartTotalEl.textContent = "Tổng: 0₫";
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-items animate-add";

        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString("vi-VN")}₫ x ${item.quantity}</div>
            </div>
            <div class="quantity-controls">
                <button class="decrease-btn" onclick="changeQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="increase-btn" onclick="changeQuantity(${index}, 1)">+</button>
                <button class="remove" onclick="removeItem(${index})">X</button>
            </div>
        `;

        cartList.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotalEl.textContent = `Tổng: ${total.toLocaleString("vi-VN")}₫`;
}



function changeQuantity(index, amount) {
    cart[index].quantity += amount;
    if(cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    renderCart();
}

function removeItem(index) {
    const cartItems = cartList.querySelectorAll(".cart-items");
    const itemToRemove = cartItems[index];

    if (itemToRemove) {
        itemToRemove.classList.add("animate-remove");

        // Sau khi animation kết thúc, mới xóa khỏi mảng và render lại
        itemToRemove.addEventListener("animationend", () => {
            cart.splice(index, 1);
            renderCart();
        });
    }
}

checkout_btn.addEventListener('click', () => {
    alert(`Tổng số tiền mua: ${total.toLocaleString('vi-VN')}₫`);

    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    cart = [];

    renderCart();
})

renderCart();
renderProductAll();

