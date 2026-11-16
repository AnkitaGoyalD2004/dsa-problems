// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.
// Example 1:

// Input: nums = [8, 8, 7, 6, 5]

// Output: 7

class Solution {
    secondLargestElement(nums) {
        let max = nums[0];
        let second_max = -1;
         for(let i = 1 ; i< nums.length ; i++){
            if(max < nums[i]){
                second_max = max;
                max = nums[i];
            }else if (nums[i] < max && nums[i] > second_max){
                second_max = nums[i]
            }
         }
         return second_max;
    }
}