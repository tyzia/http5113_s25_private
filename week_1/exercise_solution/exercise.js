// Fix variables names and spacing

function calculateTotalWithTax(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    const tax = sum * 0.13;
    const formattedResult = `Total Tax: ${tax.toFixed(2)}`;
    return formattedResult;
}

// Refactor code to fix WET

function calculateSubtotal(items) {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateTotal(items) {
    return calculateSubtotal(items);
}

function calculateDiscount(items) {
    return calculateSubtotal(items) * 0.1;
}

// Refactor code to apply SRP

function validateUser(user) {
    if (!user) throw new Error('Invalid user ID');
}

function getUserOrderSummary(orders) {
    return {
        totalOrders: orders.length,
        totalSpent: orders.reduce((sum, order) => sum + order.amount, 0),
    };
}

function formatDashboardData(user) {
    validateUser(user);
    const { totalOrders, totalSpent } = getUserOrderSummary(user.orders);

    return {
        name: user.name,
        orders: totalOrders,
        spent: `$${totalSpent.toFixed(2)}`,
        lastActive: user.lastLogin.toISOString(),
    };
}
