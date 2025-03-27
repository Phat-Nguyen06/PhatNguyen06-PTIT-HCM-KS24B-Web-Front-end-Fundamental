let str = prompt("Nhập vào một chuỗi");

function  isPalindrome(str) {
    let reverse_str = str.split("").reverse().join("");
    return reverse_str == str ? "là chuỗi đối xứng" : "không phải chuỗi đối xứng";
}

alert(isPalindrome(str));
