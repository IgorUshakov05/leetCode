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
    
    let bit = Math.pow(2,31) - 1
        let result = Number(-((-x).toString().split("").reverse().join('')))
        if(result > (bit) || result < -(bit)){
            return 0
            }
    if (x<0) {
        return result
    }
    return Number((x).toString().split("").reverse().join(''))
    
};

console.log(reverse(521))