// function getSumOfAnArray(numbers) {

//     let sum = 0;

//     for(let i = 0; i < numbers.length; i++){
//         const index = i
//         const element = numbers[index]
//         sum = sum + element
//         console.log(sum)
//     }

//     return sum
// }

// const myNumbers = [22, 32, 53, 56, 64, 76, 87]

// getSumOfAnArray(myNumbers)


function getOddNumbersOfAnArray(numbers){

    const oddNumbers = []
    for(let i = 0; i < numbers.length; i++){
        const index = i
        const element = numbers[index]
        if(element % 2 !== 0){
            console.log("Even number is " + index, element)
            oddNumbers.push(element)
        }
    }
    return oddNumbers
}


const numbers = [22, 32, 53, 56, 64, 76, 87, 65, 33, 52, 77]
const oddNumbers = getOddNumbersOfAnArray(numbers)
console.log(oddNumbers)

