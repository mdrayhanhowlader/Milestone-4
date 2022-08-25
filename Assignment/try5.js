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
        return "please provide valid object"
    }


}

const person1 = {name: "Himel", friend: "Tomal"};
// const person1 = ['Himel', 'Tomal']
const person2 = {name: "Tomal", friend: "Himel"};
console.log(isBestFriend(person1, person2))