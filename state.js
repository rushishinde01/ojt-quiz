export const state = {

    currentQuestion: 0,

    score: 0,

    answered: false,

    timer: 15,

    highScore: Number(localStorage.getItem("highScore")) || 0,

    questions: [

        {
            question: "Which language runs inside the browser?",
            options: [
                "Python",
                "Java",
                "JavaScript",
                "C++"
            ],
            answer: "JavaScript",
            difficulty: "easy"
        },

        {
            question: "Which HTML tag creates a hyperlink?",
            options: [
                "<a>",
                "<div>",
                "<link>",
                "<p>"
            ],
            answer: "<a>",
            difficulty: "easy"
        },

        {
            question: "What does CSS stand for?",
            options: [
                "Creative Style Sheets",
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets",
            difficulty: "easy"
        },

        {
            question: "Which company developed JavaScript?",
            options: [
                "Microsoft",
                "Google",
                "Netscape",
                "Apple"
            ],
            answer: "Netscape",
            difficulty: "easy"
        },

        {
            question: "Which array method creates a new array with matching elements?",
            options: [
                "reduce()",
                "filter()",
                "map()",
                "find()"
            ],
            answer: "filter()",
            difficulty: "medium"
        },

        {
            question: "Which keyword declares a block-scoped variable?",
            options: [
                "var",
                "let",
                "const",
                "Both let and const"
            ],
            answer: "Both let and const",
            difficulty: "medium"
        },

        {
            question: "Which method converts JSON into a JavaScript object?",
            options: [
                "JSON.stringify()",
                "JSON.parse()",
                "parseJSON()",
                "toObject()"
            ],
            answer: "JSON.parse()",
            difficulty: "medium"
        },

        {
            question: "Which operator checks value and datatype?",
            options: [
                "==",
                "=",
                "===",
                "!="
            ],
            answer: "===",
            difficulty: "medium"
        },

        {
            question: "Which method executes a callback for each array element?",
            options: [
                "map()",
                "forEach()",
                "reduce()",
                "slice()"
            ],
            answer: "forEach()",
            difficulty: "hard"
        },

        {
            question: "Which keyword is used with async functions to wait for a promise?",
            options: [
                "delay",
                "promise",
                "await",
                "resolve"
            ],
            answer: "await",
            difficulty: "hard"
        }

    ]

};




export function shuffleQuestions() {

    state.questions.sort(() => Math.random() - 0.5);

}




export function resetState() {

    state.currentQuestion = 0;

    state.score = 0;

    state.answered = false;

    state.timer = 15;

}




export function updateHighScore() {

    if (state.score > state.highScore) {

        state.highScore = state.score;

        localStorage.setItem(
            "highScore",
            state.highScore
        );

    }

}