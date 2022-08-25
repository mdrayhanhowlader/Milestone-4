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
        return "Plese Provide Pessenger Number"
    }
}
console.log(publicBusFare(-1))
