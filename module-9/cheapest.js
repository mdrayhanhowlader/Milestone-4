const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 32000, color: 'silver'},
    {name: 'xioami', camera: 8, storage: '32gb', price: 31000, color: 'silver'},
    {name: 'oppo', camera: 14, storage: '16gb', price: 22000, color: 'pink'},
    {name: 'itel', camera: 8, storage: '16gb', price: 12000, color: 'red'},
    {name: 'symphony', camera: 8, storage: '8gb', price: 8000, color: 'black'}
]

function cheapestPhones(phones){
    let cheapest = phones[0] 
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i]
        if(phone.price < cheapest.price){
            cheapest = phone
        }
    }
    return cheapest;
}

const mySelection = cheapestPhones(phones)
console.log(mySelection)