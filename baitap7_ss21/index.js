let principal = Number(prompt("Nhập số tiền gửi ban đầu (VND):"));
let interestRate = Number(prompt("Nhập lãi suất tháng (%):")) / 100;
let months = Number(prompt("Nhập số tháng gửi:"));

if (isNaN(principal) || isNaN(interestRate) || isNaN(months) || principal <= 0 || interestRate <= 0 || months <= 0) {
    alert("Dữ liệu nhập không hợp lệ! Vui lòng nhập lại số hợp lệ.");
} else {
    let totalAmount = principal * Math.pow(1 + interestRate, months);
    let interestEarned = totalAmount - principal;

    alert(`Sau ${months} tháng, bạn sẽ nhận được:\n
    - Tiền lãi: ${interestEarned.toLocaleString("vi-VN")} VND
    - Tổng tiền nhận được: ${totalAmount.toLocaleString("vi-VN")} VND`);
}
