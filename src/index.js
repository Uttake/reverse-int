module.exports = function reverse (n) {
    let absNum = Math.abs(n).toString()
    return +absNum.split('').reverse().join('')  
}
