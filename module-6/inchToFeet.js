// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet)

function feet (inch, mainCount) {
    const feet = inch / mainCount;
    return feet;
}

const mainNumber = 12

const grandpaInches = 63;
const grandpaHeight = feet(grandpaInches, mainNumber)
console.log("GrandpaHeight: " + " " + grandpaHeight + " " + "ft")

const grandmaInches = 57;
const grandmaHeight = feet(grandmaInches, mainNumber)
console.log("GrandmaHeight: " + " " + grandmaHeight + " " + "ft")

const myInches = 66;
const myHeight = feet(myInches, mainNumber)
console.log("MyHeight: " + " " + myHeight + " " + "ft")