"use strict";
/* 05.08.23(64) */

/* Factory Function */
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

// const box1 = createBox("Box-1", 20, "Red");
// const box2 = createBox("Box-2", 40, "Black");

// console.log("box1 = ", box1);
// console.log("box2 = ", box2);

// const str = "lion"; // new String("lion").valueOf()

/* Constructor Function */
function Box(name, size, color) {
	this.name = name;
	this.size = size;
	this.color = color;
}


Box.prototype.run = function () {
	console.log(`${this.name} is running...`);
};
Box.prototype.eat = function () {
	console.log(`${this.name} is eating...`);
};
Box.prototype.jump = function () {
	console.log(`${this.name} is jumping...`);
};

const box1 = new Box("Box-1", 20, "Black");
console.log(box1);

const box2 = new Box("Box-2", 40, "Red");
console.log(box2);

console.log(box1.run === box2.run);
