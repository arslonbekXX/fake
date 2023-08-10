// function summa(a: number | string, b: number) {
//  if(typeof a === "number") {
//   a.toFixed()
//  }else {
//   a.substring()
//  }
// 	return a.toFixed(2) + b;
// }
var _a;
const person = {
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
console.log((_a = person.address) === null || _a === void 0 ? void 0 : _a.city);
