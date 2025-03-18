let a = prompt("Nhập vào số a: ");
let b = prompt("Nhập vào số b: ");
let c = prompt("Nhập vào số c: ");

let denta = b * b - 4 * a * c;

if (denta < 0){
    alert("Phương trình vô nghiệm");
}
else if (denta == 0){
    alert(`Phuong trình có nghiệm kép x1 = x2 = ${-b / (2 * a)}`);
}
else{
    let x1 = (-b + Math.sqrt(denta)) / (2 * a);
    let x2 = (-b - Math.sqrt(denta)) / (2 * a);
    alert(`Phương trình có 2 nghiệm phân biệt x1 = ${x1} và x2 = ${x2}`);
}