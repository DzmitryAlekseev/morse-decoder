const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrExpr = expr.split('');
    let conmbineLetterCodeArr = [];
    let arrLetterCode = [];
    let arrMorse = [];
    
    for(let i = 0; i < arrExpr.length; i += 2){
        conmbineLetterCodeArr.push(arrExpr[i] + arrExpr[i + 1]);
    }
    for(let i = 0; i < conmbineLetterCodeArr.length; i += 5){
        arrLetterCode.push(conmbineLetterCodeArr.slice(i, i + 5).map((el) => el == 10 ? '.' : null || el == 11 ? '-': null).filter((el1) => el1 !== null).join(''));
    }
    
    let a = arrLetterCode.map((el) => el in MORSE_TABLE ? MORSE_TABLE[el] : ' ').join('')
    
    return a;
}

module.exports = {
    decode
}