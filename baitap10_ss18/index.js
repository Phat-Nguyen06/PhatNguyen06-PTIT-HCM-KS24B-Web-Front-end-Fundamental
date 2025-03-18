let num = Number(prompt("Nhập vào một số bất kỳ (0 - 999)"));
let hundereds = Math.floor(num / 100);
let dozens = Math.floor((num % 100) / 10);
let units = num % 10;

let result = "";

switch (hundereds) {
    case 1: result += "Một trăm "; break;
    case 2: result += "Hai trăm "; break;
    case 3: result += "Ba trăm "; break;
    case 4: result += "Bốn trăm "; break;
    case 5: result += "Năm trăm "; break;
    case 6: result += "Sáu trăm "; break;
    case 7: result += "Bảy trăm "; break;
    case 8: result += "Tám trăm "; break;
    case 9: result += "Chín trăm "; break;
}

if (dozens === 0 && units !== 0 && hundereds !== 0) {
    result += "linh ";
} else {
    switch (dozens) {
        case 1: result += "mười "; break;
        case 2: result += "hai mươi "; break;
        case 3: result += "ba mươi "; break;
        case 4: result += "bốn mươi "; break;
        case 5: result += "năm mươi "; break;
        case 6: result += "sáu mươi "; break;
        case 7: result += "bảy mươi "; break;
        case 8: result += "tám mươi "; break;
        case 9: result += "chín mươi "; break;
    }
}

if (dozens === 1 && units === 5) {
    result += "lăm";
} else if (units === 5 && dozens > 1) {
    result += "lăm";
} else {
    switch (units) {
        case 1: result += "một"; break;
        case 2: result += "hai"; break;
        case 3: result += "ba"; break;
        case 4: result += "bốn"; break;
        case 5: result += "năm"; break;
        case 6: result += "sáu"; break;
        case 7: result += "bảy"; break;
        case 8: result += "tám"; break;
        case 9: result += "chín"; break;
    }
}

console.log(result);