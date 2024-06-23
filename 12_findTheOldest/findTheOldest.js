const findTheOldest = function (people) {
    let newArray = [];
    for (let i in people) {
    newArray.push({
        name: people[i].name,
        age: people[i].yearOfDeath - people[i].yearOfBirth
    });
}
    newArray.sort((a, b) => b.age - a.age );
    return newArray[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
