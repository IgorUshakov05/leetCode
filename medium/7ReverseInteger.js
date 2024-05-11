// 7. Reverse Integer
// Medium
// Topics
// Companies
// Given a signed 32-bit integer , return with its digits reversed. If reversing causes the value to go outside the signed 32-bit integer range , then return .xxx[-231, 231 - 1]0

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1


var reverse = function(x) {
    let result = 0;
    if (x < 0) {
        result = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
    } else {
        result = parseInt(String(x).split('').reverse().join(''));
    }

    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
        return 0;
    }

    return result;    
};