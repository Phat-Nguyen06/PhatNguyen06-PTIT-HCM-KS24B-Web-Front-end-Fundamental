let num = 2941;

function largestNumber(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''));
}

alert(largestNumber(num));