console.log("-------FIND------");

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function find(words, pattern) {
	const result = [];

	function wordToNumber(word) {
		const viewNums = [];
		let counter = 1;
		for (let i = 0; i < word.length; i++) {
			const char = word[i];
			const oldIdx = word.substring(0, i).indexOf(char);
			const num = oldIdx === -1 ? counter++ : viewNums[oldIdx];
			viewNums.push(num);
		}
		return viewNums.join("");
	}

	for (let word of words) {
		const nums = wordToNumber(word);
		result.push(nums);
	}

	const numberPattern = wordToNumber(pattern);

	return words.filter((word, idx) => result[idx] === numberPattern);
}
//                 123    123    122    122    121    111     122
console.log(find(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")); // ["mee","aqq"]
console.log(find(["pdp", "g-9", "pdp-g-8", "pdp-g-7", "aba", "cbc"], "mam")); // ["pdp","aba","cbc"]
console.log(find(["a", "b", "c", "bc"], "c")); // ["a","b","c"]
console.log(find(["pdp", "abb", "baa", "poo"], "app")); // ["abb","baa", "poo"]
