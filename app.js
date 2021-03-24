// import functions and grab DOM elements
import { isYes } from './utils.js';

const button = document.getElementById('launch-button');
const resultsDiv = document.getElementById('results')

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    alert('Ice Cream Quiz, are you ready?');

    const wantsToTakeQuiz = confirm ('Do you want to take the quiz?');

    if (!wantsToTakeQuiz) {
        alert('Alrighty then. Enjoy your Ice Cream!!');
        return;
    }

    const name = prompt('What is your name');

    let score = 0;

    const firstAnswer = prompt('Is ice cream a frozen desert?');
    const secondAnswer = prompt('Are fruits frequently used in the making of ice cream?');
    const thirdAnswer = prompt('Is ice cream only made with sugar?');

    if (isYes(firstAnswer)) score++;
    if (isYes(secondAnswer)) score++;
    if (!isYes(thirdAnswer)) score++;

    const resultsString = `Fantastic! ${name} you got ${score} right out of three!!`;


    resultsDiv.textContent = resultsString;

});
