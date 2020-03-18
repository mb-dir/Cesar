window.addEventListener('DOMContentLoaded', ()=>{
    const formData = document.querySelector('#inputData');
    const cesarData = document.querySelector('#cesar')
});

function cesar(input, rot){
    if (Number.isInteger(rot)){
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        const alphabetLen = alphabet.length;

        let encryptedWord = '';

        for (const letter of input) {            
            if (alphabet[alphabet.indexOf(letter) + rot] === undefined){
                const howMuchToEndAlphabet = alphabetLen - alphabet.indexOf(letter) - 1
                encryptedWord += alphabet[rot - howMuchToEndAlphabet - 1];

                //EXAMPLE
                //for 'z', and rot 2
                //althabenLen = 26
                //indexOf('z') = 25
                //howMuchToEndAlphabet = 0 (26-25-1)
                //encryptedWord += alphabet[2-0-1] => alphabet[1] = b
                //-1 because index of arrays starts at 0, not 1 ;)
            }else{
                encryptedWord += alphabet[alphabet.indexOf(letter) + rot];
            }
        }
        console.log(encryptedWord)
    }else{
        throw new Error('Rot must be a number');
    }
}

cesar('cemrcebtenzbjnav', 13);