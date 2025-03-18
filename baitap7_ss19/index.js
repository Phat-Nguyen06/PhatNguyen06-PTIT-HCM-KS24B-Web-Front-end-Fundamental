let num_1 = Number(prompt("Nhập số thứ nhất: "));
let num_2 = Number(prompt("Nhập số thứ hai: "));
let num_3 = Number(prompt("Nhập số thứ ba: "));

num_1 > num_2 && num_1 > num_3 ? alert("Số lớn nhất là: " + num_1) : num_2 > num_3 ? alert("Số lớn nhất là: " + num_2) : alert("Số lớn nhất là: " + num_3);