let card;

let cardNumber;

let score = parseInt(document.getElementById('score').innerHTML);

/**
 * 
 * Takes the number of the random card number generated in runGame(); for use in hiding the div on next round
 */
function cardNumReturn(cardNum) {
    cardNumber = cardNum;
}

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'btnNext') {
                document.getElementsByClassName('card')[cardNumber].style.display="none";
                runGame();
            } else if (this.getAttribute('data-type') === 'btnAgain') {
                document.getElementById('end-title').style.display="none";
                document.getElementById('end-sentence').style.display="none";
                document.getElementById('play-again').style.display="none";
                document.getElementById('score').innerHTML = score -= 7;
                runGame();
            } else {
                checkAnswer(this.innerHTML);
                document.getElementById('cover').style.display='none';
            }
        })
    }

    runGame();
});

/**
 * Main game function, generates our random card, and displays the questions appropriately
 */
function runGame() {

    document.getElementById('next-btn').style.display="none"; // This gets rid of the "Next Card" button and brings back the card cover
    document.getElementById('cover').style.display='block';
    document.getElementsByClassName('q1')[0].style.display="block";
    document.getElementsByClassName('q2')[0].style.display="block";
    document.getElementsByClassName('q3')[0].style.display="block";
    document.getElementsByClassName('q4')[0].style.display="block";

    let cardArray = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 
    'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 
    'Judgement', 'The World']

    let cardNum = Math.floor(Math.random() * 22); // Generates our card number, from 0-21
    cardNumReturn(cardNum); // Returns our card number outward through this function
    card = cardArray[cardNum];
    
    switch (card) {
        case 'The Fool':
            displayFoolQuestions();
            break;
        case 'The Magician':
            displayMagicianQuestions();
            break;
        case 'The High Priestess':
            displayPriestessQuestions();
            break;
        case 'The Empress':
            displayEmpressQuestions();
            break;
        case 'The Emperor':
            displayEmperorQuestions();
            break;
        case 'The Hierophant':
            displayHierophantQuestions();
            break;
        case 'The Lovers':
            displayLoversQuestions();
            break;
        case 'The Chariot':
            displayChariotQuestions();
            break;
        case 'Strength':
            displayStrengthQuestions();
            break;
        case 'The Hermit':
            displayHermitQuestions();
            break;
        case 'Wheel of Fortune':
            displayWheelQuestions();
            break;
        case 'Justice':
            displayJusticeQuestions();
            break;
        case 'The Hanged Man':
            displayHangedQuestions();
            break;
        case 'Death':
            displayDeathQuestions();
            break;
        case 'Temperance':
            displayTemperanceQuestions();
            break;
        case 'The Devil':
            displayDevilQuestions();
            break;
        case 'The Tower':
            displayTowerQuestions();
            break;
        case 'The Star':
            displayStarQuestions();
            break;
        case 'The Moon':
            displayMoonQuestions();
            break;
        case 'The Sun':
            displaySunQuestions();
            break;
        case 'Judgement':
            displayJudgementQuestions();
            break;
        case 'The World':
            displayWorldQuestions();
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
        alert('Oh no! Wrong card!');
    }

    if (score < 7) {
        document.getElementById('next-btn').style.display="block";
    }
}

/**
 * Increments the score by 1 when the user gets a question correct
 */
function incrementScore() {
    document.getElementById('score').innerHTML = ++score;
    if (score === 7) {
        document.getElementsByClassName('card')[cardNumber].style.display="none";
        document.getElementsByClassName('q1')[0].style.display="none";
        document.getElementsByClassName('q2')[0].style.display="none";
        document.getElementsByClassName('q3')[0].style.display="none";
        document.getElementsByClassName('q4')[0].style.display="none";  // Hides all main game content except for score
        
        document.getElementById('end-title').style.display="block";
        document.getElementById('end-sentence').style.display="block";
        document.getElementById('play-again').style.display="block";    // Shows all end game content
    }
}

/**
 * Function for displaying the questions appropriate to 0-The Fool
 */
function displayFoolQuestions() {
    document.getElementsByClassName('card00')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Devil';
    document.getElementsByClassName('q2')[0].textContent = 'The Fool';
    document.getElementsByClassName('q3')[0].textContent = 'The Hermit';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};

/**
 * Function for displaying the questions appropriate to I-The Magician
 */
function displayMagicianQuestions() {
    document.getElementsByClassName('card01')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Magician';
    document.getElementsByClassName('q2')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q3')[0].textContent = 'The Hierophant';
    document.getElementsByClassName('q4')[0].textContent = 'The Star';
};

/**
 * Function for displaying the questions appropriate to II-The High Priestess
 */
function displayPriestessQuestions() {
    document.getElementsByClassName('card02')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Tower';
    document.getElementsByClassName('q2')[0].textContent = 'The Empress';
    document.getElementsByClassName('q3')[0].textContent = 'The High Priestess';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};

/**
 * Function for displaying the questions appropriate to III-The Empress
 */
function displayEmpressQuestions() {
    document.getElementsByClassName('card03')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The High Priestess';
    document.getElementsByClassName('q2')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q3')[0].textContent = 'Justice';
    document.getElementsByClassName('q4')[0].textContent = 'The Empress';
};

/**
 * Function for displaying the questions appropriate to IV-The Emperor
 */
function displayEmperorQuestions() {
    document.getElementsByClassName('card04')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q2')[0].textContent = 'The Devil';
    document.getElementsByClassName('q3')[0].textContent = 'Judgement';
    document.getElementsByClassName('q4')[0].textContent = 'The Hanged Man';
};

/**
 * Function for displaying the questions appropriate to V-The Hierophant
 */
function displayHierophantQuestions() {
    document.getElementsByClassName('card05')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q2')[0].textContent = 'The Hierophant';
    document.getElementsByClassName('q3')[0].textContent = 'The Empress';
    document.getElementsByClassName('q4')[0].textContent = 'The High Priestess';
};

/**
 * Function for displaying the questions appropriate to VI-The Lovers
 */
function displayLoversQuestions() {
    document.getElementsByClassName('card06')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Devil';
    document.getElementsByClassName('q2')[0].textContent = 'The Sun';
    document.getElementsByClassName('q3')[0].textContent = 'The Lovers';
    document.getElementsByClassName('q4')[0].textContent = 'The World';
};

/**
 * Function for displaying the questions appropriate to VII-The Chariot
 */
function displayChariotQuestions() {
    document.getElementsByClassName('card07')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q2')[0].textContent = 'Strength';
    document.getElementsByClassName('q3')[0].textContent = 'The Tower';
    document.getElementsByClassName('q4')[0].textContent = 'The Chariot';
};

/**
 * Function for displaying the questions appropriate to VIII-Strength
 */
function displayStrengthQuestions() {
    document.getElementsByClassName('card08')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'Strength';
    document.getElementsByClassName('q2')[0].textContent = 'The Fool';
    document.getElementsByClassName('q3')[0].textContent = 'Judgement';
    document.getElementsByClassName('q4')[0].textContent = 'The Hierophant';
};

/**
 * Function for displaying the questions appropriate to IX-The Hermit
 */
function displayHermitQuestions() {
    document.getElementsByClassName('card09')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Hanged Man';
    document.getElementsByClassName('q2')[0].textContent = 'The Hermit';
    document.getElementsByClassName('q3')[0].textContent = 'The Sun';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};

/**
 * Function for displaying the questions appropriate to X-Wheel of Fortune
 */
function displayWheelQuestions() {
    document.getElementsByClassName('card10')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'Temperance';
    document.getElementsByClassName('q2')[0].textContent = 'The World';
    document.getElementsByClassName('q3')[0].textContent = 'Wheel of Fortune';
    document.getElementsByClassName('q4')[0].textContent = 'The Star';
};

/**
 * Function for displaying the questions appropriate to XI-Justice
 */
function displayJusticeQuestions() {
    document.getElementsByClassName('card11')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'Judgement';
    document.getElementsByClassName('q2')[0].textContent = 'The Star';
    document.getElementsByClassName('q3')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q4')[0].textContent = 'Justice';
};

/**
 * Function for displaying the questions appropriate to XII-The Hanged Man
 */
function displayHangedQuestions() {
    document.getElementsByClassName('card12')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Hanged Man';
    document.getElementsByClassName('q2')[0].textContent = 'Death';
    document.getElementsByClassName('q3')[0].textContent = 'The Fool';
    document.getElementsByClassName('q4')[0].textContent = 'Judgement';
};

/**
 * Function for displaying the questions appropriate to XIII-Death
 */
function displayDeathQuestions() {
    document.getElementsByClassName('card13')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Devil';
    document.getElementsByClassName('q2')[0].textContent = 'Death';
    document.getElementsByClassName('q3')[0].textContent = 'Judgement';
    document.getElementsByClassName('q4')[0].textContent = 'The Chariot';
};

/**
 * Function for displaying the questions appropriate to XIV-Temperance
 */
function displayTemperanceQuestions() {
    document.getElementsByClassName('card14')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Star';
    document.getElementsByClassName('q2')[0].textContent = 'The Hierophant';
    document.getElementsByClassName('q3')[0].textContent = 'Temperance';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};

/**
 * Function for displaying the questions appropriate to XV-The Devil
 */
function displayDevilQuestions() {
    document.getElementsByClassName('card15')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'Death';
    document.getElementsByClassName('q2')[0].textContent = 'Judgement';
    document.getElementsByClassName('q3')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q4')[0].textContent = 'The Devil';
};

/**
 * Function for displaying the questions appropriate to XVI-The Tower
 */
function displayTowerQuestions() {
    document.getElementsByClassName('card16')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Tower';
    document.getElementsByClassName('q2')[0].textContent = 'Temperance';
    document.getElementsByClassName('q3')[0].textContent = 'The Lovers';
    document.getElementsByClassName('q4')[0].textContent = 'Death';
};

/**
 * Function for displaying the questions appropriate to XVII-The Star
 */
function displayStarQuestions() {
    document.getElementsByClassName('card17')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Sun';
    document.getElementsByClassName('q2')[0].textContent = 'The Star';
    document.getElementsByClassName('q3')[0].textContent = 'The World';
    document.getElementsByClassName('q4')[0].textContent = 'Strength';
};

/**
 * Function for displaying the questions appropriate to XVIII-The Moon
 */
function displayMoonQuestions() {
    document.getElementsByClassName('card18')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Star';
    document.getElementsByClassName('q2')[0].textContent = 'The Sun';
    document.getElementsByClassName('q3')[0].textContent = 'The Moon';
    document.getElementsByClassName('q4')[0].textContent = 'The World';
};

/**
 * Function for displaying the questions appropriate to XIX-The Sun
 */
function displaySunQuestions() {
    document.getElementsByClassName('card19')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Emperor';
    document.getElementsByClassName('q2')[0].textContent = 'The Star';
    document.getElementsByClassName('q3')[0].textContent = 'The Empress';
    document.getElementsByClassName('q4')[0].textContent = 'The Sun';
};

/**
 * Function for displaying the questions appropriate to XX-Judgement
 */
function displayJudgementQuestions() {
    document.getElementsByClassName('card20')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'Judgement';
    document.getElementsByClassName('q2')[0].textContent = 'The Temperance';
    document.getElementsByClassName('q3')[0].textContent = 'The World';
    document.getElementsByClassName('q4')[0].textContent = 'Wheel of Fortune';
};

/**
 * Function for displaying the questions appropriate to XXI-The World
 */
function displayWorldQuestions() {
    document.getElementsByClassName('card21')[0].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = 'The Empress';
    document.getElementsByClassName('q2')[0].textContent = 'The World';
    document.getElementsByClassName('q3')[0].textContent = 'The High Priestess';
    document.getElementsByClassName('q4')[0].textContent = 'The Devil';
};