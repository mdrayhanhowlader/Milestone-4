function reversed(numbers){
    let reversed = ''
    for(let i = numbers.length-1; i >= 0; i--){
        let element = numbers[i]
        reversed = reversed + element
        console.log(element, reversed)
    }
   return reversed
}
const numbers = [32, 45, 67, 89]
const reverse = reversed(numbers)
console.log(reverse)