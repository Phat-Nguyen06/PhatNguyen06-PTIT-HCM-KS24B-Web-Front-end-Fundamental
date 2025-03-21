let n = Number(prompt("Nhập số lượng của mảng: "));
let arr_number = [];

for (let i = 0; i < n; i++) {
  arr_number.push(Number(prompt(`Nhập phần tử thứ ${i + 1}: `)));
}

let max_arr = arr_number[0];
let flag = -1;
for (let i = 1; i < n; i++) {
    if(arr_number[i] > max_arr){
        max_arr = arr_number[i];
        flag = i;
    }
}

if(arr_number.length === 0){
    alert("Không có số lớn nhất");
}
else{
    alert(`Số lớn nhất: ${max_arr}
Vị trí: ${flag}`);
}