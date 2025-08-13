import { hasLetters, isDecimal, isString, hasForbiddenDigits } from "./utils/index.js"

let digitChars  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const convertDecimalToOther = (number, base) => {

     let convertedNumber = ''

     if (!isString(number) || !isString(base)) {
          return console.log('Insira o número em formato de string (ex: convertDecimalToOther("12", "2")')
     }

     if (isDecimal(number) || isDecimal(base)) {
          return console.log('Insira um número ou base que não seja decimal')
     }

     number = parseInt(number)
     base = parseInt(base)
     let absoluteValue = Math.abs(number)

     if (isNaN(number) || isNaN(base)) {
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
          let remainder = (absoluteValue % base)
          absoluteValue = Math.floor(absoluteValue / base)
          convertedNumber = digitChars[remainder] + convertedNumber
     }

     if (isNegative) {
          convertedNumber = '-' + convertedNumber
     }

     console.log(convertedNumber)

     return convertedNumber
}

const convertOtherToDecimal = (number, base) => {
     let convertedNumber = 0

     let isEmpty = number === ''

     if (hasForbiddenDigits(digitChars, number, base)) {
          return console.log('Essa base não aceita esse número (ex: 1200 (base binário) não existe, pois o caractere "2" não existe na base binária).')
     }

     if (isEmpty) {
          return console.log('Insira um número não nulo')
     }

     if (!isString(number) || !isString(base)) {
          return console.log('Insira o número em formato de string (ex: convertOtherToDecimal("1100", "2").')
     }

     number = number.split('').reverse().join('')
     base = parseInt(base)

     for (let charIndex = 0; charIndex <= (number.length - 1); charIndex++) {
          let numberToAdd = parseInt(number[charIndex]) * base ** charIndex
          convertedNumber += numberToAdd
     }

     console.log(`${convertedNumber}`)

     return convertedNumber
}

convertDecimalToOther("12", "2.5")
convertOtherToDecimal('1100', '2')