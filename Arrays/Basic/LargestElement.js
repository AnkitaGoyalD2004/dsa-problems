// Given an array of integers nums, return the value of the largest element in the array
// Example 1:

// Input: nums = [3, 3, 6, 1]
// Output: 6

class Solution {
    largestElement(nums) {
let max = nums[0] ;
     for (let i = 0 ; i < nums.length ; i++){
        if(max <  nums[i])
            max = nums[i]
     }
   return max
    }
}