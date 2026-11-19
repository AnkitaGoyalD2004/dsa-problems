// 26 on leetcode

class Solution {
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;

        let j = 0;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[j]) {
               let k = nums[i]
               nums[i] = nums[j + 1]
                nums[j + 1] = k
                 j++;
            }
        }

        return j + 1;
    }
}