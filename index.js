const isString = (data) => {
     return typeof data === "string"
}

const isDecimal = (data) => {
     return !Number.isInteger(parseFloat(data))
}

const hasLetter = (data) => {
     const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
     for (let position = 0 ; position < letters.length ; position++) {
          if (data.includes(letters[position])) return true
          return false
     }
}

const convertDecimalToOther = (number, base) => {
     let digitChars  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
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

     if (isEmpty) {
          return console.log('Insira um número não nulo')
     }

     if (!isString(number) || !isString(base)) {
          return console.log('Insira o número em formato de string (ex: convertOtherToDecimal("1100", "2")')
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