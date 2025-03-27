let arr = [1, 2, 3, 4, 5];

let square_arr = arr.map((element) => Math.pow(element, 2));
console.log(square_arr.filter((element) => element % 2 == 0));