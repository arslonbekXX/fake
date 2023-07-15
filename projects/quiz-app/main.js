import { randomNumber } from "./utils.js";
import { OPERATIONS, INTERVAL, MAX_SECOND, MIN_SECOND, MAX_COUNT } from "./constants.js";

// DOM VARIABLES
const gameZone = document.querySelector(".game-zone");
const resultZone = document.querySelector(".result-zone");
const orderNumberElm = document.querySelector(".order");
const timer = document.querySelector(".timer");
const number1Elm = document.getElementById("number_1");
const number2Elm = document.getElementById("number_2");
const operationElm = document.getElementById("operation");
const answersContent = document.querySelector(".quiz_answers");
const pointsContent = document.querySelector(".points");
const showAnswersBtn = document.querySelector(".show-answers-btn");

// LOGICAL VARIABLES

const quizzes = [];
const time = {
	intervalID: null,
	value: MAX_SECOND,
};

// HANDLE FUNCTIONS

function handleAnswer(selectedAnswer) {
	const currentQuiz = quizzes[quizzes.length - 1];
	const isCorrect = currentQuiz.correctAnswer === selectedAnswer;
	currentQuiz.status = isCorrect ? "SUCCESS" : "FAIL";
	currentQuiz.selectedAnswer = selectedAnswer;
	nextQuiz();
}

// UI FUNCTION
function renderQuiz(quiz, isShow = false) {
	const { number1, number2, orderNumber, operation, correctAnswer, answers, selectedAnswer } = quiz;
	number1Elm.innerText = number1;
	number2Elm.innerText = number2;
	operationElm.innerText = operation;

	const answerBoxes = answersContent.children;

	for (let idx = 0; idx < answerBoxes.length; idx++) {
		const answerBox = answerBoxes[idx];
		const answer = answers[idx];
		let className = "answer_box ";
		answerBox.innerText = answer;

		if (isShow) {
			if (correctAnswer === answer) className += "SUCCESS";
			else if (selectedAnswer === answer) className += "FAIL";

			answerBox.className = className;
		} else {
			answerBox.onclick = () => handleAnswer(answer);
		}
	}

	orderNumberElm.innerText = orderNumber;
}

function renderPoint() {
	if (quizzes.length <= 0) return;
	const { status } = quizzes[quizzes.length - 1];
	const point = document.createElement("div");
	point.classList.add("point", `point-${status}`);
	point.innerText = quizzes.length;
	pointsContent.appendChild(point);
}

// LOGIC FUNCTIONS
function onFinish() {
	clearInterval(time.intervalID);
	gameZone.classList.toggle("d-none");
	resultZone.classList.toggle("d-none");

	const statuses = ["SUCCESS", "FAIL", "TIMED"];

	for (let status of statuses) {
		const scoreElm = resultZone.querySelector(`.score--${status}`);
		const score = quizzes.filter((q) => q.status === status).length;
		scoreElm.innerText = score;
	}

	showAnswersBtn.addEventListener("click", () => {
		gameZone.classList.toggle("d-none");
		resultZone.classList.toggle("d-none");
		answersContent.style.pointerEvents = "none";

		renderQuiz(quizzes[quizzes.length - 1], true);

		const points = gameZone.querySelectorAll(".point");

		points.forEach((point, idx) => {
			point.addEventListener("click", () => renderQuiz(quizzes[idx], true));
		});
	});
}
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
		orderNumber: quizzes.length + 1,
		number1,
		number2,
		operation,
		correctAnswer,
		answers,
		selectedAnswer: null,
		status: "TIMED", // 0 -> TIMED, 2 -> SUCCESS, 3 -> FAIL
	};
}

function startTimer() {
	clearInterval(time.intervalID);
	time.value = MAX_SECOND;
	timer.innerText = `${time.value}s`;

	time.intervalID = setInterval(() => {
		timer.innerText = `${--time.value}s`;
		if (time.value === MIN_SECOND) nextQuiz();
	}, 1000);
}

function nextQuiz() {
	renderPoint();

	if (quizzes.length === MAX_COUNT) return onFinish();

	const newQuiz = generateQuiz();
	quizzes.push(newQuiz);

	renderQuiz(newQuiz);
	startTimer();
}

function init() {
	nextQuiz();
}

init();
