var students = [['selim', 85], ['halim', 84], ['munim', 78], ['tamim', 65]]

var avgMarks = 0

for (var i = 0; i < students.length; i++) {
    avgMarks += students[i][1]
    var avg = (avgMarks/students.length)
}

console.log("Average Grade: " + (avgMarks)/students.length )

    if(avg < 60){
        console.log("Grade : F")
    }

    else if (avg < 70) {
        console.log("Grade : D")
    }
    else if (avg < 75) {
        console.log("Grade : C")
    }
    else if (avg < 80) {
        console.log("Grade : A")
    }
    else if (avg < 85) {
        console.log("Grade : A+")
    }