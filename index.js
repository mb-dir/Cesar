window.addEventListener('DOMContentLoaded', ()=>{
    const formData = document.querySelector('#inputData');
    const cesarData = document.querySelector('#cesar')
});

function cesar(input, rot){
    if (Number.isInteger(rot)){
        const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const alphabetLen = 26;//const length of alphabet is 26

        let encryptedWord = '';

        for (const letter of input) { 
            const letterIndex = alphabet.indexOf(letter)           
            if (alphabet[letterIndex + rot] === undefined){
                const howMuchToEndAlphabet = alphabetLen - letterIndex - 1
                encryptedWord += alphabet[rot - howMuchToEndAlphabet - 1];

                //EXAMPLE
                //for 'z', and rot 2
                //althabenLen = 26
                //indexOf('z') = 25
                //howMuchToEndAlphabet = 0 (26-25-1)
                //encryptedWord += alphabet[2-0-1] => alphabet[1] = b
                //-1 because index of arrays starts at 0, not 1 ;)
            }else{
                encryptedWord += alphabet[letterIndex + rot];
            }
        }
        console.log(encryptedWord)
    }else{
        throw new Error('Rot must be a number');
    }
}

cesar('cemrcebtenzbjnav', 13);

function isUpper(letter) {
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90){
        return true;
    }else{
        return false;
    }
}