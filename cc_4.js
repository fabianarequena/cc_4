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

