// let factorial = 1;
// for(let i = 5; i >= 1; i--){
//     factorial = factorial * i;
// }

// console.log(factorial)

function factorial(i){
    if(i == 1){
        return 1;
    }else {
        return i * factorial(i - 1)
    }
}

console.log(factorial(5))