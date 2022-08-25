function isPrime(num){
    if(num === 2) {
        return "two is Prime number"
    } else if(num > 1) {
        for (let i = 2; i < num; i++){
            
            if(num % i !== 0){
                return 'This is Prime Number'
            } else if (num === i * i) {
                return 'This is not Prime Number'
            } else {
                return 'This is not Prime Number'
            }

        }
    } else {
        return "Prime number did not found"
    }
}

console.log(isPrime(12));