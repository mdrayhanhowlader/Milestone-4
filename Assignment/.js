// function isJavascriptFile(string)
// {
//   var ext = /^.+\.([^.]+)$/.exec(string);
//     const extension =  ext == null ? "" : ext[1];
//     if(extension === "js"){
//         return true;
//     }else {
//         return false;
//     }

// }

// console.log(isJavascriptFile(".js"))

function publicBusFare(pessenger){
    const reservedBus = 50;
    const reservedMicro = 11;
    const publicBusFare = 250;

    const reservedBusPessenger = pessenger % reservedBus;
    const reservedMicroPessenger = reservedBusPessenger % reservedMicro

    const publicBusPessenger = reservedMicroPessenger
    const busFare = publicBusPessenger * publicBusFare
    return busFare
}

console.log(publicBusFare(62))