window.onload = function() {
    // Load saved correct answers count
    let savedCorrectAnswers = parseInt(localStorage.getItem('correctAnswers') || '0');
    correctAnswers = savedCorrectAnswers; // Use the saved value

    // Apply the saved state to each task and answer
    correctList.forEach((item, index) => {
        let answerSelected = localStorage.getItem(`correctAnswerSelected${index}`);
        if (answerSelected) {
            item.classList.add('correct'); // Mark as correct if it was selected before
            // Load and apply the saved overview text if it exists
            let savedOverviewText = localStorage.getItem(`overviewText${index}`);
            if (savedOverviewText) {
                overviewList[index].innerText = savedOverviewText;
            }
        }
    });

    // Logic to display the correct task based on the number of correct answers
    taskListOne.forEach((item, index) => {
        item.style.display = 'none';
        if (index === savedCorrectAnswers) {
            taskListOne[savedCorrectAnswers].style.display = 'flex';
        }
    });

    // Check if the game was won and display the win state if necessary
    if (savedCorrectAnswers > 6) {
        correctAnswers = 6; // Ensure correctAnswers is not more than 6
        win.style.display = 'flex';
        window.firstWin = true;
    }
};


const firstFraction = document.getElementById('fraction-1');

const taskOne = document.getElementById('first-task');
const taskTwo = document.getElementById('second-task');
const taskThree = document.getElementById('third-task');
const taskFour = document.getElementById('fourth-task');
const taskFive = document.getElementById('fifth-task');
const taskSix = document.getElementById('sixth-task');
const taskSeven = document.getElementById('seventh-task');

// Correct Answers

const firstCorrectAnswer = document.getElementById('answers-1-answer-2');
const secondCorrectAnswer = document.getElementById('answers-2-answer-1');
const thirdCorrectAnswer = document.getElementById('answers-3-answer-1');
const fourthCorrectAnswer = document.getElementById('answers-4-answer-2');
const fifthCorrectAnswer = document.getElementById('answers-5-answer-2');
const sixthCorrectAnswer = document.getElementById('answers-6-answer-2');
const seventhCorrectAnswer = document.getElementById('answers-7-answer-1');


// Correct Answers Overview

const overviewFirstCorrectAnswer = document.getElementById('first-correct-answer')
const overviewSecondCorrectAnswer = document.getElementById('second-correct-answer')
const overviewThirdCorrectAnswer = document.getElementById('third-correct-answer')
const overviewFourthCorrectAnswer = document.getElementById('fourth-correct-answer')
const overviewFifthCorrectAnswer = document.getElementById('fifth-correct-answer')
const overviewSixthCorrectAnswer = document.getElementById('sixth-correct-answer')
const overviewSeventhCorrectAnswer = document.getElementById('seventh-correct-answer')

// Arrays

const taskListOne = [taskOne, taskTwo, taskThree, taskFour, taskFive, taskSix, taskSeven];
const correctList = [firstCorrectAnswer, secondCorrectAnswer, thirdCorrectAnswer, fourthCorrectAnswer, fifthCorrectAnswer, sixthCorrectAnswer, seventhCorrectAnswer]
const overviewList = [overviewFirstCorrectAnswer, overviewSecondCorrectAnswer, overviewThirdCorrectAnswer, overviewFourthCorrectAnswer, overviewFifthCorrectAnswer, overviewSixthCorrectAnswer, overviewSeventhCorrectAnswer]

// Win Buttons

const button = document.getElementById('next-button')
const inputField = document.getElementById('solution-collector')
const replay = document.getElementById('replay-button')


// Functions

let correctAnswers = 0

function correctAnswer() {

}

// Initial State

const win = document.getElementById('win-one-math')

taskListOne.forEach(item => {
    item.style.display = 'none';
    taskListOne[correctAnswers].style.display = 'flex';
});

win.style.display = 'none'

// Correct State

correctList.forEach((item, index) => {
    item.addEventListener('click', function() {
        item.classList.add('correct');
        correctAnswers++;
        localStorage.setItem('correctAnswers', correctAnswers);
        localStorage.setItem(`correctAnswerSelected${index}`, true);

        let correctAnswersOverviewIndex = correctAnswers - 1;
        let overviewText = correctList[correctAnswersOverviewIndex].innerText.replace(/\n/g, '');
        localStorage.setItem(`overviewText${correctAnswersOverviewIndex}`, overviewText);
        
        // Now you can set the innerText for the overview list
        overviewList[correctAnswersOverviewIndex].innerText = overviewText;

        setTimeout(() => {
            taskListOne.forEach((item, index) => {
                item.style.display = 'none';
                if (index === correctAnswers) {
                    taskListOne[correctAnswers].style.display = 'flex';
                }
                if (correctAnswers > 6) {
                    correctAnswers = 6;
                    win.style.display = 'flex';
                   localStorage.setItem("firstWin", true);
                }
            });
        }, 1500);
    });
});

// Initial Win State

button.classList.add('button-grayed')
button.classList.remove('button-initial')

inputField.addEventListener('input', function() {
    if (inputField.value.toUpperCase() === 'ORIGAMI') {
        button.classList.add('button-green')
        button.classList.remove('button-grayed')
        if (button.classList.contains('button-green')) {
            button.addEventListener('click', function() {
                window.location.replace('level-two.html')
            })
        }
    }
})