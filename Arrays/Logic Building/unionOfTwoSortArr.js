// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.

// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.
// Example 1:

// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]

// Output: [1, 2, 3, 4, 5, 7]


class Solution {
    unionArray(nums1, nums2) {
        let i = 0;
        let j = 0;
        let unionArr = [];

        while (i < nums1.length && j < nums2.length) {
            let value;

            if (nums1[i] < nums2[j]) {
                value = nums1[i];
                i++;
            } else if (nums1[i] > nums2[j]) {
                value = nums2[j];
                j++;
            } else {
                value = nums1[i];
                i++;
                j++;
            }

            if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== value) {
                unionArr.push(value);
            }
        }

        while (i < nums1.length) {
            if (unionArr[unionArr.length - 1] !== nums1[i]) {
                unionArr.push(nums1[i]);
            }
            i++;
        }

        while (j < nums2.length) {
            if (unionArr[unionArr.length - 1] !== nums2[j]) {
                unionArr.push(nums2[j]);
            }
            j++;
        }

        return unionArr;
    }
}