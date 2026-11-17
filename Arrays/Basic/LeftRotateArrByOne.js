// Given an integer array nums, rotate the array to the left by one.

// Note: There is no need to return anything, just modify the given array.
// Example 1:

// Input: nums = [1, 2, 3, 4, 5]

// Output: [2, 3, 4, 5, 1]

class Solution {
    rotateArrayByOne(nums) {
     for(let i = 0 ; i < nums.length -1 ; i++){
        let k = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = k 
     }
     return nums
    }
}