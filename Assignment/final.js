// 1: Convert radian to degree 

function radianToDegree(radian){
    let degree = radian * (180 / Math.PI);
    let totalDegree = degree.toFixed(2)
    if(typeof(radian) === 'number'){
        return totalDegree;
    }else {
        return "Please Provide a valid number"
    }
}



// 2: Check Whether the given file name is a javascript file or not 

function isJavaScriptFile (string) {
    if(typeof(string) === 'string'){
        const fileName = string.substring(string.length - 3);

        if(fileName === ".js"){
            return true;
        }
        else{
            return false;
        }
    }
    else {
        return "Please! Provide a valid javascript file name.";
    }
}







// 3: Calculate the total oil price that i have to pay for purchse diesel | petrol | octane

function oilPrice(diesel, petrol, octane){

    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    if(typeof(diesel) === 'number' && typeof(petrol) === 'number' && typeof(octane) === 'number'){
        const dieselTotalPrice = diesel * dieselPrice;
        const petrolTotalPrice = petrol * petrolPrice;
        const octaneTotalPrice = octane * octanePrice;
    
        const totalOilPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;

        return totalOilPrice;
    }
    else {
        return "Please! Provide valid Quantity.";
    }

}





// 4: Public Bus Fare 

function publicBusFare(pessenger){
    const reservedBus = 50;
    const reservedMicro = 11;
    const publicBusFare = 250;

    const reservedBusPessenger = pessenger % reservedBus;
    const reservedMicroPessenger = reservedBusPessenger % reservedMicro

    const publicBusPessenger = reservedMicroPessenger
    const busFare = publicBusPessenger * publicBusFare
    if(pessenger === 0 || pessenger > 0 && pessenger !== ""){
        return busFare
    }else {
        return "Please! Provide Valid Pessenger Numbers"
    }
    
}




// 5: Find Best Friend 

function isBestFriend(person1, person2){

    if(typeof(person1) === 'object' && typeof(person2) === 'object')
    {
        if(person1.name.toLowerCase() === person2.friend.toLowerCase() && person2.name.toLowerCase() === person1.friend.toLowerCase()){
            return true;
        }else if(person1.name !== person2.friend || person2.name !== person1.friend){
            return false;
        }
    }
    else {
        return "Your data is not valid. please provide valid object!";
    }
}


const f1 = []
const f2 = {name: "sabil", friend: "nabil"}


console.log(isBestFriend(f1, f2))