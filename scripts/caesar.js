function caesar(inputString, shift){
    const outputArray = []

    function _getShiftedValue(){
        for(let i=0; i<inputString.length; i++){
            if (inputString.charCodeAt(i) >= 97 && inputString.charCodeAt(i) <= 122){
                const newCode = (inputString.charCodeAt(i) - 97 + shift) % 26;
                //outputArray.push(String.fromCharCode(newCode));
                outputArray[i] = String.fromCharCode(newCode + 97);
            } else if (inputString.charCodeAt(i) >= 65 && inputString.charCodeAt(i) <= 90){
                const newCode = (inputString.charCodeAt(i) -65 + shift) % 26;
                //outputArray.push(String.fromCharCode(newCode));
                outputArray[i] = String.fromCharCode(newCode + 65);
            } else {
                outputArray[i] = inputString.charAt(i);
            }
        }
    }

    _getShiftedValue();

    return outputArray.join('');
}

module.exports = caesar;