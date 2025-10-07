import { hasForbiddenDigits, isString, isEmpty } from './utils/index.js'

export const convertNumber = (number, base, newBase) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    if (!isString([number, base, newBase]) || isEmpty([number, base, newBase])) {
        return { result: '', error: 'Todos os campos são obrigatórios.' }
    }

    const baseNum = parseInt(base)
    const newBaseNum = parseInt(newBase)

    if (isNaN(baseNum) || isNaN(newBaseNum) || baseNum < 2 || baseNum > 36 || newBaseNum < 2 || newBaseNum > 36) {
        return { result: '', error: 'As bases devem ser números entre 2 e 36.' }
    }
    
    if (hasForbiddenDigits(chars, number, base)) {
        return { result: '', error: `O número contém dígitos inválidos para a base ${base}.` }
    }

    let numberInDecimal = 0n
    const bigIntBase = BigInt(baseNum)
    const reversedNumber = number.toUpperCase().split('').reverse().join('')

    for (let i = 0; i < reversedNumber.length; i++) {
        const digitValue = BigInt(chars.indexOf(reversedNumber[i]))
        const exponent = BigInt(i)
        numberInDecimal += digitValue * (bigIntBase ** exponent)
    }

    if (numberInDecimal === 0n) {
        return { result: '0', error: null }
    }

    let resultNumber = ''
    const bigIntNewBase = BigInt(newBaseNum)

    while (numberInDecimal > 0n) {
        const remainder = numberInDecimal % bigIntNewBase
        resultNumber = chars[Number(remainder)] + resultNumber
        numberInDecimal = numberInDecimal / bigIntNewBase
    }
    
    return { result: resultNumber, error: null }
}