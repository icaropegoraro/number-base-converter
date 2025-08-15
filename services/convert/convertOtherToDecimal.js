import {  isDecimal, isString, hasForbiddenDigits } from "./utils/index.js"

let digitChars  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const convertOtherToDecimal = (number, base) => {
    let convertedNumber = 0

    let isEmpty = number === '' || base === ''

     if (hasForbiddenDigits(digitChars, number, base)) {
          return console.log('Essa base não aceita esse número (ex: 1200 (base binário) não existe, pois o caractere "2" não existe na base binária')
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