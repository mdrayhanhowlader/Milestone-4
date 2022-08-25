var shoppingCart = {
    pen: 5,
    notebook: 40,
    book: 300
}

var keys = Object.keys(shoppingCart)
var values = Object.values(shoppingCart)

for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i]
    var propertyValue = shoppingCart[propertyName]
    console.log(propertyName, propertyValue)
}

for(var propertyName in shoppingCart){
    console.log(propertyName)
}