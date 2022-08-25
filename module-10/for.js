let numbers = [33, 22, 55, 66, 63, 77, 74, 21, 81, 87, 99, 105, 110];
for(let i = 0; i < numbers.length; i++)
{
    let index = i 
    let element = numbers[index]
    console.log(element)
}

let sum = [];

for(let i = 0; i < numbers.length; i++)
{
    let index = i;
    let element = numbers[index]
    if (element > 80){
        sum.push(element)
    } 
}

console.log(sum)