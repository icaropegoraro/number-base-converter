export const isDecimal = (data) => {
     return !Number.isInteger(parseFloat(data))
}