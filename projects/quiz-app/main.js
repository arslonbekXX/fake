import { randomNumber } from "./utils.js";
// DOM VARIABLES
const orderNumber = document.querySelector(".order_number");
const timer = document.getElementById("timer");
const number1Elm = document.getElementById("number_1");
const number2Elm = document.getElementById("number_2");
const operationElm = document.getElementById("operation");
const answersContent = document.querySelector(".answers_content");

// LOGICAL VARIABLES
const OPERATIONS = ["+", "-", "*"];
const INTERVAL = 5;
const quizzes = [];

// HANDLE FUNCTIONS

function handleAnswer(selectedAnswer) {
	const { correctAnswer } = quizzes[quizzes.length - 1];
	if (correctAnswer === selectedAnswer) {
		console.log("Topding");
	} else console.log("Topmading");
}
// UI FUNCTION

function renderQuiz(quiz) {
	const { number1, number2, operation, correctAnswer, answers } = quiz;
	number1Elm.innerText = number1;
	number2Elm.innerText = number2;
	operationElm.innerText = operation;

	answersContent.innerHTML = `<div class="row">
							<div class="answer_box" onclick="handleAnswer(${answers[0]})">
								<div class="answer_btn">A</div>
								<span class="answer_text">${answers[0]}</span>
							</div>
							<div class="answer_box" onclick="handleAnswer(${answers[1]})">
								<div class="answer_btn">B</div>
								<span class="answer_text">${answers[1]}</span>
							</div>
						</div>

						<div class="row">
							<div class="answer_box" onclick="handleAnswer(${answers[2]})">
								<div class="answer_btn">C</div>
								<span class="answer_text">${answers[2]}</span>
							</div>
							<div class="answer_box" onclick="handleAnswer(${answers[3]})">
								<div class="answer_btn">D</div>
								<span class="answer_text">${answers[3]}</span>
							</div>
</div>`;
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
	};
}

function nextQuiz() {
	const newQuiz = generateQuiz();
	quizzes.push(newQuiz);

	renderQuiz(newQuiz);
}

function init() {
	nextQuiz();
}

window.addEventListener("load", init);
