function ticketPrice(ticketQuantity){
    const first = 100;
    const second = 90;
    const third = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first;
        return price
    }
    else if (ticketQuantity <= 200){
        const first100Price = first * 100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second
        const totalPrice = first100Price + restTicketPrice
        return totalPrice;
    }
    else {
        const first100Price = first * 100;
        const second100Price = second * 100;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * third
        const totalPrice = first100Price + second100Price + restTicketPrice
        return totalPrice; 
    }
    
}

const price = ticketPrice(201)
console.log(price)
