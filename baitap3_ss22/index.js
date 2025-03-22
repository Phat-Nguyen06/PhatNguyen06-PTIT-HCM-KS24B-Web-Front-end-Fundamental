let input = prompt("Nhập vào một dãy số: ");

if (!isNaN(input) && input !== "") {
    let reversed = input.split("").reverse().join("");
    console.log(reversed);
    alert("Dãy sau khi đảo ngược: " + reversed);
} else {
    console.log("Dãy không hợp lệ");
    alert("Dãy không hợp lệ");
}
