const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];
function myBill() {
    let sum = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        if (stock[shoppingList[i]] > 0) {
            sum += prices[shoppingList[i]];
            stock[shoppingList[i]] --;
        }
    }
    console.log(sum);
}
myBill();
console.log(stock);