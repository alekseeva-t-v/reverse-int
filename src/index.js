/**
 * Меняет местами цифры исходного числа, возвращает преобразованное число.
 *
 * @param {number} num Возводимое в степень число.
 * @return {number} преобразованное число.
 */
module.exports = function reverse(num) {
    return +String(num > 0 ? num : num * -1)
        .split('')
        .reverse()
        .join('');
};
