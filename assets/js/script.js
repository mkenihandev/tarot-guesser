document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName('question');

    for (let button of buttons) {
        button.addEventListener('click', checkAnswer())
    }

    runGame(fool);
});

function runGame(card) {
    switch (card) {
        case 'fool':
            displayFoolQuestions();
            break;
        case 'magician':
            displayMagicQuestions();
            break;
    }
}

function displayFoolQuestions() {
    document.getElementsByClassName('q1')[0].textContent = 'The Demon';
    document.getElementsByClassName('q2')[0].textContent = 'The Fool';
    document.getElementsByClassName('q3')[0].textContent = 'The Hermit';
    document.getElementsByClassName('q4')[0].textContent = 'The Emperor';
};