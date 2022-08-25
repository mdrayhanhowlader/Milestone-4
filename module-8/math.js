// Math power 
const age = 3;
const ageIncrease = Math.pow(3, 3)
console.log(ageIncrease)

// math absolute 
const boyAge = 23;
const girlAge = 33;
const gap = Math.abs(boyAge - girlAge);
console.log(gap)

if(gap < 5){
    console.log('you guys can be friend')
}else {
    console.log('you can not be friend')
}

// Math round 
const number = 3.356
const round = Math.round(number)
const ceil = Math.ceil(number)
const floor = Math.floor(5.67)
console.log(round)
console.log(ceil)
console.log(floor)

// Random 
const random = Math.random()*100;
console.log(random)

// round with random 
const randomRound = Math.round(Math.random()*100)
console.log(randomRound)