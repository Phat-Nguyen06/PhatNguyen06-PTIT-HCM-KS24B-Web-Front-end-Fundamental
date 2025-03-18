let math = Number(prompt("Nhập điểm môn Toán"));
let literature = Number(prompt("Nhập điểm môn Văn"));
let english = Number(prompt("Nhập điểm môn Anh"));

let average_score = (math + literature + english) / 3;

if (average_score >= 8.0)
{
    console.log("Giỏi");
}
else if (average_score >= 6.5 && average_score < 8)
{
    console.log("Khá");
}
else if (average_score >= 5.0 && average_score < 6.5)
{
    console.log("Trung bình");
}
else {
    console.log("Yếu");
}