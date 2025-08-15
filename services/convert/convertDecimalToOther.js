import {  isDecimal, isString, hasForbiddenDigits } from "./utils/index.js"

let digitChars  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const convertDecimalToOther = (number, base) => {

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