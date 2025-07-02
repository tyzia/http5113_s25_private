// Fix variables names and spacing

function calc(x) {
    let all = 0;

    for(let data of x){
    all += data;
    }

const tax=all*0.13;
const format=`Total Tax: ${tax.toFixed(2)}`;
return format;
}

// Refactor code to fix WET

function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price * item.quantity;
    }
    return total;
}


function calculateDiscount(items) {
    let subtotal = 0;
    for (let item of items) {
        subtotal += item.price * item.quantity;
    }
    return subtotal * 0.1;
}

// Refactor code to apply SRP

function processUserDashboard(user) {
    if (!user) {
        throw new Error('Invalid user ID');
    }

    const totalOrders = user.orders.length;
    const totalSpent = user.orders.reduce((sum, order) => sum + order.amount, 0);

    return {
        name: user.name,
        orders: totalOrders,
        spent: `$${totalSpent.toFixed(2)}`,
        lastActive: user.lastLogin.toISOString()
    };
}
