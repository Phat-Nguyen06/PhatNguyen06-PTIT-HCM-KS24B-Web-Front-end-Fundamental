let num_arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let check_num = prompt("Nhập số cần kiểm tra: ");
let count = 0;
if(isNaN(check_num)){
    console.log("Đây không phải là số");
}else{
    for(let i = 0; i < num_arr.length; i++){
        if(num_arr[i] == check_num){
            count++;
        }
    }
    console.log(`Số ${check_num} xuất hiện ${count} lần trong mảng`);
}