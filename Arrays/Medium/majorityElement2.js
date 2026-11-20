// 229. Majority Element II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let candidate1 = 0;
    let candidate2 = 0;
    let count1 = 0;
    let count2 = 0;  

    for (let i = 0; i < nums.length; i++) {
        if (candidate1 === nums[i]) {
            count1++;
        } else if (candidate2 === nums[i]) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = nums[i];
            count1++;
        } else if (count2 === 0) {
            candidate2 = nums[i];
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    let result = [];
    count1 = 0;
    count2 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate1) {
            count1++;
        } else if (nums[i] === candidate2) {
            count2++;
        }
    }

    if (count1 > Math.floor(nums.length / 3)) {
        result.push(candidate1);
    }

    if (count2 > Math.floor(nums.length / 3)) {
        result.push(candidate2);
    }

    return result;  
};