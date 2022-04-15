let card;
console.log(card);

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName('question');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            checkAnswer(this.innerHTML);
            document.getElementById('cover').style.display='none'
        })
    }

    runGame();
});

/**
 * Main game function, generates our random card, and displays the questions appropriately
 */
function runGame() {

    let cardArray = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 
    'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 
    'Judgement', 'The World']

    let cardNum = Math.floor(Math.random() * 22); //Generates our card number, from 0-21
    card = cardArray[cardNum];
    console.log(card);

    switch (card) {
        case 'The Fool':
            displayFoolQuestions();
            break;
    }
};

/**
 * Takes this.innerHTML from the button the user clicks and checks it against the global card variable
 */
function checkAnswer(answerClicked) { // answerClicked takes over as the variable passed from the event listener above, this.innerHTML
    let answer = card;
    console.log(answerClicked, card);
    let correct = answerClicked === answer;

    if (correct) {
        alert('You did it!');
        incrementScore();
    } else {
        alert('Uh oh stinky!');
    }
}

/**
 * Increments the score by 1 when the user gets a question correct
 */
function incrementScore() {
    let score = parseInt(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = ++score;
}

/**
 * Function for displaying the questions appropriate to 0-The Fool
 */
function displayFoolQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Devil';
    document.getElementsByClassName('q2')[0].textContent = 'The Fool';
    document.getElementsByClassName('q3')[0].textContent = 'The Hermit';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};

/**
 * Function for displaying the questions appropriate to I-The Magician
 */
function displayMagicianQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Magician';
    document.getElementsByClassName('q2')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q3')[0].textContent = 'The Hierophant';
    document.getElementsByClassName('q4')[0].textContent = 'The Star';
};

/**
 * Function for displaying the questions appropriate to II-The High Priestess
 */
function displayPriestessQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Tower';
    document.getElementsByClassName('q2')[0].textContent = 'The Empress';
    document.getElementsByClassName('q3')[0].textContent = 'The High Priestess';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};

/**
 * Function for displaying the questions appropriate to III-The Empress
 */
function displayEmpressQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The High Priestess';
    document.getElementsByClassName('q2')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q3')[0].textContent = 'Justice';
    document.getElementsByClassName('q4')[0].textContent = 'The Empress';
};

/**
 * Function for displaying the questions appropriate to IV-The Emperor
 */
function displayEmperorQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q2')[0].textContent = 'The Devil';
    document.getElementsByClassName('q3')[0].textContent = 'Judgement';
    document.getElementsByClassName('q4')[0].textContent = 'The Hanged Man';
};

/**
 * Function for displaying the questions appropriate to V-The Hierophant
 */
function displayHierophantQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q2')[0].textContent = 'The Hierophant';
    document.getElementsByClassName('q3')[0].textContent = 'The Empress';
    document.getElementsByClassName('q4')[0].textContent = 'The High Priestess';
};

/**
 * Function for displaying the questions appropriate to VI-The Lovers
 */
function displayLoversQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Devil';
    document.getElementsByClassName('q2')[0].textContent = 'The Sun';
    document.getElementsByClassName('q3')[0].textContent = 'The Lovers';
    document.getElementsByClassName('q4')[0].textContent = 'The World';
};

/**
 * Function for displaying the questions appropriate to VII-The Chariot
 */
function displayChariotQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q2')[0].textContent = 'Strength';
    document.getElementsByClassName('q3')[0].textContent = 'The Tower';
    document.getElementsByClassName('q4')[0].textContent = 'The Chariot';
};

/**
 * Function for displaying the questions appropriate to VIII-Strength
 */
function displayStrengthQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'Strength';
    document.getElementsByClassName('q2')[0].textContent = 'The Fool';
    document.getElementsByClassName('q3')[0].textContent = 'Judgement';
    document.getElementsByClassName('q4')[0].textContent = 'The Hierophant';
};

/**
 * Function for displaying the questions appropriate to IX-The Hermit
 */
function displayHermitQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Hanged Man';
    document.getElementsByClassName('q2')[0].textContent = 'The Hermit';
    document.getElementsByClassName('q3')[0].textContent = 'The Sun';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};

/**
 * Function for displaying the questions appropriate to X-Wheel of Fortune
 */
function displayWheelQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'Temperance';
    document.getElementsByClassName('q2')[0].textContent = 'The World';
    document.getElementsByClassName('q3')[0].textContent = 'Wheel Of Fortune';
    document.getElementsByClassName('q4')[0].textContent = 'The Star';
};

/**
 * Function for displaying the questions appropriate to XI-Justice
 */
function displayJusticeQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'Judgement';
    document.getElementsByClassName('q2')[0].textContent = 'The Star';
    document.getElementsByClassName('q3')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q4')[0].textContent = 'Justice';
};

/**
 * Function for displaying the questions appropriate to XII-The Hanged Man
 */
function displayHangedQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Hanged Man';
    document.getElementsByClassName('q2')[0].textContent = 'Death';
    document.getElementsByClassName('q3')[0].textContent = 'The Fool';
    document.getElementsByClassName('q4')[0].textContent = 'Judgement';
};

/**
 * Function for displaying the questions appropriate to XIII-Death
 */
function displayDeathQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Devil';
    document.getElementsByClassName('q2')[0].textContent = 'Death';
    document.getElementsByClassName('q3')[0].textContent = 'Judgement';
    document.getElementsByClassName('q4')[0].textContent = 'The Chariot';
};

/**
 * Function for displaying the questions appropriate to XIV-Temperance
 */
function displayTemperanceQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Star';
    document.getElementsByClassName('q2')[0].textContent = 'The Hierophant';
    document.getElementsByClassName('q3')[0].textContent = 'Temperance';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};

/**
 * Function for displaying the questions appropriate to XV-The Devil
 */
function displayDevilQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'Death';
    document.getElementsByClassName('q2')[0].textContent = 'Judgement';
    document.getElementsByClassName('q3')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q4')[0].textContent = 'The Devil';
};

/**
 * Function for displaying the questions appropriate to XVI-The Tower
 */
function displayTowerQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Tower';
    document.getElementsByClassName('q2')[0].textContent = 'Temperance';
    document.getElementsByClassName('q3')[0].textContent = 'The Lovers';
    document.getElementsByClassName('q4')[0].textContent = 'Death';
};

/**
 * Function for displaying the questions appropriate to XVII-The Star
 */
function displayStarQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Sun';
    document.getElementsByClassName('q2')[0].textContent = 'The Star';
    document.getElementsByClassName('q3')[0].textContent = 'The World';
    document.getElementsByClassName('q4')[0].textContent = 'Strength';
};

/**
 * Function for displaying the questions appropriate to XVIII-The Moon
 */
function displayMoonQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Star';
    document.getElementsByClassName('q2')[0].textContent = 'The Sun';
    document.getElementsByClassName('q3')[0].textContent = 'The Moon';
    document.getElementsByClassName('q4')[0].textContent = 'The World';
};

/**
 * Function for displaying the questions appropriate to XIX-The Sun
 */
function displaySunQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q2')[0].textContent = 'The Star';
    document.getElementsByClassName('q3')[0].textContent = 'The Empress';
    document.getElementsByClassName('q4')[0].textContent = 'The Sun';
};

/**
 * Function for displaying the questions appropriate to XX-Judgement
 */
function displayJudgementQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'Judgement';
    document.getElementsByClassName('q2')[0].textContent = 'The Temperance';
    document.getElementsByClassName('q3')[0].textContent = 'The World';
    document.getElementsByClassName('q4')[0].textContent = 'Wheel of Fortune';
};

/**
 * Function for displaying the questions appropriate to XXI-The World
 */
function displayWorldQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Empress';
    document.getElementsByClassName('q2')[0].textContent = 'The World';
    document.getElementsByClassName('q3')[0].textContent = 'The High Priestess';
    document.getElementsByClassName('q4')[0].textContent = 'The Devil';
};