import { state } from "./state.js";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

const finalScoreEl = document.getElementById("final-score");
const percentageEl = document.getElementById("percentage");
const performanceEl = document.getElementById("performance");
const highScoreEl = document.getElementById("high-score");

totalQuestionsEl.textContent = state.questions.length;

export function renderQuestion() {

    state.answered = false;

    const current = state.questions[state.currentQuestion];

    currentQuestionEl.textContent = state.currentQuestion + 1;

    questionEl.textContent = current.question;

    optionsEl.innerHTML = "";

    current.options.forEach(option => {

        const btn = document.createElement("button");

        btn.classList.add("option");

        btn.textContent = option;

        btn.addEventListener("click", () => {
            checkAnswer(btn, option);
        });

        optionsEl.appendChild(btn);

    });

}

function checkAnswer(clickedButton, selectedAnswer) {

    if (state.answered) return;

    state.answered = true;

    const correctAnswer = state.questions[state.currentQuestion].answer;

    const allButtons = document.querySelectorAll(".option");

    allButtons.forEach(btn => {

        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }

    });

    if (selectedAnswer === correctAnswer) {

        state.score++;

    } else {

        clickedButton.classList.add("wrong");

    }

}

export function showResult() {

    quizBox.classList.add("hidden");

    resultBox.classList.remove("hidden");

    const percentage =
        Math.round(
            (state.score / state.questions.length) * 100
        );

    finalScoreEl.textContent =
        `Score : ${state.score} / ${state.questions.length}`;

    percentageEl.textContent =
        `Percentage : ${percentage}%`;

    if (percentage >= 90) {

        performanceEl.textContent =
            "🏆 Excellent! Outstanding performance.";

    }

    else if (percentage >= 70) {

        performanceEl.textContent =
            "🔥 Great job! Keep it up.";

    }

    else if (percentage >= 50) {

        performanceEl.textContent =
            "👍 Good effort. Practice more.";

    }

    else {

        performanceEl.textContent =
            "📚 Keep learning and try again.";

    }

    highScoreEl.textContent =
        `${state.highScore} / ${state.questions.length}`;

}

export function resetUI() {

    resultBox.classList.add("hidden");

    quizBox.classList.remove("hidden");

}

export function disableOptions() {

    const buttons =
        document.querySelectorAll(".option");

    buttons.forEach(btn => {

        btn.disabled = true;

    });

}