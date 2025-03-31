const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];

function sum_cart_prime() {
    return cart.reduce((acc, curr) => acc += curr.price * curr.quantity, 0)
}

console.log(sum_cart_prime());