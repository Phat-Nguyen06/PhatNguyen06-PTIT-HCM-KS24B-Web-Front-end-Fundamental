let n = Number(prompt("Nhập vào số lượng mảng: "));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(Number(prompt(`Nhập phần tử thứ ${i + 1}`)));
}

let result = arr.filter(function(element, index) {
    return element >= 10;
});

alert(result);