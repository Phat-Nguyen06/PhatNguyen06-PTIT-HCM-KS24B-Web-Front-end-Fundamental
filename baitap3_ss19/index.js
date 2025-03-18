let input = prompt("Chọn 1 nếu bạn muốn đổi từ VND sang USD, chọn 2 nếu bạn muốn đổi từ USD sang VND");

let VND;
let USD;

if (input == 1) {
    VND = prompt("Nhập số tiền VND bạn muốn đổi sang USD");
    USD = VND / 23000;
    alert(`Số tiền sau khi đổi là: ${USD} USD`);
} else if (input == 2) {
    USD = prompt("Nhập số tiền USD bạn muốn đổi sang VND");
    VND = USD * 23000;
    alert(`Số tiền sau khi đổi là: ${VND} VND`);
} else {
    alert("Nhập sai cú pháp, vui lòng thử lại");
}

