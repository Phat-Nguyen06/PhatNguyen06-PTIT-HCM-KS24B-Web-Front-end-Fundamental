let arr_1 = [1, 4, 7, 8, 3];
let arr_2 = [9, 2, 6, 8,5];

let num_odd = 0;
let num_even = 0;

for (let i = 0; i < arr_1.length; i++) {
    if (arr_1[i] % 2 === 0) {
        num_even += arr_1[i];
    } else {
        num_odd += arr_1[i];
    }
}

alert(`Số lẻ trong mảng arr_1 là: ${num_odd}`);
alert(`Số chẵn trong mảng arr_1 là: ${num_even}`);