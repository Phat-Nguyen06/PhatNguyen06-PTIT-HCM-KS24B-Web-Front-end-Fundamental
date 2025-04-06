const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/334442/lenovo-ideapad-slim-3-15irh10-i5-83k1000hvn-638775478046964172-600x600.jpg',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/332234/TimerThumb/realme-c75-8gb-128gb-(18).jpg',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://cdn.tgdd.vn/Products/Images/522/322134/TimerThumb/samsung-galaxy-tab-s6-lite-2024-(16).jpg',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/54/332455/tai-nghe-tws-jbl-wave-beam-2-150125-100004-092-600x600.jpg',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://cdn.tgdd.vn/Products/Images/7077/335516/xiaomi-watch-s4-den-tn-600x600.jpg',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://cdn.tgdd.vn/Products/Images/2162/304547/loa-bluetooth-monster-sparkle-thumb-5-600x600.jpg',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    }
];

let category_list = document.querySelector(".category-list");

function renderProducts(list = products) {
    let textProduct = ``;
    list.forEach((product) => {
        textProduct += `
        <div class="category-item">
            <img src="${product.image}" alt="latop" class="category-image">
            <h4 class="title-category">${product.name}</h4>
            <p class="category-content">${product.description}</p>
            <p class="category-price">${product.price.toLocaleString('vi-VN')} VNĐ</p>
            <button class="btn-buy-category">Buy</button>
        </div>
        `;
    });

    category_list.innerHTML = textProduct;
}

function searchProduct() {
    let search_value = document.getElementById("search-item").value.trim().toLowerCase();

    if (search_value !== "") {
        let filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(search_value)
        );
        renderProducts(filteredProducts);
    } else {
        renderProducts();
    }
}

document.getElementById("btn-search").addEventListener('click', searchProduct);
// document.getElementById("search-item").addEventListener('input', searchProduct);

renderProducts();
