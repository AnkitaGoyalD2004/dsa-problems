// 268 on leetcode

/**
 * @param {number[]} nums
 * @return {number}
 */

//approach 1 : we use sorting to get the result 
var missingNumber = function(nums) {
     nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i) {
                return i;
            }
        }

        return nums.length;
};

//approach 2: Using XOR operator
// XOR : it is a bitwise operator represented by ^ in js 

// two properties of XOR operator
// 1. a ^ a = 0
// 2. a ^ 0 = a
class Solution {
    missingNumber(nums) {
        let xor = 0;

        for (let i = 0; i <= nums.length; i++) {
            xor ^= i;
        }

        for (let i = 0; i < nums.length; i++) {
            xor ^= nums[i];
        }

        return xor;
    }
}