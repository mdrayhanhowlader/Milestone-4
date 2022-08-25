// function bestFriend(friends){
//     let bestFriend = "";
//     for(let i = 0; i < friends.length; i++){
//         const friend = friends[i]
//         if (bestFriend.length < friend.length){
//             bestFriend = friend;
//         }
//     }
//     return bestFriend;
// }


// const myFriends = ['obaydul kader', 'sefuda', 'abul mal', 'modi']
// const maxFriend = bestFriend(myFriends);
// console.log(maxFriend)


function bestFriend (friends){
    let maxFriend = "";
    for(let i = 0; i < friends.length; i++){
        const friend = friends[i]
        // console.log(friend)
        if(maxFriend.length < friend.length){
            maxFriend = friend;
        }
    }
    return maxFriend;
}
const myFriends = ['obaydul kader', 'nurul islam nahid', 'abul mal', 'modi']
console.log(bestFriend(myFriends))