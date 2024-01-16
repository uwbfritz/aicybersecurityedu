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
        "question": "What does AI in 'Artificial Intelligence' primarily refer to?",
        "answers": {
            "A": "The ability of a machine to perform artistic tasks",
            "B": "The capability of a computer program to think and learn like a human",
            "C": "The use of computers for automated data entry",
            "D": "The process of improving computer hardware"
        },
        "correctAnswer": "B",
        "explanation": "AI involves creating algorithms that allow machines to perform tasks typically requiring human intelligence, such as learning from data and making decisions."
    },
    {
        "question": "Which of the following is an example of AI in daily life?",
        "answers": {
            "A": "A calculator performing basic arithmetic.",
            "B": "Siri or Alexa understanding and responding to voice commands.",
            "C": "A television remote changing channels.",
            "D": "An electric fan turning on and off automatically."
        },
        "correctAnswer": "B",
        "explanation": "Siri and Alexa are digital assistants that use AI to understand natural language and fulfill user requests, showcasing AI's ability to interpret and respond to human speech."
    },
    {
        "question": "What marks the beginning of AI as a field?",
        "answers": {
            "A": "The creation of the first computer",
            "B": "The invention of the internet",
            "C": "The development of programmable digital computers in the 1940s",
            "D": "The launch of the first smartphone"
        },
        "correctAnswer": "C",
        "explanation": "AI as a field began with the development of programmable digital computers in the 1940s, enabling the creation of programs that could perform tasks resembling human decision-making."
    },
    {
        "question": "AI systems improve over time through:",
        "answers": {
            "A": "Manual updates by programmers",
            "B": "Physical upgrades to the computer hardware",
            "C": "Learning from new data and experiences",
            "D": "Increasing the electricity supply to the system"
        },
        "correctAnswer": "C",
        "explanation": "AI systems can process and learn from new information, improving their performance and decision-making capabilities over time, much like human learning."
    },
    {
        "question": "What role does AI play in cybersecurity?",
        "answers": {
            "A": "It replaces all human tasks in cybersecurity.",
            "B": "It is used for physical security like guarding premises.",
            "C": "It helps in identifying and responding to evolving threats.",
            "D": "AI has no role in cybersecurity."
        },
        "correctAnswer": "C",
        "explanation": "In cybersecurity, AI aids in identifying and responding to evolving threats through advanced pattern recognition and predictive analysis. It automates complex tasks like monitoring network traffic and analyzing security logs."
    }
] ;


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