import { Box as IBox } from "./types";

const methods = {
	test: "Arslonbek",
	run() {
		console.log(`${this.name} is running...`);
	},
};

// /* Factory function */
function createBox(name: string, size = 30): IBox {
	const box = Object.create(methods);

	box.name = name;
	box.size = size;

	return box;
}

// const boxes: Box[] = [];
// for (let i = 1; i <= 10; i++) {
// 	const box = createBox(`Box-${i}`, 10 * i);
// 	boxes.push(box);
// }

// const [box1, box2] = boxes;

// console.log(box1);
// console.log(box2);

// console.log(box1.run === box2.run);

/* Constructor Function */
function Box(name: string, size: number) {
	this.name = name;
	this.size = size;
}

Box.prototype.run = function () {
	console.log(`${this.name} is running...`);
};

/* @ts-ignore */
// const box1 = new Box("Box-1", 20);
// console.log(box1);
// console.log(box1.__proto__);
// console.log(box1.__proto__.__proto__);
// console.log(box1.__proto__.__proto__.__proto__);

// const el = document.createElement("div") as any;
// const { log, dir } = console;

// dir(el);
// log(el.__proto__); // HTMLDivElement
// log(el.__proto__.__proto__); // HTMLElement
// log(el.__proto__.__proto__.__proto__); // Element
// log(el.__proto__.__proto__.__proto__.__proto__); // Node
// log(el.__proto__.__proto__.__proto__.__proto__.__proto__); // EventTarget
// log(el.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // Object
// log(el.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // null

// const mouseEvent = new MouseEvent("click") as any;
// console.log(mouseEvent);
// console.log(mouseEvent.__proto__); // MouseEvent
// console.log(mouseEvent.__proto__.__proto__); // UIEvent
// console.log(mouseEvent.__proto__.__proto__.__proto__); // Event
