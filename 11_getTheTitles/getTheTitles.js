const getTheTitles = function (obj) {
    let bookTitles = [];
    for (let i in obj) {
        bookTitles.push(obj[i].title);
    }
    return bookTitles;
}

// Do not edit below this line
module.exports = getTheTitles;
