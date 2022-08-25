function myNumbers(numbers) {
    let posetiveNum = [];
    for (i = 0; i <= numbers.length; i++) {
        var number = numbers[i];
        if (number >= 0) {  
            posetiveNum.push(number);
            
        }
        else{
            break;
        }
    }
    return posetiveNum;

}


let allNumbers = [10, 6, 15, 20, -1, 14, 13, -2, 6, 9, 0];
let result = myNumbers(allNumbers);
console.log(result);