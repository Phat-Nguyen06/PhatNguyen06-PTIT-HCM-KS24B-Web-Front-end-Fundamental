let arr = ["", false, 0, 5, 10, "Hello world!"];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        newArr.push(arr[i]);
    }
}

alert(newArr);