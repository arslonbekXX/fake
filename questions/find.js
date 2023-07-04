console.log("-------FIND------");

/**
 * @param {string[]} texts
 * @param {string} pattern
 * @return {string[]}
 */
function find(texts, pattern) {}

console.log(find(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")); // ["mee","aqq"]
console.log(find(["pdp", "g-9", "pdp-g-8", "pdp-g-7", "aba", "cbc"], "mam")); // ["pdp","aba","cbc"]
console.log(find(["a", "b", "c", "bc"], "c")); // ["a","b","c"]
console.log(find(["pdp", "abb", "baa", "poo"], "app")); // ["abb","baa", "poo"]
