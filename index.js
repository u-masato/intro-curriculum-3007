'use strict';

/**
 * 整数が17で割り切れるか
 * @param {integer} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
