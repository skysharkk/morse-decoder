const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let dot = '.';
    let dash = '-';
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        if (letter === '**********') {
            arr.push(letter);
        } else {
            let tempMorseSymbol = '';
            for (let j = 0; j < letter.length; j += 2) {
                let morseSymbol = letter.slice(j, j + 2);
                if (morseSymbol === '10') {
                    tempMorseSymbol += dot;
                } else if (morseSymbol === '11') {
                    tempMorseSymbol += dash;
                }
            }
            arr.push(tempMorseSymbol);
        }
    }
    let newArr = arr.map((item) => {
        if (item === '**********') {
            return ' ';
        } else {
            return MORSE_TABLE[item];
        }
    });
    return newArr.join('');
}

module.exports = {
    decode
}