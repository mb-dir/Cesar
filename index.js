window.addEventListener('DOMContentLoaded', ()=>{
    const formData = document.querySelector('#inputData');
    const cesarData = document.querySelector('#cesar')
});

function cesar(input, rot){
    if (Number.isInteger(rot)){
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        for (const letter of input) {
            console.log(alphabet[alphabet.indexOf(letter) + rot])
        }
    }else{
        throw new Error('Rot must be a number');
    }
}

cesar('abc', 1);