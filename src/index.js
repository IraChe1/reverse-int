module.exports = function reverse(n) {
    const reverseStr = n.toString().split('').reverse().join('');
    const reverseNum = Number.parseInt(reverseStr)
    return reverseNum;
}