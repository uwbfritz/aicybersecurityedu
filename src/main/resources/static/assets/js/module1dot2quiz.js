function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft= "0";
}

// Responsive Sidebar
window.addEventListener('scroll', function() {
    var headerHeight = document.querySelector('header').offsetHeight;
    var sidebar = document.querySelector('.sidebar');

    if (window.pageYOffset > headerHeight) {
        sidebar.style.top = '0';
    } else {
        sidebar.style.top = (headerHeight - window.pageYOffset) + 'px';
    }
});

// Add event listeners for chapter links
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        // e.preventDefault();
        const chapterId = this.getAttribute('href').substring(1);
        // Load chapter content dynamically here
        // For example, set innerHTML of mainContent
        // document.getElementById('mainContent').innerHTML = '<h2>Chapter Content</h2>';
        closeNav();
    });
});




const quizQuestions = [
        {
            "question": "What does ML use to make informed decisions?",
            "answers": {
                "A": "User opinions",
                "B": "Random number generation",
                "C": "Analysis of large datasets",
                "D": "Physical hardware components"
            },
            "correctAnswer": "C",
            "explanation": "ML involves analyzing large datasets to identify patterns, making informed decisions based on this analysis, which is particularly useful in dynamic fields like cybersecurity."
        },
        {
            "question": "Which of these is a key feature of Machine Learning in cybersecurity?",
            "answers": {
                "A": "Playing online games securely.",
                "B": "Improving website design.",
                "C": "Learning from large volumes of security data to detect threats.",
                "D": "Creating stronger passwords."
            },
            "correctAnswer": "C",
            "explanation": "In cybersecurity, ML systems analyze large amounts of security data to learn what normal behavior looks like and then detect anomalies that may indicate threats."
        },
        {
            "question": "Which type of learning is NOT a category of Machine Learning?",
            "answers": {
                "A": "Supervised Learning",
                "B": "Unsupervised Learning",
                "C": "Reinforcement Learning",
                "D": "Manual Learning"
            },
            "correctAnswer": "D",
            "explanation": "The three main categories of Machine Learning are Supervised Learning, Unsupervised Learning, and Reinforcement Learning. 'Manual Learning' is not a recognized category in Machine Learning."
        },
        {
            "question": "In cybersecurity, ML is particularly useful for:",
            "answers": {
                "A": "Increasing the physical security of devices",
                "B": "Improving the aesthetics of user interfaces",
                "C": "Detecting and responding to new threats",
                "D": "Reducing the cost of computer hardware"
            },
            "correctAnswer": "C",
            "explanation": "ML can analyze vast amounts of security data, learn what normal behavior looks like, and then detect anomalies or new threats, enhancing cybersecurity measures."
        },
        {
            "question": "Which statement best describes the role of data in Machine Learning (ML)?",
            "answers": {
                "A": "Data is not essential for ML algorithms.",
                "B": "ML algorithms use data primarily for display purposes.",
                "C": "Data is used by ML algorithms to learn patterns and make decisions.",
                "D": "ML requires data only during the initial setup phase."
            },
            "correctAnswer": "C",
            "explanation": "In Machine Learning, algorithms analyze data to identify patterns, learn from these patterns, and make informed decisions or predictions based on the analyzed data. This process is fundamental to how ML operates, making data crucial for ML algorithms."
        }
    ]
;


function buildQuiz(){
    const output = [];
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    document.getElementById('quiz-questions').innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quiz.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // Add explanation below each question
        let explanationElement = document.createElement('div');
        explanationElement.classList.add('explanation');
        explanationElement.innerHTML = currentQuestion.explanation;
        answerContainer.appendChild(explanationElement);

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
        }

        // Find and style the correct answer green
        const correctSelector = `input[name=question${questionNumber}][value="${currentQuestion.correctAnswer}"]`;
        const correctAnswerElement = answerContainer.querySelector(correctSelector);
        if (correctAnswerElement) {
            const correctAnswerContainer = correctAnswerElement.parentNode;
            correctAnswerContainer.style.color = 'green';
        }

        // If the user's answer is wrong, style their answer red
        if(userAnswer !== currentQuestion.correctAnswer){
            const userAnswerElement = answerContainer.querySelector(selector);
            if (userAnswerElement) {
                const userAnswerContainer = userAnswerElement.parentNode;
                userAnswerContainer.style.color = 'red';
            }
        }
    });

    document.getElementById('results').innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit-button');
buildQuiz();
submitButton.addEventListener('click', showResults);