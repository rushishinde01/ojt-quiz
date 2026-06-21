import { state } from "./state.js";

const progressBar =
    document.getElementById("progress-bar");



export function updateProgressBar() {

    const progress =
        ((state.currentQuestion + 1) /
            state.questions.length) * 100;

    progressBar.style.width = `${progress}%`;

}