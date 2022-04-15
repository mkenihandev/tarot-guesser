let card = {name: ''}

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

function runGame() {

    let cardArray = ['fool', 'magician', 'priestess', 'empress', 'emporer', 'hierophant', 'lovers', 'chariot', 'strength', 'hermit', 'wheel', 'justice', 'hanged',
 'death', 'temperance', 'devil', 'tower', 'star', 'moon', 'sun', 'judgement', 'world']
    let cardNum = Math.floor(Math.random() * 22); //Generates our card number, from 0-21
    card.name = cardArray[cardNum];
    console.log(card);

    switch (card.name) {
        case 'fool':
            displayFoolQuestions();
            break;
    }
};

function checkAnswer(answerClicked) { // answerClicked takes over as the variable passed from the event listener above, this.innerHTML
    let answer = card.name;
    let correct = answerClicked === answer;

    if (correct) {
        alert('You did it!');
        incrementScore();
    } else {
        alert('Uh oh stinky!');
    }
}

function incrementScore() {
    let score = parseInt(document.getElementById('score').innerHTML);
    document.getElementById('score').innerHTML = ++score;
}

function displayFoolQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Demon';
    document.getElementsByClassName('q2')[0].textContent = 'The Fool';
    document.getElementsByClassName('q3')[0].textContent = 'The Hermit';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};