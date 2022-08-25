function getAverage (Assignment1, Assignment2, Assignment3){
    const total = Assignment1 + Assignment2 + Assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60
const assignment2Marks = 52
const assignment3Marks = 60

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks)
var totalAverage = myAverage.toFixed(2)

console.log("My average: " + totalAverage)