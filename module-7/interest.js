function simpleInterest(total){
    let sum = 100;
    const interest = total / sum;
    return interest
}


const priciple = 2000;
const time = 1;
const rate = 8;
const total = priciple * time * rate;
const totalAmount = simpleInterest(total);
console.log(totalAmount)