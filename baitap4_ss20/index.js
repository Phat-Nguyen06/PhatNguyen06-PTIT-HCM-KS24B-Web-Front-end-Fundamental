let str = "Welcome to the world";
let index = prompt("Nhập từ cần tìm kiếm");

let length = str.length;
for (let i = 0; i < length; i++) {
    if(str[i] == index) {
        alert(`Tồn tại từ cần tìm kiếm`);
        break;
    }
    else if(i == length - 1){
        alert(`Không tồn tại từ cần tìm kiếm`);
    }
}