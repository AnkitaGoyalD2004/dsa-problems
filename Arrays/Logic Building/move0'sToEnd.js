// Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same.

// This must be done in place, without making a copy of the array.
// Example 1:

// Input: nums = [0, 1, 4, 0, 5, 2]

// Output: [1, 4, 5, 2, 0, 0]

class Solution {
    moveZeroes(nums) {
        let j = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                let k = nums[j];
                nums[j] = nums[i];
                nums[i] = k;

                j++;
            }
        }

        return nums;
    }
}