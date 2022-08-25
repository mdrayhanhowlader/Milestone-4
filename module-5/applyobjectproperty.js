// we can apply property of object in 3 ways 
// number 1: 

var monthlySpends = {
    grocery: 3000,
    meat: 500,
    extraexpense: 2000
}

// Number 1: 
var applyProperties = monthlySpends.grocery

// Number 2:
var applyProperties = monthlySpends['grocery']

// Number 3:
var propertyName = 'grocery'
var applyProperties = monthlySpends[propertyName]