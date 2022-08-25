let numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90]

function showMax(numbers){
    let sum = [];
    for(let i = 0; i < numbers.length; i++)
    {
        const index = i;
        const number = numbers[index]
        if(number > 80){
            sum.push(number)
        }
    }
    return sum;
}


const getMax = showMax(numbers)
console.log(getMax)