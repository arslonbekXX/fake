/*----------- 08.04.23(16)--------- */
/** SWAP */
// let a = 30;
// let b = 40;

// // a = a + b; // a = 70
// // b = a - b; // b = 30 -> a
// // a = a - b; // a = 40 -> b

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

/** FizzBuzz */

// let num = 15;
// let result = "";

// if (num % 3 == 0) result += "Fizz";
// if (num % 5 == 0) result += "Buzz";

// console.log(result);

/**
 * num % 3 == 0 -> "Fizz"
 * num % 5 == 0 -> "Buzz"
 * num % 15 == 0 -> "FizzBuzz"
 */

/*----------- 09.04.23(17)--------- */

// let firstName = "arslonbek";
// let lastName = "boburbekov";

/***
 * Cases
 *
 * camelCase -> firstName
 * pascalCase -> FirstName
 * snakeCase -> my_first_name
 * kebabCase -> my-first-name
 *
 */

/** For IN */
// const nums = [20, 30, 40, 50, 20];

// for (let i in nums) {
// 	const num = nums[i];
// 	console.log("num = ", num);
// }

// /** For OF */
// const nums = [20, 30, 40, 50, 20];

// for (let num of nums) {
// 	console.log("num = ", num);
// }

/**
 * Coding Challenge #1 :
 * Mark and Kent are trying to compare their BMI (Body Mass Index),
 * which is calculated using the formula:
 * BMI = mass / height ** 2
 *
 *
 * Task-1 : Store Mark's and Kent's mass and height in variables
 * Task-2 : Calculate both their BMIs using the formula (you can even implement both versions)
 * Task-3 : Create a Boolean variable 'markResult' containing information about whether Mark has a higher BMI than Kent
 *
 *
 */
// let markWeight = 70;
// let markHeight = 175;
// let markBMI = markWeight / markHeight ** 2;

// let kentWeight = 100;
// let kentHeight = 180;
// let kentBMI = kentWeight / kentHeight ** 2;

// let result = "";
// if (kentBMI > markBMI) {
// 	result = "Kent katta";
// } else if (kentBMI < markBMI) {
// 	result = "Mark katta";
// } else {
// 	result = "Teng";
// }

// console.log(result);

/** Function  */

// function hi(name) {
// 	console.log("hello " + name);
// }
// hi("Arslonbek");
// hi("Baxtiyor");
// hi("Arslonbek");
// hi("Kent");
// hi("Mark");
// hi("Ben");

// function myFn(first, second) {
// 	return first + second;
// }

// const result = myFn(30, 40);

// console.log(result);

// function suvOlibKeling() {}

// const suv = suvOlibKeling();
// console.log(suv);

/*----------- 11.04.23(18)--------- */

/* String */
//             012345678901234567
// let message = "Arslonbek good boy";

// const char = message[2];

// console.log(message);
// console.log(char);

/* Operations */

// let a = "11";
// let b = 1;
// let d = 20;
// let c = a + d + b; // 11201
// console.log(c);

/* NaN -> Not a Number */

/* Logical Operations */
// && -> and
// || -> or
// ! -> not

// let isExist = false;

// const a = (true && true && (false || (true && false))) || true;

/* Truthy and Falsy values */

/**
 *
 * false
 * undefined
 * null
 * ""
 * 0
 *
 */

// const isExist = "";

// if (isExist) {
// 	console.log("Oq yol 🎉");
// } else {
// 	console.log("Shtraf 💰");
// }
//       012345678
// let a = "bobbek";

// let b = "";

// let firstName = a[a.length - 3] + a[a.length - 2] + a[a.length - 1] + a;

// console.log(firstName);

// const a = "false" || "arslonbek";

// console.log(a);

// function everyNth(str, n) {
// 	let result = "";
// 	for (let i = 0; i < str.length; i += n) {
// 		result += str[i];
// 	}

// 	return result;
// }

/**
 * everyNth('Miracle', 2) === "Mrce"
 *
 * result = "";
 * i = 0 -> result = "M", i = 2
 * i = 2 -> result = "Mr", i = 4
 * i = 4 -> result = "Mrc", i = 6
 * i = 6 -> result = "Mrce", i = 8
 *
 */
/**
 * everyNth('arslonbek', 4) === "Mrce"
 *
 * result = "";
 * i = 0 -> result = "M", i = 2
 * i = 2 -> result = "Mr", i = 4
 * i = 4 -> result = "Mrc", i = 6
 * i = 6 -> result = "Mrce", i = 8
 *
 */

/*----------- 20.04.23(22)--------- */

/* Method vs Function */
// function repeat() {}
// let str = "pdp best";

// repeat(); // function
// str.repeat(); // method

/* String methods  */

/* Substring method */
// //           012345678901234567
// const str = "arslonbek good boy";
// const result = substring(10, 14);
// console.log(result);

function substring(startIdx, lastIdx = str.length) {
	let temp = "";

	for (let i = startIdx; i < lastIdx; i++) {
		temp += str[i];
	}

	return temp;
}

/* Repeat method */

// //           012345678901234567890
// const str = "winner group marjonas";
// const sub = substring(7, 12);
// const result = repeat(5);
// console.log(result);

function repeat(times) {
	let temp = "";
	for (let i = 0; i < times; i++) {
		temp += sub;
	}
	return temp;
}

/* Slice method */
//           012345678901234567890
// const str = "front-end pdp-g-10";
// const sub = substring(0, 9); //  012345678901234567
// const repeatedSub = repeat(2); // front-endfront-end
// const result = slice(-8, -5);
// console.log(result);

// function slice(startIdx, lastIdx) {
// 	let temp = "";

// 	if (startIdx < 0) {
// 		lastIdx = lastIdx || 0;
// 		for (let i = startIdx; i < lastIdx; i++) {
// 			temp += repeatedSub[str.length + i];
// 		}
// 	} else {
// 		lastIdx = lastIdx || str.length;
// 		for (let i = startIdx; i < lastIdx; i++) {
// 			temp += repeatedSub[i];
// 		}
// 	}

// 	return temp;
// }

/* charAt method */
//           01234567890123
// const str = "I am developer";
// console.log(str[15] || "");
// console.log(str.charAt(15));

/* trim method */

// const str = "  ars@domain.com    ";

// console.log(str);
// console.log(trim());

// function trim() {
// 	let temp = "";
// 	let startIdx = 0;
// 	let lastIdx = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] !== " ") {
// 			startIdx = i;
// 			break;
// 		}
// 	}

// 	for (let i = str.length - 1; i > 0; i--) {
// 		if (str[i] !== " ") {
// 			lastIdx = i;
// 			break;
// 		}
// 	}

// 	for (let i = startIdx; i <= lastIdx; i++) {
// 		temp += str[i];
// 	}

// 	return temp;
// }

/* startWith */

function checkPhone(prefix, phone) {
	return prefix === phone.substring(0, prefix.length);
}

console.log(checkPhone("+997", "+997998961348")); // true
