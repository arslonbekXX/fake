/*-----16.05.23(31)----- */
/* Values and Variables */
// let a = 20; // SM_a_001
// let b = a;
// a = 40;

// console.log(a); //
// console.log(b); //

// let myAge = 20;

// console.log(myAge);

// console.log(a);
// var a = 20;

// console.log(b);
// let b = 20;

// function app() {
// 	console.log(a);
// 	var a = 20;
// }

// app()

/* VAR */

// function run() {
// 	for (var i = 0; i < 10; i++) {
// 		console.log(`[FOR] i = ${i}`);
// 	}

// 	console.log(`i = ${i}`);
// }

// console.log(`i = ${i}`);

// run();

// function run2() {
// 	for (let i = 0; i < 10; i++) {
// 		console.log(`[FOR] i = ${i}`);
// 	}

// 	console.log(`i = ${i}`);
// }

// console.log(`i = ${i}`);

// run2();

// console.log(a);
// var a = 20;

/**
 * var: function scope -> function {}
 * const | let -> block scope
 *
 *
 *  */

// {
// 	{
// 		{
// 			var temp = "arslonbek";
// 			let a = 20;
// 		}
// 	}
// 	console.log(temp);
// }

// {
// 	function app() {
// 		let a = 20;
// 	}
// 	console.log(a);
// }

// var a = 40;
// function app() {
// 	if (a) console.log(a);

// 	if (a > 10) console.log(`${a} bigger than 10`);

// 	var a = 50;
// 	console.log(a);
// }

// app()

/**
 * ------STACK MEMORY------
 *-----------------------------
 *    address    |      value
 *-----------------------------
 *      001      |     HM_0001
 *-----------------------------
 *      002      |     HM_0001
 *-----------------------------
 *
 */

/**
 * ------HEAP MEMORY------
 *-----------------------------
 *    address    |      value
 *-----------------------------
 *     0001      |     [10,2,3]
 *
 */

// const nums = [1, 2, 3]; // SM_nums_001 = HM_0001
// const nums1 = nums; // SM_nums1_002 = HM_0001
// nums1[0] = 10; // HM_0001[0] = 10

// console.log(nums); // HM_0001
// console.log(nums1); // HM_0001

// let a = 20;

// console.log((a += 1));
// console.log(a);

// console.log(20 === 20);
// console.log(20 === "20");
// console.log(20 === Number("20"));

// const age = 21;
// console.log("My age : " + age);
// console.log(`

// My age : ${age}

//  arslonbek alimbaev

// `);

// function app() {
// 	console.log("hello world");
// }

// function app() {
// 	if (20 > 10) {
// 		return "togri";
// 	} else {
// 		return "notogri";
// 	}
// }

// const result = if(20 > 10) return true; else return false;
// const result1 = app

/*Type Conversion */
// const a = function () {};

// const b = "20.54";
// const c = Number(b);
// console.log(c);

// const x = Boolean(a);
// console.log(x);

/*Type Coercion */

// const x = 10;
// const y = "10";

// const z = x + +y;
// console.log(z);
// console.log(x);
// console.log(Number(y));
// console.log(+y);
// console.log(x === Number(y));
// console.log(x == y);

// const a = 11;
// const b = "1";

// const c = a - b; // 10
// console.log(c);

/**
 * Falsy
 *
 * Number : 0
 * String : ""
 * undefined
 * null
 * false
 * NaN
 */

// const a = function () {};
// const a = 20;

// if (function () {}) {
// 	console.log("katta");
// } else {
// 	console.log("kichik");
// }

// const a = "z";
// const b = "w";

// console.log(a > b);

// const result = ("arslonbek" && false) || "boburbek";
// const result = (0 && 1) || "boburbek";
// console.log(result);

// const name1 = "arslonbek";
// const last1 = "Tajebayev";
// console.log(`hello ${name1} ${last1}`);

// const name2 = "erkin";
// const last2 = "Boltaboyev";
// console.log(`hello ${name2} ${last2}`);

// const name3 = "sardorbek";
// const last3 = "Torayev";
// console.log(`hello ${name3} ${last3}`);

// function hi(name, last) {
// 	console.log(`hello ${name} ${last}`);
// }

// const result = hi("arslonbek", "Tajebayev");
// console.log(result);
// hi("erkin", "Boltaboyev");
// hi("sardorbek", "Torayev");

/* VOID FUNCTION */
// function summa(a, b) {
// 	const total = a + b;
// 	console.log(total); // 30

// 	return;
// }

// const result = summa(10, 20);
// console.log(result); // 30
/* NOVOID FUNCTION */

// function functionName(parametrs) {...body...}

// hi("arslonbek");
// function hi(a, b, c) {
// 	console.log(`hi ${a}`);
// }
// hi("arslonbek");

// run("Sardorbek");
// const run = function (name) {
// 	console.log(`${name} is running...`);
// };

// run("Boburbek");

// function move(name, fn) {
// 	console.log("[MOVE]: starting move");
// 	fn(name);
// }

// function jump(name) {
// 	console.log(`[JUMP]: ${name} is jumping...`);
// }

// function run(name) {
// 	console.log(`[RUN]: ${name} is running...`);
// }

// move("Kent", jump);
// move("Mark", run);

// let str = "hello world";
// function subString(startIdx, lastIdx = str.length) {
// 	let result = "";

// 	for (let i = startIdx; i < lastIdx; i++) {
// 		result += str[i];
// 	}

// 	return result;
// }

// const first = subString(0);
// console.log(first);

function find(str) {
	let max = 0;

	for (let i = 0; i < str.length; i++) {
		const char = str[i]; // b
		let counter = 1; // 1
		for (let j = i + 1; j < str.length; j++) {
			if (char === str[j]) counter++; // b
		}
		if (counter > max) max = counter; // 4  -> max = 5
	}

	return max;
}

function find2(str) {
	let max = "";
	let result = ""

	for (let i = 0; i < str.length; i++) {
		const char = str[i]; // b
		let counter = 1; // 1
		for (let j = i + 1; j < str.length; j++) {
			if (char === str[j]) counter++; /
		}
		if (counter > max)
			max = counter
			result = char
	}

	return result;
}

const result = find2("abcaabbcaabc"); // 5

console.log(result);


function search(str) {


}

search("abcaabbcaabc") // "abc"