let input = prompt("Nhập vào một ký tự:");

if (input >= '0' && input <= '9') {
    console.log(`Không phải chữ cái`);
}
else if ((input >= 'A' && input <= 'Z') || (input >= 'a' && input <= 'z')) {
    console.log(`ký tự ${input} là chữ cái`);
}