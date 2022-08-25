// function sumOfNumbers(number){
//     let sum = 0;
//     for(let i = 0; i <= number; i++){
//         sum = sum + i
//         console.log(i, sum)
//     }
//     return sum
// }


// Multiplication of number 

function factorial(number){
    let result =  1;
    for(let i = 1; i < number; i++){
        result = result * i;
    }
    return result;
}
const result =  factorial(7)
console.log(result)

