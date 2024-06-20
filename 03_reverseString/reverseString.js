const reverseString = function (text) {
    let i = text.length - 1;
    let output = '';
    for (i ; i >= 0; i--) {
        output += text[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
