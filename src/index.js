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

const items = ["Arslonbek", "Boburbek", "Jamshidbek", "Maftunxon", "Mariyaxon"];

function girlHi(name) {
	console.log(`🙋‍♀️: ${name}`);
}

function boyHi(name) {
	console.log(`🙋🏻‍♂️: ${name}`);
}

items.forEach(function (item, idx) {
	if (item.endsWith("bek")) boyHi(item);
	if (item.endsWith("xon")) girlHi(item);
});
