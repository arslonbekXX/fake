import { randomNumber } from "./utils.js";
// DOM VARIABLES
const orderNumber = document.querySelector(".order_number");
const timer = document.getElementById("timer");
const number1Elm = document.getElementById("number_1");
const number2Elm = document.getElementById("number_2");
const operationElm = document.getElementById("operation");

// LOGICAL VARIABLES
const OPERATIONS = ["+", "-", "*"];
const INTERVAL = 5;

// HANDLE FUNCTIONS

// UI FUNCTION

// LOGIC FUNCTIONS

function generateAnswers(correctAnswer) {
	const answers = [correctAnswer];
	for (let i = 1; i <= 3; i++) {
		const answer = randomNumber({
			start: correctAnswer - INTERVAL,
			finish: correctAnswer + INTERVAL,
		});

		if (answers.includes(answer)) i--;
		else answers.push(answer);
	}

	return answers;
}

function init() {
	const number1 = randomNumber();
	const number2 = randomNumber();
	const operation = OPERATIONS[randomNumber({ finish: 2 })];
	const correctAnswer = eval(`${number1}${operation}${number2}`);
	const answers = generateAnswers(correctAnswer);
	const quiz = {
		number1,
		number2,
		operation,
		correctAnswer,
		answers,
	};
	console.log("quiz = ", quiz);
}

window.addEventListener("load", init);
