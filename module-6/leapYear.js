function isLeapYear(year) {
    const remainder = year % 4;
    if(remainder === 0) {
        return year + ' year is Leap Year' 
    }
    
    return year + ' year is not a Leap Year' 
}

const leapYear = isLeapYear(1844)
console.log(leapYear)