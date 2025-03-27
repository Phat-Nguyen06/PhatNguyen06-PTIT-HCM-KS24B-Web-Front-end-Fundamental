let n = Number(prompt("Nhập vào số lượng chuỗi"));
let str = [];

for (let i = 0; i < n; i++) {
    str.push(prompt(`Nhập vào chuỗi thứ ${i + 1}`));
}

if(str.length === 0) {
    alert("Mảng không có phần tử nào");
}

let result = str.filter(function(element, index) {
    return element.length > 5;
});

alert(result);



