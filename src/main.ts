// function summa(a: number | string, b: number) {
//  if(typeof a === "number") {
//   a.toFixed()
//  }else {
//   a.substring()
//  }
// 	return a.toFixed(2) + b;
// }

// summa(20.21322, 40);

// type Union = number | string;
// type Union2 = Union | boolean;
// type Num = number;

// const age: Num = 20;
// const value: Union = "boburbek";
// const value2: Union = 20;
// const value3: Union2 = false;

// /*----------- */

// type User = {
// 	id: number;
// 	age: number;
// 	friends: User[];
// };

// const users: User[] = [
// 	{
// 		id: 10,
// 		age: 20,
// 		friends: [],
// 	},
// 	{
// 		id: 123,
// 		age: 12,
// 		friends: [
// 			{
// 				id: 14,
// 				age: 23,
// 				friends: [],
// 			},
// 		],
// 	},
// ];

type Person = {
	name: string;
	age: number;
	address?: {
		state: string;
		city: string;
	};
	run: () => void;
};

const person: Person = {
	name: "Kent",
	age: 30,
	address: {
		state: "UZB",
		city: "Tashkent city",
	},
	run() {
		console.log(`${this.name} is running...`);
	},
};

console.log(person.address?.city);
