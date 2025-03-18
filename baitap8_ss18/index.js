let a = Number(prompt("Nhập độ dài cạnh a:"));
let b = Number(prompt("Nhập độ dài cạnh b:"));
let c = Number(prompt("Nhập độ dài cạnh c:"));

if (a > 0 && b > 0 && c > 0 && (a + b > c) && (b + c > a) && (c + a > b)) {
    if (a === b && b === c) {
        alert("Đây là tam giác đều.");
    } 
    else if (a === b || b === c || c === a) {
        alert("Đây là tam giác cân.");
    } 
    else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
        Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2) ||
        Math.pow(c, 2) + Math.pow(a, 2) === Math.pow(b, 2)) {
        alert("Đây là tam giác vuông.");
    } 
    else {
        alert("Đây là tam giác thường.");
    }
} 
else {
    alert("Ba cạnh không tạo thành tam giác.");
}