// var num = {1};
// if(Object.entries(num).length === 0){
//     console.log(false)
// }else {
//     console.log(true)
// }


function radianToDegree(radian){
    let degree = radian * (180 / Math.PI);
    let totalDegree = degree.toFixed(2)
    if(typeof(radian) !== 'number'){
        return "Please Provide a valid number"
    }else {
        return totalDegree;
    }
}

// console.log(radianToDegree(1))


function isJavaScriptFile(string){

    if(typeof(string) === 'string'){
        let fileName = string.substring(string.length - 3);

        if(fileName === ".js"){
            return true;
        }
        else{
            return false;
        }
    }
    else {
        return "please provide a valid file name"
    }
}

console.log(isJavaScriptFile(".js"))