// 1346. Check If N and Its Double Exist

// Given an array arr of integers,
// check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input:
let arr = [10, 2, 0, 0, 3];
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
// Example 2:
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const output = checkIfExist(arr);
console.log(output);
function checkIfExist(A) {
  const M = {};
  for (let a of A) {
    M[a] = true;
    if (M[a * 2] || M[a / 2]) {
      return true
    }
  }
  return false;
}

// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
// Example 3:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

// Constraints:

// 2 <= arr.length <= 500
// -10^3 <= arr[i] <= 10^3
