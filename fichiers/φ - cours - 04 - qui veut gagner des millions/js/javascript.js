let currentQuestionIndex = 0;  
let previousQuestionIndex = -1;  
let incorrectAnswers = [];  
let currentAudio = null;  
let currentQuestionIndices = []; // Tableau pour stocker les indices des questions mélangées

const questionsFiles = {
    1: 'questions/questionstrèsfaciles.js',
    2: 'questions/questionstrèsfaciles.js',
    3: 'questions/questionsfaciles.js',
    4: 'questions/questionsfaciles.js',
    5: 'questions/questionsmoyennes.js',
    6: 'questions/questionsmoyennes.js',
    7: 'questions/questionsmoyennes.js',
    8: 'questions/questionsmoyennes.js',
    9: 'questions/questionsmoyennes.js',
    10: 'questions/questionsdifficiles.js',
    11: 'questions/questionsdifficiles.js',
    12: 'questions/questionsdifficiles.js',
    13: 'questions/questionsdifficiles.js',
    14: 'questions/questionsdifficiles.js',
    15: 'questions/questionsdifficiles.js'
};

const musicFiles = {
    1: 'audio/questionstrèsfaciles.mp3',
    2: 'audio/questionstrèsfaciles.mp3',
    3: 'audio/questionsfaciles.mp3',
    4: 'audio/questionsfaciles.mp3',
    5: 'audio/questionsmoyennes.mp3',
    6: 'audio/questionsmoyennes.mp3',
    7: 'audio/questionsmoyennes.mp3',
    8: 'audio/questionsmoyennes.mp3',
    9: 'audio/questionsmoyennes.mp3',
    10: 'audio/questionsdifficiles.mp3',
    11: 'audio/questionsdifficiles.mp3',
    12: 'audio/questionsdifficiles.mp3',
    13: 'audio/questionsdifficiles.mp3',
    14: 'audio/questionsdifficiles.mp3',
    15: 'audio/questionsdifficiles.mp3'
};

// Fonction pour mélanger un tableau  
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments  
    }
}

function loadContent() {
    const palierIndex = currentQuestionIndex + 1;  

    let questionsFile = questionsFiles[palierIndex];
    const script = document.createElement('script');
    script.src = questionsFile;

    script.onload = () => {
        displayQuestion();  
    };

    document.body.appendChild(script);

    stopAllAudio();

    let musicFile = musicFiles[palierIndex];
    currentAudio = new Audio(musicFile);
    currentAudio.play();
}

function playAudio() {
    var audio = document.getElementById('audioPlayer');
    audio.play();
}

function startGame() {
    initializeGame();
    loadContent();  
    displayQuestion();
    document.getElementById('jokers-container').style.display = 'flex';
}

function initializeGame() {
    currentQuestionIndex = 0;
    previousQuestionIndex = -1;  
    incorrectAnswers = [];  

    // Créer un tableau d'indices pour les questions  
    const questionIndices = Array.from(Array(questions.length).keys());
    shuffleArray(questionIndices); // Mélanger les indices

    currentQuestionIndices = questionIndices; // Enregistrer les indices mélangés

    document.getElementById('answers-container').innerHTML = '';
    document.getElementById('next-question-btn').style.display = 'none';
}

function displayQuestion() {
    const question = questions[currentQuestionIndices[currentQuestionIndex]]; // Utiliser le tableau mélangé  
    document.getElementById('question-container').innerText = question.question;

    const answerButtons = question.answers.map((answer, index) => `
        <button class='answer-btn' onclick='checkAnswer(${index})'>
            <span class="answer-text">⬪ ${String.fromCharCode(65 + index)} :</span> 
            <span class="answer-response">${answer}</span>
        </button>
    `);

    const linesHtml = `
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
            <div style="flex: 1; display: flex; justify-content: space-around;">
                ${answerButtons[0]} <!-- Bouton A -->
                ${answerButtons[1]} <!-- Bouton B -->
            </div>
            <div style="flex: 1; display: flex; justify-content: space-around;">
                ${answerButtons[2]} <!-- Bouton C -->
                ${answerButtons[3]} <!-- Bouton D -->
            </div>
        </div>
    `;

    document.getElementById('answers-container').innerHTML = linesHtml;
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndices[currentQuestionIndex]]; // Utiliser le tableau mélangé  
    const buttons = document.querySelectorAll('.answer-btn');

    buttons.forEach(button => {
        button.classList.remove('correct-answer');
    });

    if (previousQuestionIndex !== -1) {
        const previousPalierDiv = document.querySelectorAll('.paliers div')[previousQuestionIndex];
        const previousScoreDiv = document.querySelectorAll('.scores div')[previousQuestionIndex];

        if (!previousPalierDiv.classList.contains('special')) {
            previousPalierDiv.style.color = '#ff9900';  
        } else {
            previousPalierDiv.style.color = 'white';  
        }
        previousPalierDiv.style.backgroundColor = 'transparent'; 

        if (!previousScoreDiv.classList.contains('special')) {
            previousScoreDiv.style.color = '#ff9900';  
        } else {
            previousScoreDiv.style.color = 'white';  
        }
        previousScoreDiv.style.backgroundColor = 'transparent';  
    }

    if (selectedIndex === question.correctAnswer) {
        buttons[selectedIndex].classList.add('correct-answer');

        var audio = new Audio('audio/bonnereponsefacile.mp3');
        audio.play().catch(function(error) {
            console.error("Erreur de lecture audio : ", error);
        });

        const palierDiv = document.querySelectorAll('.paliers div')[currentQuestionIndex];
        const scoreDiv = document.querySelectorAll('.scores div')[currentQuestionIndex];

        if ([0, 4, 9, 14].includes(currentQuestionIndex)) {
            palierDiv.style.color = 'black';  
            scoreDiv.style.color = 'black';  
        } else {
            palierDiv.style.color = 'black';  
            scoreDiv.style.color = 'black';  
        }

        palierDiv.style.backgroundColor = 'orange';  
        scoreDiv.style.backgroundColor = 'orange';

        previousQuestionIndex = currentQuestionIndex;

        setTimeout(() => {
            if ([4, 9, 14].includes(currentQuestionIndex)) {
                palierDiv.style.color = 'white';  
                scoreDiv.style.color = 'white';  
            }
            nextQuestion();  
        }, 1000);  
    } else {
        alert(`Mauvaise réponse ! La bonne réponse était : ${question.answers[question.correctAnswer]}`);  
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        alert("Fin du jeu !");
        initializeGame(); 
    } else {
        loadContent();  
        displayQuestion();
    }
}

function highlightScore(isCorrect) {
    const palierDiv = document.querySelectorAll('.paliers div')[currentQuestionIndex];
    const scoreDiv = document.querySelectorAll('.scores div')[currentQuestionIndex];

    if (isCorrect) {
        palierDiv.style.color = 'black'; 
        scoreDiv.style.color = 'black'; 
        setTimeout(() => {
            palierDiv.style.color = '#ff9900'; 
            scoreDiv.style.color = 'white';
        }, 1000); 
    }
}

function useFiftyFifty() {
    var audio = document.getElementById('fiftyFiftyAudio');
    audio.play();

    const question = questions[currentQuestionIndices[currentQuestionIndex]];
    const answerButtons = document.querySelectorAll('.answer-btn');

    answerButtons.forEach(button => {
        button.style.display = 'inline-block';
    });

    incorrectAnswers = []; 

    while (incorrectAnswers.length < 2) {
        const randomIndex = Math.floor(Math.random() * question.answers.length);
        if (randomIndex !== question.correctAnswer && !incorrectAnswers.includes(randomIndex)) {
            incorrectAnswers.push(randomIndex);
        }
    }

    answerButtons.forEach((button, index) => {
        if (incorrectAnswers.includes(index)) {
            button.style.display = 'none';  
        }
    });
}

function usePhoneAFriend() {
    stopAllAudio();  
    var audio = document.getElementById('phoneAFriendAudio');
    audio.play();
    alert("Votre ami pense que la réponse est B.");
}

function stopAllAudio() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.pause();  
        audio.currentTime = 0;  
    });
}

function usePublicHelp() {
    var audio = document.getElementById('publicHelpAudio');
    audio.play();
    alert("Le public pense que la réponse correcte est A ou C.");
}

window.onload = function() {
    var audio = document.getElementById('audioPlayer');
    audio.play().catch(function(error) {
        console.log("Lecture automatique bloquée : " + error);
    });
};