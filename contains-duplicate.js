// Question: https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // Time: O(n), Space: O(n)
    let hashSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (hashSet.has(nums[i])) {
            return true;
        } else {
            hashSet.add(nums[i]);
        }
    }
    return false;
};