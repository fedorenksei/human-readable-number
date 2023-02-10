module.exports = toReadable

function toReadable (number) {
    if (number == 0) return 'zero'

    let words = []
    number = number.toString().padStart(3, '0')
    
    const hundreds = number[number.length - 3]
    if (hundreds != '0') {
        words.push(getOneDigitWord(hundreds), 'hundred')
    }
    
    const twoLastDigitsException = {
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    }[number.slice(number.length - 2)]
    
    if (twoLastDigitsException) {
        words.push(twoLastDigitsException)
    } else {
        const tens = number[number.length - 2]
        if (tens != '0') words.push(getTenWord(tens))

        const lastDigit = number[number.length - 1]
        if (lastDigit != '0') words.push(getOneDigitWord(lastDigit))
    }
    
    return words.join(' ')
}

function getOneDigitWord(number) {
    number = parseInt(number)
    const lexemes = ['one', 'two', 'three', 'four', 'five', 
        'six', 'seven', 'eight', 'nine']
    const res = lexemes[number - 1]
    return res
}

function getTenWord(number) {
    number = parseInt(number)
    return ['ten', 'twenty', 'thirty', 'forty', 'fifty', 
        'sixty', 'seventy', 'eighty', 'ninety'][number - 1]
}
