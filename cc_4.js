// Task 1: Customer Discounts

let purchaseAmount = 250
if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.05; // Created an if statement to declare that if the purchase ammount is greater than $100, which it is, they recieve a  5% discount
    purchaseAmount -= discount;
}
console.log(`Final amount after discount: $${purchaseAmount}`);


// Task 2: Sales Report

let sales = [1200, 500, 850, 1600, 2100];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
} // Created a for statment for sales to calculate the sum if they all sell
console.log(`Total sales: $${totalSales}`);


// Task 3: Inventory Depletion

for (let stock = 10; stock > 0; stock--) {
    console.log(`Stock remaining: ${stock}`);
} // Created a decreasing for statement, 10,9,8, etc. in descending order until the intventory is out
console.log("Stock is empty.");


// Task 4: Customer Survey

let responses = 0;
do {
    responses++;
    console.log(`Collected response: ${responses}`);
} while (responses < 3);
// Created a do...while loop from 1 to 3 in ascending order and terminated 


// Task 5: Employee Information

let employee = { name: "Alice", position: "Manager", salary: 75000 };
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
} // Created a for...in loop to display the emplyee along with their position and salary 


// Task 6: Product Listings
let products = ["Shampoo", "Conditioner", "Hair Oil"];
for (let product of products) {
    console.log(`Product: ${product}`);
} // Created a product listing with three products using a for...of loop to display each

