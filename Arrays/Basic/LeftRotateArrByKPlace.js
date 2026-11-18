// Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.
// Example 1:

// Input: nums = [1, 2, 3, 4, 5, 6], k = 2

// Output: nums = [3, 4, 5, 6, 1, 2]
class Solution {
    rotateArray(nums, k) {
     const n = nums.length;
    k = k%n;
        const reverse = (start , end) => {
            while(start < end){
                let temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
                start++;
                end--;
            }
        }
        reverse(0, k-1);
        reverse(k, nums.length - 1);
        reverse(0, nums.length - 1);
         return nums;
      
    }
}