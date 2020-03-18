window.addEventListener('DOMContentLoaded', ()=>{
    const formData = document.querySelector('#inputData');
    const cesarData = document.querySelector('#cesar')
});

function cesar(input, rot){
    if (Number.isInteger(rot)){
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let encryptedWord = '';

        for (const letter of input) {            
            if (alphabet[alphabet.indexOf(letter) + rot] === undefined){
                encryptedWord += alphabet[alphabet.indexOf(letter) - rot];
            }else{
                encryptedWord += alphabet[alphabet.indexOf(letter) + rot];
            }
        }
        console.log(encryptedWord)
    }else{
        throw new Error('Rot must be a number');
    }
}

cesar('abcz', 13);