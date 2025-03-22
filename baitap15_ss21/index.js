let amount = parseInt(prompt("Nhập số tiền cần rút (phải chia hết cho 1000): "), 10);

if (amount % 1000 !== 0) {
    console.log("Số tiền nhập vào không hợp lệ. Vui lòng nhập số chia hết cho 1000.");
} else {
    let denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    console.log(`Số tiền cần rút: ${amount.toLocaleString()} VND`);
    
    for (let i = 0; i < denominations.length; i++) {
        let count = Math.floor(amount / denominations[i]);
        if (count > 0) {
            console.log(`${denominations[i].toLocaleString()} - ${count} tờ`);
            amount -= count * denominations[i];
        }
        if (amount === 0) break;
    }
}

// Cách 2 ko dùng mảng

// let amount = parseInt(prompt("Nhập số tiền cần rút (chia hết cho 1000):"));

// if (amount % 1000 !== 0) {
//     console.log("Số tiền phải chia hết cho 1000!");
// } else {
//     let count500k = Math.floor(amount / 500000);
//     amount -= count500k * 500000;

//     let count200k = Math.floor(amount / 200000);
//     amount -= count200k * 200000;

//     let count100k = Math.floor(amount / 100000);
//     amount -= count100k * 100000;

//     let count50k = Math.floor(amount / 50000);
//     amount -= count50k * 50000;

//     let count20k = Math.floor(amount / 20000);
//     amount -= count20k * 20000;

//     let count10k = Math.floor(amount / 10000);
//     amount -= count10k * 10000;

//     let count5k = Math.floor(amount / 5000);
//     amount -= count5k * 5000;

//     let count2k = Math.floor(amount / 2000);
//     amount -= count2k * 2000;

//     let count1k = Math.floor(amount / 1000);
//     amount -= count1k * 1000;

//     console.log("Kết quả:");
//     if (count500k > 0) console.log(`500.000 - ${count500k} tờ`);
//     if (count200k > 0) console.log(`200.000 - ${count200k} tờ`);
//     if (count100k > 0) console.log(`100.000 - ${count100k} tờ`);
//     if (count50k > 0) console.log(`50.000 - ${count50k} tờ`);
//     if (count20k > 0) console.log(`20.000 - ${count20k} tờ`);
//     if (count10k > 0) console.log(`10.000 - ${count10k} tờ`);
//     if (count5k > 0) console.log(`5.000 - ${count5k} tờ`);
//     if (count2k > 0) console.log(`2.000 - ${count2k} tờ`);
//     if (count1k > 0) console.log(`1.000 - ${count1k} tờ`);
// }
