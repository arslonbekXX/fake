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

const age = 21;
console.log("My age : " + age);
console.log(`

My age : ${age}


 arslonbek alimbaev

`);
