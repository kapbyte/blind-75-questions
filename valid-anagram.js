// Question: https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    
    let hashMap = new Map();
    for (let i = 0; i < s.length; i++) {
        // check if key already in map
        hashMap.has(s[i]) ? hashMap.set(s[i], hashMap.get(s[i]) + 1) : hashMap.set(s[i], 1);
    }
    
    for (let i = 0; i < t.length; i++) {
        if (hashMap.has(t[i]) && hashMap.get(t[i]) > 0) {
            hashMap.set(t[i], hashMap.get(t[i]) - 1);
        } else {
            return false;
        }
    }
    return true;
};

// Time: O(n), Space: O(n)