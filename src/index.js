module.exports = function toReadable(number) {
    const nums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let strNumbers = number.toString()
    if (number < 0) return 'negative number'
    if (strNumbers.length > 3) return 'big number'
    if (number === 0) return 'zero';
    if (number < 20) return nums[number]
    if (strNumbers.length === 2) {
        if (number % 10 === 0) {
            return tens[(number / 10)]
        } else {
            return `${tens[strNumbers[0]]} ${nums[strNumbers[1]]}`
        }
    }
    if (strNumbers.length === 3) {
        if (strNumbers[1] === '0' && strNumbers[2] === '0') {
            return `${nums[strNumbers[0]]} hundred`
        } else if (strNumbers[1] === '0') {
            return `${nums[strNumbers[0]]} hundred ${nums[strNumbers[2]]}`
        } else if (strNumbers[1] === '1') {
            return `${nums[strNumbers[0]]} hundred ${nums[strNumbers[1] + strNumbers[2]]}`
        } else if (strNumbers[2] === '0') {
            return `${nums[strNumbers[0]]} hundred ${tens[strNumbers[1]]}`
        } else {
            return `${nums[strNumbers[0]]} hundred ${tens[strNumbers[1]]} ${nums[strNumbers[2]]}`
        }
    }
}
