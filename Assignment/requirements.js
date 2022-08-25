// 1: First Problem 




// function isJavaScriptFile(string){
//     let fileName = string.substring(string.length - 3)
//     if(fileName === ".js"){
//         return true;
//     }else {
//         return false
//     }
// }
// console.log(isJavaScriptFile("html.js"))




function isJavaScriptFile(string){
    let fileName = string.substring(string.length - 3);
    if(fileName === ".js"){
        return true;
    }
    else {
        return false;
    }
}

console.log(isJavaScriptFile("index.js"))










