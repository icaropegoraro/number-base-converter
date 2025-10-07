export const isString = (array) => {
     for(let i = 0; i < array.length; i++) {
          let item = array[i]
          if(typeof item === "string") {
               return true
          }
     }
     return false
}