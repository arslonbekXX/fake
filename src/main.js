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
const person = {
	name: "Kent",
	run: function () {
		console.log("Kent is running...");
	},
	jump() {
		console.log("Kent is jumping...");
	},
};

person.run();
person.jump();
