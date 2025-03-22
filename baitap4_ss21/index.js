let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
let c = Number(prompt("Nhập số c:"));

let delta = b * b - 4 * a * c;
let x1, x2;
if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
} else if (delta === 0) {
    x1 = -b / (2 * a);
    console.log(`Phương trình có nghiệm kép: x1 = x2 = ${x1}`);
} else {
    console.log("Phương trình vô nghiệm");
}