class Cesar {
    constructor(input, rot) {
        this.input = input;
        this.rot = rot;
    }

    getCesar() {
        if (this.validChars(this.input)) {
            if (Number.isInteger(this.rot)) {
                const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
                const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                const alphabetLen = 26; //const length of alphabet is 26

                let encryptedWord = '';

                for (const letter of this.input) {
                    if (this.isUpper(letter)) {
                        encryptedWord += this.encripting(alphabetUpper, alphabetLen, letter, this.rot)
                    } else {
                        encryptedWord += this.encripting(alphabetLower, alphabetLen, letter, this.rot)
                    }
                }
                return encryptedWord;
            } else {
                throw new Error('Rot must be a number');
            }
        } else {
            alert('Błędny input, sprawdź, czy podany wyraz nie posiada w sobie przecinków, wykrzykników, liczb, znaków spacji itp!');
            throw new Error('Invalid input');
        }
    }

    isUpper(letter) {//Check if letter is upper or lower
        if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
            return true;
        } else {
            return false;
        }
    }

    encripting(alphabet, len, letter, rot = 13) { //logic responsible for encryption, based on rot
        const letterIndex = alphabet.indexOf(letter)
        if (alphabet[letterIndex + rot] === undefined) {
            const howMuchToEndAlphabet = len - letterIndex - 1
            return alphabet[rot - howMuchToEndAlphabet - 1];

            //EXAMPLE
            //for 'z', alphabetLower and rot 2
            //len = 26
            //indexOf('z') = 25
            //howMuchToEndAlphabet = 0 (26-25-1)
            //return alphabet[2-0-1] => alphabet[1] = b
            //-1 because index of arrays starts at 0, not 1 ;)
        } else {
            return alphabet[letterIndex + rot];
        }
    }

    validChars(input) {//Check if string contains only letters
        const reg = /[^a-zA-Z]/;
        return !reg.test(input)
    }
}

export default Cesar;