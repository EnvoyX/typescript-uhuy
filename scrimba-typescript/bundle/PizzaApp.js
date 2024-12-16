"use strict";
/**
 * Challenge #1: Create a Pizza object type. It should include a `name`
 * and a `price` property.
 */
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
/**
 * Challenge #5: Fix the TS warnings about orderQueue!
 */
let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory = [];
/**
 * Challenge #3: teach TS that the pizzaObj is supposed to be a Pizza type.
 * Then like before, look through the code to see if there are any new
 * TS warnings to deal with (😉), and fix those issues
 */
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    // Defensive Coding
    if (!selectedPizza) {
        console.error(`${pizzaName} is not available on the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderHistory.push(newOrder);
    return newOrder;
}
/**
 * Challenge #4: Teach TS what data type should be used for the
 * orderId in the completeOrder function. Then check for any
 * additional warnings TS comes up with and fix those (cost property at addNewPizza).
 */
/**
 * Challenge #6: Fix the warning below by handling the "sad path" scenario!
 */
function completeOrder(orderId) {
    const order = orderHistory.find((order) => order.id === orderId);
    // Defensive Coding / Guard Clause
    if (!order) {
        console.error(`There's no ${order} ID Order`);
        return;
    }
    order.status = "completed";
    return order;
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
placeOrder("BBQ Chicken");
completeOrder(2);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderHistory);
