let str = prompt("Nhập vào chuỗi kí tự");

function edit_character(str) {
    if (str.length == 0) {
        alert("Mảng rỗng!!!");
        return;
    }
    else {
        str = str.toLocaleLowerCase();
        let arr = str.split("");

        arr[0] = arr[0].toLocaleUpperCase();

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === " " && arr[i + 1] !== " ") {
                arr[i + 1] = arr[i + 1].toLocaleUpperCase();
            }
        }

        return arr.join("");
    }
}
    alert(edit_character(str));