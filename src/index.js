module.exports = function reverse (n) {
    return +(String((n > 0) ? n : (n * (-1))).split('').reverse().join(''));
}
