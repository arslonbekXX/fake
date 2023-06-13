const person = {
	name: "arslonbek",
};


person["name"] // "arslonbek"

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const hashMap = {};

	for (let i = 0; i <= nums.length; i++) {
		const item = nums[i]; // 2
		const toFind = target - item; // 7

		if (hashMap[item] !== undefined) { //
			return [hashMap[item], i];
		} else {
			hashMap[toFind] = i;
		}
	}
};

/**
 * Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *
 */
