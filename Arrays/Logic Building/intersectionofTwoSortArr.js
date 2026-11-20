// Given two sorted arrays, nums1 and nums2, return an array containing the intersection of these two arrays. Each element in the result must appear as many times as it appears in both arrays; that is, if an element appears x times in nums1 and y times in nums2, it should appear min(x, y) times in the result.

// The intersection of two arrays is an array where all values are present in both arrays. Since both input arrays are sorted, the resulting intersection array should also be in sorted order.
// Example 1:

// Input: nums1 = [1, 2, 2, 3, 3, 3], nums2 = [2, 3, 3, 4, 5, 7]

// Output: [2, 3, 3]

class Solution {
    intersectionArray(nums1, nums2) {
        let i = 0;
        let j = 0;
        let intersectionArr = [];

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] === nums2[j]) {
                intersectionArr.push(nums1[i]);
                i++;
                j++;
            } else if (nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }

        return intersectionArr;
    }
}