let arr = ["2, 4, 8, 1, 9"];
function search_num_min(arr) {
    if (arr.length === 0) {
        alert("Mảng không chứa phần tử");
        return;
    }
    else if(!arr.every(Number.isFinite)) {
        alert("Giá trị không hợp lệ!");
        return;
    }
    let num_min = arr[0];
    for (let index of arr) {
        if (arr[index] < num_min) {
            num_min = arr[index];
        }
    }

    return alert(`phần tử nhỏ nhất trong mảng là: ${num_min}`);
}

search_num_min(arr);