let card;

let cardNumber;

let cardsChosen = [];

let score = parseInt(document.getElementById('score').innerHTML);

let counter = 0;

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
            } else if (this.getAttribute('data-type') === 'btnAgain') { // Resets everything, removes end game screen content
                document.getElementById('end-title').style.display="none";
                document.getElementById('end-sentence').style.display="none";
                document.getElementById('play-again').style.display="none";
                score = 0;
                document.getElementById('score').innerHTML = score;
                counter = 0;
                cardsChosen = [];
                runGame();
            } else {
                checkAnswer(this.innerHTML);
                document.getElementById('cover').style.display='none';
                document.getElementsByClassName('q1')[0].style.display="none";
                document.getElementsByClassName('q2')[0].style.display="none";
                document.getElementsByClassName('q3')[0].style.display="none";
                document.getElementsByClassName('q4')[0].style.display="none";
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

    if (!cardsChosen.includes(card)) { // This if statement should ensure the game never gives you two of the same cards
        
        cardsChosen.push(card);

        switch (card) {
            case 'The Fool':
                displayQuestions(cardNumber, 'The Devil', 'The Fool', 'The Hermit', 'The Emperor');
                break;
            case 'The Magician':
                displayQuestions(cardNumber, 'The Magician', 'The Emperor', 'The Hierophant', 'The Star');
                break;
            case 'The High Priestess':
                displayQuestions(cardNumber, 'The Tower', 'The Empress', 'The High Priestess', 'The Emperor');
                break;
            case 'The Empress':
                displayQuestions(cardNumber, 'The High Priestess', 'The Emperor', 'Justice', 'The Empress');
                break;
            case 'The Emperor':
                displayQuestions(cardNumber, 'The Emperor', 'The Devil', 'Judgement', 'The Hanged Man');
                break;
            case 'The Hierophant':
                displayQuestions(cardNumber, 'The Emperor', 'The Hierophant', 'The Empress', 'The High Priestess');
                break;
            case 'The Lovers':
                displayQuestions(cardNumber, 'The Devil', 'The Sun', 'The Lovers', 'The World');
                break;
            case 'The Chariot':
                displayQuestions(cardNumber, 'The Emperor', 'Strength', 'The Tower', 'The Chariot');
                break;
            case 'Strength':
                displayQuestions(cardNumber, 'Strength', 'The Fool', 'Judgement', 'The Hierophant');
                break;
            case 'The Hermit':
                displayQuestions(cardNumber, 'The Hanged Man', 'The Hermit', 'The Sun', 'The Emperor');
                break;
            case 'Wheel of Fortune':
                displayQuestions(cardNumber, 'Temperance', 'The World', 'Wheel of Fortune', 'The Star');
                break;
            case 'Justice':
                displayQuestions(cardNumber, 'Judgement', 'The Star', 'The Emperor', 'Justice');
                break;
            case 'The Hanged Man':
                displayQuestions(cardNumber, 'The Hanged Man', 'Death', 'The Fool', 'Judgement');
                break;
            case 'Death':
                displayQuestions(cardNumber, 'The Devil', 'Death', 'Judgement', 'The Chariot');
                break;
            case 'Temperance':
                displayQuestions(cardNumber, 'The Star', 'The Hierophant', 'Temperance', 'The Emperor');
                break;
            case 'The Devil':
                displayQuestions(cardNumber, 'Death', 'Judgement', 'The Emperor', 'The Devil');
                break;
            case 'The Tower':
                displayQuestions(cardNumber, 'The Tower', 'Temperance', 'The Lover', 'Death');
                break;
            case 'The Star':
                displayQuestions(cardNumber, 'The Sun', 'The Star', 'The World', 'Strength');
                break;
            case 'The Moon':
                displayQuestions(cardNumber, 'The Star', 'The Sun', 'The Moon', 'The World');
                break;
            case 'The Sun':
                displayQuestions(cardNumber, 'The Emperor', 'The Star', 'The Empress', 'The Sun');
                break;
            case 'Judgement':
                displayQuestions(cardNumber, 'Judgement', 'Temperance', 'The World', 'Wheel of Fortune');
                break;
            case 'The World':
                displayQuestions(cardNumber, 'The Empress', 'The World', 'The High Priestess', 'The Devil');
                break;
        }
    } else {
        runGame();
    }
    
    
};

/**
 * Takes this.innerHTML from the button the user clicks and checks it against the global card variable
 */
function checkAnswer(answerClicked) { // answerClicked takes over as the variable passed from the event listener above, this.innerHTML
    let answer = card;
    let correct = answerClicked === answer;
    ++counter;
    console.log(answer);

    if (correct) {
        alert(`You guessed right! The card was "${card}"`);
        incrementScore();
    } else {
        alert(`Oh no! That's the wrong guess. The card was "${card}"`);
    }

    if (score < 7) {
        document.getElementById('next-btn').style.display="block";
    }

    if (counter === 7 && score < 7) {
        document.getElementsByClassName('card')[cardNumber].style.display="none";
        document.getElementsByClassName('q1')[0].style.display="none";
        document.getElementsByClassName('q2')[0].style.display="none";
        document.getElementsByClassName('q3')[0].style.display="none";
        document.getElementsByClassName('q4')[0].style.display="none";  // Hides all main game content except for score
        
        document.getElementById('end-title').style.display="block";
        document.getElementById('end-sentence').style.display="block";
        document.getElementById('play-again').style.display="block";    // Shows all end game content

        document.getElementById('end-title').innerHTML = "Great Score!"
        document.getElementById('end-sentence').innerHTML = "Unfortunately, you did not guess all 7 cards correctly. Don't give up, and Try Again!"
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
 * Function called to display each question, takes in parameters looking for the card number for use in indexing + all 4 question strings
 */
function displayQuestions(cardVar, quest1, quest2, quest3, quest4) {
    document.getElementsByClassName('card')[cardVar].style.display="block";
    document.getElementsByClassName('q1')[0].textContent = quest1;
    document.getElementsByClassName('q2')[0].textContent = quest2;
    document.getElementsByClassName('q3')[0].textContent = quest3;
    document.getElementsByClassName('q4')[0].textContent = quest4;
};