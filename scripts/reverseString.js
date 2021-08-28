function reverseString(inputString) {
    let outputString = [];

    for(let i=1; i<=inputString.length; i++){
        outputString[i-1] = inputString.charAt(inputString.length - i);
    }

    return outputString.join('');
}

module.exports = reverseString;