function isEven(number){
    const remainder = number % 2;
    
    if(remainder === 0){
        return true
    }else {
        return false
    }
}

const myNumber = isEven(10)
console.log(myNumber)

const herNumber = isEven(11)
console.log(herNumber)



function jodiJor(digit){
    const vagSes = digit % 2
    if (vagSes === 0){
        return 'sottie'
    }else {
        return 'mittha'
    }
}

const jodijor = jodiJor(3456)
console.log(jodijor)