function radianToDegree(radian){
    let degree = radian * (180 / Math.PI);
    let totalDegree = degree.toFixed(2)
    if(radian <= 0){
        return "error"
    }
    return totalDegree;
}

const getDegree = radianToDegree("");
console.log(getDegree);