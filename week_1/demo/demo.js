const items = [
    { price: 1, qty: 1 },
    { price: 2, qty: 2 },
    { price: 3, qty: 0 },
    { price: 4, qty: 10 },
];


function calculateSubtotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price * item.qty;
    }
    return total;
}


function calculateTax(items) {
    return calculateSubtotal(items) * 0.13;
}

const total = calculateSubtotal(items);
const tax = calculateTax(items);

console.log(total);
console.log(tax);