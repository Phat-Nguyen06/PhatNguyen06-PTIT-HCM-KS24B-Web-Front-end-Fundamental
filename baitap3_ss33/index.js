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
    let textOption = `<option value="">-- Chọn danh mục --</option>`;
    let categories = [...new Set(dish.map(item => item.category))];
    categories.forEach(cat => {
        textOption += `<option value="${cat}">${cat}</option>`;
    });

    category.innerHTML = textOption;
}

let dishList = document.getElementById("dishList");
function renderDish() {
    let textDish = ``;
    dish.forEach(dis => {
        textDish += `
        <li>
            <b>Tên đồ ăn: </b>${dis.name} - <b>Danh mục: </b>${dis.category} 
        </li>
        `
    });

    dishList.innerHTML = textDish;
}

function renderDishFilter() {
    let newTextDish = ``;
    dish.forEach((ele, i) => {
        if (category.value == ele.category) {
            newTextDish += `<li>
                <b>Tên đồ ăn: </b>${ele.name} - <b>Danh mục: </b>${ele.category} 
            </li>`
        }
    })

    dishList.innerHTML = newTextDish;
}

document.getElementById("btn-filter").addEventListener('click', () => {
    renderDishFilter();
})

renderDish();
renderOption();


