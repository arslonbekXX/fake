import { randomNumber } from "./utils.js";
// DOM VARIABLES
const orderNumber = document.querySelector(".order_number");
const timer = document.getElementById("timer");
const number1Elm = document.getElementById("number_1");
const number2Elm = document.getElementById("number_2");
const operationElm = document.getElementById("operation");
const answersContent = document.querySelector(".answers_content");
const answer_boxes = document.querySelectorAll(".answer_box");
// LOGICAL VARIABLES
const OPERATIONS = ["+", "-", "*"];
const INTERVAL = 20;
const quizzes = [];

// HANDLE FUNCTIONS

function handleAnswer(selectedAnswer) {
	const currentQuiz = quizzes[quizzes.length - 1];
	const isCorrect = currentQuiz.correctAnswer === selectedAnswer;
	currentQuiz.status = isCorrect ? "SUCCESS" : "FAIL";
	nextQuiz();
}
// UI FUNCTION

function renderQuiz(quiz) {
	const { number1, number2, operation, correctAnswer, answers } = quiz;
	number1Elm.innerText = number1;
	number2Elm.innerText = number2;
	operationElm.innerText = operation;

	answer_boxes.forEach((box, idx) => {
		const answer = answers[idx];
		box.querySelector(".answer_text").innerText = answer;
		box.addEventListener("click", () => handleAnswer(answer));
	});

	orderNumber.innerText = quizzes.length;
}

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

	return answers.sort(() => 0.5 - Math.random());
}

function generateQuiz() {
	const number1 = randomNumber();
	const number2 = randomNumber();
	const operation = OPERATIONS[randomNumber({ finish: 2 })];
	const correctAnswer = eval(`${number1}${operation}${number2}`);
	const answers = generateAnswers(correctAnswer);
	return {
		number1,
		number2,
		operation,
		correctAnswer,
		answers,
		status: "TIMED", // 0 -> TIMED, 2 -> SUCCESS, 3 -> FAIL
	};
}

function nextQuiz() {
	const newQuiz = generateQuiz();
	quizzes.push(newQuiz);

	console.log("quizzes = ", quizzes);

	renderQuiz(newQuiz);
}

function init() {
	nextQuiz();
}

window.addEventListener("load", init);
