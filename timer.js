let interval = null;

const timerEl = document.getElementById("timer");

export function startTimer(onTimeUp) {

    let timeLeft = 15;

    timerEl.textContent = timeLeft;

    clearInterval(interval);

    interval = setInterval(() => {

        timeLeft--;

        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(interval);

            onTimeUp();

        }

    }, 1000);

}



export function stopTimer() {

    clearInterval(interval);

}



export function resetTimer() {

    clearInterval(interval);

    timerEl.textContent = 15;

}