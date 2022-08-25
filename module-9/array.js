// Array kina seta check korar system 
const age = 87
const numbers = [2, 4, 5, 6]
console.log(Array.isArray(age))

// add someitems in array from another variable and array. 
const friends = [1, 3, 4, 6, 7]
const newFriend = friends.concat(age)
console.log(newFriend)

// find something from array 

const priceList = [22, 43, 64, 563, 353, 64]
const getPrice = priceList.includes(64)
console.log(getPrice)