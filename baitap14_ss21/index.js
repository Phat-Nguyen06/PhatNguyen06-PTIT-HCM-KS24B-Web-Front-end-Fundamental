let width = Number(prompt("Nhập chiều ngang"));
let height = Number(prompt("Nhập chiều cao"));

for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
        document.writeln("*".repeat(width) + "<br>");
    } else {
        document.writeln("*" + "&nbsp;".repeat((width - 2) * 2) + "*<br>");
    }
}
