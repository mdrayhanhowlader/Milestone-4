function oilPrice(diesel, petrol, octane){

    let dieselPrice = 114;
    let petrolPrice = 130;
    let octanePrice = 135;

    if(typeof(diesel) === 'number' && typeof(petrol) === 'number' && typeof(octane) === 'number'){
        const dieselTotalPrice = diesel * dieselPrice;
        const petrolTotalPrice = petrol * petrolPrice;
        const octaneTotalPrice = octane * octanePrice;
    
        const totalOilPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;
    
    
        return totalOilPrice;
    }
    else {
        return "please Provide valid Quantity"
    }

}

console.log(oilPrice('', 1, 1))