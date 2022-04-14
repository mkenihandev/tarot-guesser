document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName('question');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            checkAnswer(this.innerHTML);
            console.log(this.innerHTML);
        })
    }

    runGame();
});

function runGame() {
    displayFoolQuestions();
};

function displayFoolQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Demon';
    document.getElementsByClassName('q2')[0].textContent = 'The Fool';
    document.getElementsByClassName('q3')[0].textContent = 'The Hermit';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};

function checkAnswer(answerClicked) {
    let answer = 'The Fool';
    let correct = answerClicked === answer;

    if (correct) {
        alert('You did it!');
    } else {
        alert('Uh oh stinky!');
    }
}