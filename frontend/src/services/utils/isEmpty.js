export const isEmpty = (array) => {
    for(let index = 0; index < array.length; index++) {
        let item = array[index]
        if(item === '') {
            return true
        }
    }
    return false
}