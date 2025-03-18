// let result = “javascript” + 5; // “javascript5” "javascript" là chuỗi, 5 là số, nhưng JavaScript tự động chuyển 5 thành chuỗi "5".
// let result = “javascript” - 1; // NaN "javascript" là một chuỗi không thể chuyển thành số, nên phép toán "javascript" - 1 không hợp lệ.
// let result = “3” + 2; // Chuỗi "3" và số 2, JavaScript sẽ chuyển 2 thành chuỗi "2" và nối chuỗi "3" và "2" thành chuỗi "32".
// let result = “5” - 4; // Dấu - chỉ hoạt động với số. JavaScript tự động chuyển chuỗi "5" thành số 5. Kết quả là 5 - 4 = 1.
// let result =  isNaN( “123”); // false "123" là một chuỗi chứa số, nên isNaN("123") trả về false.
// let result = isNaN(“hello”); // true "hello" không phải là một số, nên isNaN("hello") trả về true.
// let result = Number.isNaN("123"); // false "123" là một chuỗi chứa số, nên Number.isNaN("123") trả về false.
// let result = Number.isNaN(NaN); // true NaN là một giá trị không phải là số, nên Number.isNaN(NaN) trả về true.
