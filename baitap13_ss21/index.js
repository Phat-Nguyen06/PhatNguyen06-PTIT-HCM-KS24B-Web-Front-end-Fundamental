let size = 10;

console.log("a.");
for (let i = size; i > 0; i--) {
    console.log("*".repeat(i));
}

console.log("\nb.");
for (let i = 1; i <= size; i++) {
    console.log("*".repeat(i));
}

console.log("\nc.");
for (let i = 1; i <= size; i++) {
    console.log(" ".repeat(size - i) + "*".repeat(i));
}

console.log("\nd.");
for (let i = size; i > 0; i--) {
    console.log(" ".repeat(size - i) + "*".repeat(i));
}
