import { hasForbiddenDigits, isString, isEmpty } from './utils/index.js'

export const convert = ((number, base, newBase) => {
     const digitChars  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     let decimalNumber = 0

     let convertedNumber = ''
     
     if (isEmpty([number, base, newBase])) {
          return console.log('Insira um número que não seja vazio')
     }
     
     if (hasForbiddenDigits(digitChars, number, base)) {
          return console.log('Essa base não aceita algum caractere de seu número')
     }

     if (!isString(number) || !isString(base) || !isString(newBase)) {
          return console.log('Insira o número em formato de string (ex: convertOtherToDecimal("1100", "2").')
     }

     number = number.split('').reverse().join('')
     base = parseInt(base)

     for (let charIndex = 0; charIndex <= (number.length - 1); charIndex++) {
          let numberToAdd = parseInt(number[charIndex]) * base ** charIndex
          decimalNumber += numberToAdd
     }

     number = decimalNumber

     let absoluteValue = Math.abs(number)

     if (isNaN(number) || isNaN(newBase)) {
          return console.log("Insira um número válido no número ou nas bases")
     }

     const isNegative = number < 0
     const isZero = number === 0

     if (isZero) {
          convertedNumber = '0'
          console.log(convertedNumber)
          return convertedNumber
     }

     while (absoluteValue > 0) {
          let remainder = (absoluteValue % newBase)
          absoluteValue = Math.floor(absoluteValue / newBase)
          convertedNumber = digitChars[remainder] + convertedNumber
     }

     if (isNegative) {
          convertedNumber = '-' + convertedNumber
     }

     console.log(convertedNumber)

})("1100", "", "10")