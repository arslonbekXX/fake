/*--------30.05.23(37)------ */

// function createIncrement() {
// 	let memory = {
// 		boburbek: 2,
// 	};

// 	return function (name) {
// 		// boburbek
// 		memory[name] = memory[name] ? memory[name] + 1 : 1;
// 		console.log(`${name} = ${memory[name]}`); // boburbek = 2
// 	};
// }

// const increment = createIncrement();

// increment("boburbek"); // boburbek = 1
// increment("boburbek"); // boburbek = 2
// increment("jamshidbek"); // jamshidbek = 1
// increment("nurbek"); // nurbek = 1
// increment("arslonbek"); // arslonbek = 1
// increment("boburbek"); // boburbek = 3

// function createIncrement() {
// 	let counter = 0;

// 	function test() {
// 		return ++counter;
// 	}

// 	return test;
// }

// const increment = createIncrement();

// console.log(increment()); // 1
// console.log(increment()); // 2

// function sum() {
// 	let a = 20;
// 	let b = 30;

// 	return 50;
// }

// const result = sum(); // 50

/*--------01.06.23(38)------ */

/* Method vs Function */
// const str = "Hello world"; // new String("Hello world").valueOf()
// const str1 = new String("Hello world");

// console.log(str);
// console.log(str1);

// Number | String | Boolean | Null | Undefined
// Array | Object | Function

// const person = {
// 	name: "arslonbek",
// 	run: function () {},
// 	jump() {
// 		function app() {}
// 	},
// };
// function app() {}

// function hi(firstName, callback) {
// 	console.log("calling callback function...");

// 	callback(firstName);
// }

// function hello(name) {
// 	console.log("hello " + name);
// }
// function hello2(name) {
// 	console.log("🙋‍♀️ hello " + name);
// }

// hi("arslonbek", hello);
// hi("jamshidbek", hello2);

// function first(callback) {} // HOF
// function second() {
// 	function app() {}
// 	return app;
// } // HOF

/* Array Methods */

// for (let i = 0; i < names.length; i++) {
// 	const name = names[i];
// 	hello(name);
// }

// for (let i = 0; i < names.length; i++) {
// 	const name = names[i];
// 	salom(name);
// }

// for (let i = 0; i < names.length; i++) {
// 	const name = names[i];
// 	qalaysan(name);
// }

// const items = ["Arslonbek", "Maftunxon", "Boburbek", "Jamshidbek", "Mariyaxon"];

// function girlHi(name, idx) {
// 	console.log(`[🙋‍♀️][${idx}]: ${name}`); // [🙋‍♀️][1]: Maftunxon, [🙋‍♀️][4]: Mariyaxon
// }

// function boyHi(name, idx) {
// 	console.log(`[🙋🏻‍♂️][${idx}]: ${name}`);
// }
// function personHi(name, idx) {
// 	console.log(`[🙋🏻‍♂️🙋‍♀️][${idx}]: ${name}`);
// }

// for (let idx = 0; idx < items.length; idx++) {
// 	const item = items[idx];
// 	if (item.endsWith("bek")) boyHi(item, idx);
// 	else girlHi(item, idx);
// }

// items.forEach(personHi);

// function summa(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c;
// 		};
// 	};
// }

// const result = summa(10)(20)(30);

// console.log(60);

/* ARRAY MAP Method */

// function multiplyByThree(num, idx) {
// 	if (idx % 2 === 1) return 0;
// 	return num * 3;
// }

// function map(cb, array = []) {
// 	const result = []; // []

// 	for (let i = 0; i < array.length; i++) {
// 		result[i] = cb(array[i], i);
// 	}

// 	return result;
// }

// const nums = [1, 2, 3, 4, 5];
// const native_nums = nums.map(multiplyByThree);
// const custom_nums = map(multiplyByThree, nums);

// console.log(nums);
// console.log(native_nums);
// console.log(custom_nums);

// const names = ["arslonbek", "boburbek"];

// const items = ["<li>arslonbek</li>", "<li>boburbek</li>"];

// const _items = names.map(function (name) {
// 	return `<li>${name}</li>`;
// });

/* ARRAY PUSH METHOD */
/* ARRAY POP METHOD */
/* ARRAY SHIFT METHOD */
// const nums = [1, 2, 3];
// console.log(nums);
// const result = nums.push(nums.shift());
// console.log(nums);
// console.log(result);
/* ARRAY UNSHIFT METHOD */

/**
 * HEAP Memory
 * --------------
 * 0001 = [1,4,3]
 *
 *
 */

// const x = [1, 2, 3]; // SM_x_001 = HM_0001
// const y = x; // SM_y_002 = HM_0001

// y[1] = 4; // HM_0001[1] = 4

// console.log(x); // [1,4,3]
// console.log(y); // [1,4,3]

// function map(array = []) {
// 	// SM_array_003 = HM_0001
// }

// map(x); // map(HM_0001)

// const groups = ["pdp-g-10", "pdp-f-20", "pdp-g-11", "pdp-b-10"];
// const result = [];

// for (let i = 0; i < groups.length; i++) {
// 	const group = groups[i];
// 	if (group.startsWith("pdp-g")) result.push(group);
// }

/* FOR OF */
// for (let group of groups) {
// 	if (group.startsWith("pdp-g")) result.push(group);
// }

/* FOR IN */
// for (let idx in groups) {
// 	console.log(idx);
// 	console.log(groups[+idx]);
// 	// if (group.startsWith("pdp-g")) result.push(group);
// }

// console.log(result);

/* FILTER vs MAP  */
// const magicWord = "pdp-g";
// const groups = ["pdp-g-10", "pdp-f-20", "pdp-g-11", "pdp-b-10"];
// const result = groups.filter(function (group) {
// 	return group.startsWith(magicWord);
// });

// console.log(result);

// const nums = [1, 2, 3, 4, 5, 6];

// function test(acc, cur) {
// 	return acc + cur;
// }

// const summa = nums.reduce(test, 0);

// function reduce(fn, initialValue) {
// 	let acc = initialValue || nums[0];

// 	for (let i = initialValue ? 0 : 1; i < nums.length; i++) {
// 		acc = fn(acc, nums[i]);
// 	}

// 	return acc;
// }

// console.log("summa = ", summa);

/* Array find method */

// const nums = [21, 50, 60];

// const num = nums.find(function (num) {
// 	return num % 10 === 0;
// });

// const numIdx = nums.findIndex(function (num) {
// 	return num % 10 === 0;
// });

// const names = ["arslonbek", "boburbek", "jamshidbek", "maftuna"];

// function myFn(acc, cur = "", idx, list) {
// 	const icon = cur.endsWith("bek") ? "👦🏻" : "👧🏻";
// 	const name = cur[0].toUpperCase() + cur.substring(1);

// 	acc += `[${icon}][${name}]${idx === list.length - 1 ? "" : "-"}`;

// 	return acc;
// }

// const result = names.reduce(myFn, "");

// console.log(result);

// "[👦🏻][Arslonbek]-[👦🏻][Boburbek]-[👦🏻][Jamshidbek]-[👧🏻][Maftuna]"

function summaX(x) {
	if (x === 1) return 1;

	return x + summaX(x - 1);
}

const result = summaX(10); // 55

/**
 * i = 1; x = 10;  -> 10 + summaX(9)
 * i = 2; x = 9;  -> 9 + summaX(8)
 * i = 3; x = 8;  -> 8 + summaX(7)
 * i = 4; x = 7;  -> 7 + summaX(6)
 * i = 5; x = 6;  -> 6 + summaX(5)
 * i = 6; x = 5;  -> 5 + summaX(4)
 * i = 7; x = 4;  -> 4 + summaX(3)
 * i = 8; x = 3;  -> 3 + summaX(2)
 * i = 9; x = 2;  -> 2 + summaX(1)
 * i = 10; x = 1;  -> 1
 *
 *
 *
 *
 */

console.log(result);

function squareUp(n) {
	const result = [];

	for (let i = 1; i <= n; i++) {
		for (let j = n; j >= 1; j--) {
			result.push(j <= i ? j : 0);
		}
	}

	return result;
}


/**
 * squareUp(3) → [0,0,1,0,2,1,3,2,1]
 *
 *
 * i = 1;
 *    j = 3; result = [0,]
 *    j = 2; result = [0,0]
 *    j = 1; result = [0,0,1]
 * i = 2
 *    j = 3; result = [0,0,1,0]
 *    j = 2; result = [0,0,1,0,2]
 *    j = 1; result = [0,0,1,0,2,1]
 *
 * i = 3
 *    j = 3; result = [0,0,1,0,2,1,3]
 *    j = 2; result = [0,0,1,0,2,1,3,2]
 *    j = 1; result = [0,0,1,0,2,1,3,2,1]
 *
 */