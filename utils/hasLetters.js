export const hasLetters = (data) => {
     const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
     for (let position = 0 ; position < letters.length ; position++) {
          if (data.includes(letters[position])) return true
          return false
     }
}