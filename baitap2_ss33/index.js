let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' }
];

let category = document.getElementById("category");
function renderOption() {
    let text = `<option value="">-- Chọn danh mục --</option>`; // Thêm lựa chọn mặc định
    let categories = [...new Set(dish.map(item => item.category))];
    categories.forEach(cat => {
        text += `<option value="${cat}">${cat}</option>`; // Thêm danh mục vào select
    });

    category.innerHTML = text;
} 
