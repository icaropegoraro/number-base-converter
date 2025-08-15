import { hasForbiddenDigits, isString, isEmpty } from './utils/index.js'

export const convert = (number, base, newBase) => {
     const chars  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     let numberInDecimal = 0

     let resultNumber = ''

     if (!isString(number) || !isString(base) || !isString(newBase)) {
          return console.log('Insira o número e a base em formato de string.')
     }
     
     if (isEmpty([number, base, newBase])) {
          return console.log('Insira um número que não seja vazio')
     }
     
     if (hasForbiddenDigits(chars, number, base)) {
          return console.log('Essa base não aceita algum caractere de seu número')
     }

     number = number.split('').reverse().join('')
     base = parseInt(base)
     newBase = parseInt(newBase)

     for (let numberPosition = 0; numberPosition <= (number.length - 1); numberPosition++) {
          let digit = number[numberPosition]
          let numberToSum = parseInt(digit) * base ** numberPosition
          numberInDecimal += numberToSum
     }

     let absoluteValue = Math.abs(numberInDecimal)

     if (isNaN(numberInDecimal) || isNaN(newBase)) {
          return console.log("Insira um número válido no número ou nas bases")
     }

     const isNegative = number < 0
     const isZero = number === 0

     if (isZero) {
          resultNumber = '0'
          console.log(resultNumber)
          return resultNumber
     }

     while (absoluteValue > 0) {
          let remainder = (absoluteValue % newBase)
          absoluteValue = Math.floor(absoluteValue / newBase)
          resultNumber = chars[remainder] + resultNumber
     }

     if (isNegative) {
          resultNumber = '-' + resultNumber
     }

     console.log(resultNumber)

}