import { state, resetState, shuffleQuestions, updateHighScore } from "./state.js";
import { renderQuestion, showResult, resetUI } from "./render.js";
import { startTimer, stopTimer, resetTimer } from "./timer.js";
import { updateProgressBar } from "./progress.js";
import { shuffleArray } from "./utils.js";

const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {

    renderQuestion();
    updateProgressBar();

    startTimer(() => {

        // time up → auto move
        goNext();

    });

}



function goNext() {

    stopTimer();

    state.currentQuestion++;

    if (state.currentQuestion < state.questions.length) {

        loadQuestion();

    } else {

        finishQuiz();

    }

}



function finishQuiz() {

    stopTimer();

    updateHighScore();

    showResult();

}



nextBtn.addEventListener("click", () => {

    goNext();

});



restartBtn.addEventListener("click", () => {

    resetState();

    resetUI();

    shuffleQuestions();
    shuffleArray(state.questions);

    resetTimer();

    loadQuestion();

});



// INIT APP
shuffleQuestions();
shuffleArray(state.questions);
loadQuestion();