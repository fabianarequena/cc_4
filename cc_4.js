// Task 1: Product Price Management

let purchaseAmmount = 250
if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.05; // Created an if statement to declare that if the purchase ammount is greater than $100, which it is, they recieve a  5% discount
    purchaseAmount -= discount;
}
console.log(`Final amount after discount: $${purchaseAmount}`);

