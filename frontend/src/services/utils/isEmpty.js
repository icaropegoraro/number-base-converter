export const isEmpty = (array) => {
    for(let i = 0; i < array.length; i++) {
        let item = array[i]
        if(item === '') {
            return true
        }
    }
    return false
}