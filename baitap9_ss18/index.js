let hour = Number(prompt("Nhập giờ (0-23)"));
let minute = Number(prompt("Nhập phút (0-59)"));
let second = Number(prompt("Nhập giây (0-59)"));

if (hour < 0 || hour > 23) {
    alert("Nhập sai giờ");
} else if (minute < 0 || minute > 59) {
    alert("Nhập sai phút");
} else if (second < 0 || second > 59) {
    alert("Nhập sai giây");
} else {
    let format = hour >= 12 ? "PM" : "AM";
    let time_change = hour % 12;
    if (time_change === 0) {
        time_change = 12;
    }
    alert(`Thời gian sau khi chuyển đổi là: ${time_change}:${minute}:${second} ${format}`);
}