let num = Number(prompt("Enter a number"));

if (num % 3 == 0 && num % 5 == 0) {
    alert(`${num} chia hết cho cả 3 và 5`);
}
else {
    alert(`${num} không chia hết cho cả 3 và 5`);
}
