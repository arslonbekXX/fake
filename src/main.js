"use strict";
/* 01.08.23(62) */

// const person = {
// 	name: "Kent",
// 	age: 20,
// 	address: {
// 		state: "UZB",
// 		city: "Tashkent",
// 	},
// };

// const person1 = { ...person, address: { ...person.address } };
// person1.age = 30;

// person1.address.state = "ENG";

// console.log(person.address.state); // ENG

/**
 * HEAP MEMORY
 * 0001 = { name: "Kent", run: HM_0002, jump: HM_0003 }
 * 0002 = [fn]
 * 0003 = [fn]
 *
 *
 */
// const person = {
// 	name: "Kent",
// 	run: function () {
// 		console.log("Kent is running...");
// 	},
// 	jump() {
// 		console.log("Kent is jumping...");
// 	},
// };

// person.run();
// person.jump();

// const kentPerson = {
// 	name: "Kent",
// 	run() {
// 		console.log(`${this.name} is running...`);
// 	},
// };

// const person1 = {
// 	name: "Mark",
// 	run() {
// 		console.log(`${this.name} is running...`);
// 	},
// };

// kentPerson.run();
// person1.run();

// function app() {
// 	console.log(this);
// }

// app();

// const test = {
// 	groups: ["g-7", "g-19"],
// 	tag: "h1",
// 	convertor() {
// 		return this.groups.map((group) => `<${this.tag}>${group}</${this.tag}>`);
// 	},
// };

// const result = test.convertor(); //

// console.log(result);

// const person1 = {
// 	name: "Kent",
// 	run() {
// 		console.log(`[🏃‍♂️] ${this.name} is running...`);
// 	},
// 	fullName() {
// 		console.log(this.name, person1.name);
// 	},
// };

// const person2 = {
// 	name: "Maya",
// 	run() {
// 		console.log(`[🏃‍♀️] ${this.name} is running...`);
// 	},
// 	fullName() {
// 		console.log(this.name, person2.name);
// 	},
// };

// const myRun = person1.run.bind(person2);
// const myRun2 = myRun.bind(person1);

// myRun();
// myRun2();

// const math = {
// 	init: 20,
// 	summa(a, b, c) {
// 		return this.init + a + b + c;
// 	},
// };

// const math2 = { init: 30 };
// const result = math.summa.apply(math2, [10, 20, 30]);
// console.log(result);

const methods = {
	eat() {
		console.log(`${this.name} is eating...`);
	},
	jump() {
		console.log(`${this.name} is jumping...`);
	},
	run() {
		console.log(`${this.name} is running...`);
	},
};

function createBox(name, size, color) {
	const box = Object.create(methods);
	box.name = name;
	box.size = size;
	box.color = color;

	return box;
}

const colors = ["red", "green", "blue", "yellow"];
const color = () => colors[Math.floor(Math.random() * colors.length)];

const boxes = [];
for (let i = 0; i < 10; i++) {
	const box = createBox(`Box-${i + 1}`, 10 * i, color());
	box.eat()
	boxes[i] = box;
}
