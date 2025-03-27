let arr = [2, 4, 6, 8];

function isArithmeticSequence(arr) {
    if (arr.length < 2) {
        return false;
    }

    let diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if(arr[i] - arr[i - 1] !== diff) return false;
    }

    return true;
}

if(isArithmeticSequence(arr)) {
    alert("TRUE");
}
else alert("FALSE");