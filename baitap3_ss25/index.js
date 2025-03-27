let arr = [11, 4, 65, 6];

function fn_array_even(arr) {
    if(!arr.every(Number.isFinite)) {
        alert("Giá trị không hợp lệ!");
        return;
    }
    let array_even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            array_even.push(arr[i]);
        }
    }

    if (array_even.length == 0) {
        return alert("Mảng không chứa số chẵn!");
    }
    else {
        return alert(array_even.join(", "));
    }
}

fn_array_even(arr);