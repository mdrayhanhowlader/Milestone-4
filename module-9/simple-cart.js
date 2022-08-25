const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'tShirt', price: 600, quantity: 3},
    {name: 'pant', price: 1400, quantity: 2},
    {name: 'sunglass', price: 150, quantity: 1},
    {name: 'belt', price: 200, quantity: 1}
]

function totalCost(products){
    let sum = 0
    for(let i = 0; i < products.length; i++){
        const product = products[i]
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal
    }
    return sum
}

const expense = totalCost(shoppingCart)
const vat = expense * 5 / 100
const totalExpense = vat + expense
console.log(totalExpense)