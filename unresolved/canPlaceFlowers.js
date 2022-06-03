// 605. Can Place Flowers

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let left = n,
    i = 0;
  while (i < flowerbed.length) {
    if (flowerbed[i]) {
      i += 2;
      continue;
    }
    if (flowerbed[i - 1]) continue;
    if (flowerbed[i + 1]) {
      i += 3;
      continue;
    }
    // flowerbed[i] = true
    left--;
    i += 2;
  }
  return left <= 0;
};

/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/
