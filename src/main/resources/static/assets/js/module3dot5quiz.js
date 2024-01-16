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
            "question": "What is the primary characteristic of a deep neural network?",
            "answers": {
                "A": "Single-layer architecture",
                "B": "Multiple hidden layers",
                "C": "Only one neuron",
                "D": "Cannot process sequential data"
            },
            "correctAnswer": "B",
            "explanation": "Deep neural networks have multiple layers between the input and output layers, enabling them to learn complex patterns."
        },
        {
            "question": "What is the main advantage of using Recurrent Neural Networks (RNNs)?",
            "answers": {
                "A": "Handling image data",
                "B": "Processing sequential data",
                "C": "Simple architecture",
                "D": "Fast computation"
            },
            "correctAnswer": "B",
            "explanation": "RNNs are designed to work with sequential data, making them effective for tasks like speech recognition or language modeling."
        },
        {
            "question": "What distinguishes Long Short-Term Memory (LSTM) networks from traditional RNNs?",
            "answers": {
                "A": "LSTMs cannot process sequential data",
                "B": "LSTMs are not suitable for time series data",
                "C": "LSTMs have a special mechanism to avoid long-term dependency problems",
                "D": "LSTMs are simpler in structure"
            },
            "correctAnswer": "C",
            "explanation": "LSTMs are designed with a unique architecture to remember information for long periods, which is an improvement over traditional RNNs."
        },
        {
            "question": "What is a key benefit of using neural networks in machine learning?",
            "answers": {
                "A": "Limited to linear relationships",
                "B": "Can model complex, non-linear relationships",
                "C": "Do not require training data",
                "D": "Only suitable for small datasets"
            },
            "correctAnswer": "B",
            "explanation": "Neural networks are capable of modeling highly complex and non-linear relationships, making them versatile for various tasks."
        },
        {
            "question": "In the context of neural networks, what does 'back propagation' refer to?",
            "answers": {
                "A": "The process of feeding data forward through the network",
                "B": "The method of training the network using labeled data",
                "C": "The algorithm for updating network weights based on error gradients",
                "D": "The technique for visualizing neural network layers"
            },
            "correctAnswer": "C",
            "explanation": "Back propagation is a key learning algorithm in neural networks, where the network learns by adjusting weights in reverse order to minimize error."
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