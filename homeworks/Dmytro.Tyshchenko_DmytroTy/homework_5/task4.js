const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getPeople(userId) {
    let result = null;
    let friend;
    people.forEach((obj) => {
        if (obj.id === userId) friend = obj.friends;
    });
    if (friend !== undefined) {
        result = [];
        if (friend !== null) {
            result = people.filter(obj => friend.some(user => user === obj.id));
        }
    }
    return result;
}

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));
