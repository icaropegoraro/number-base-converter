export const hasForbiddenDigits = (digitChars, number, base) => {

    digitChars = digitChars.toLowerCase()
    number = number.toLowerCase()

    let numberChars = number.split('')
    let forbiddenChars = digitChars.slice(base).split('')

    let result = forbiddenChars.some(forbiddenChar => numberChars.includes(forbiddenChar))
    
    return result
}