const numbers = [45, 53, 64, 22, 54, 77];
// for(let i = 0; i < numbers.length; i++)
// {

// }

// for (const number of numbers){
//     console.log(number)
// }


// const products = [
//     {id: 01, name: 'xioami', price: 19000},
//     {id: 02, name: 'poco', price: 29000},
//     {id: 03, name: 'oppo', price: 39000},
//     {id: 04, name: 'itel', price: 49000},
//     {id: 05, name: 'htc', price: 59000},
//     {id: 06, name: 'motorola', price: 69000},
//     {id: 07, name: 'apple', price: 79000},
// ]


// function matchedProducts (products, search){
//     const matched = []
//     for(const product of products){
//         if(product.name.includes(search)){
//             matched.push(product)
//         }
//     }
//     return matched
// }

// console.log(matchedProducts(products, 'htc'))




const products = [
    {id: 01, name: 'xioami phone', price: 19000},
    {id: 02, name: 'poco phone', price: 29000},
    {id: 03, name: 'oppo camera', price: 39000},
    {id: 04, name: 'itel vision', price: 49000},
    {id: 04, name: 'lenova vision', price: 49000},
    {id: 05, name: 'htc camera', price: 59000},
    {id: 06, name: 'motorola phone', price: 69000},
    {id: 07, name: 'apple camera', price: 79000}
]


function productMatched (products, search){
    const get = []
    for(const product of products){
        if(product.name.includes(search)){
            get.push(product)
        }
    }
    return get;
}

console.log(productMatched(products, 'vision'))