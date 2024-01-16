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
            "question": "Imagine a dataset of various fruits with attributes like color, size, and taste. If you apply K-Means Clustering with K=3, what is the expected outcome?",
            "answers": {
                "A": "The fruits will be divided into 3 groups based on attributes like color, size, and taste.",
                "B": "The algorithm will predict the future types of fruits that might appear.",
                "C": "The fruits will be arranged in a hierarchical tree structure.",
                "D": "Each fruit will be isolated based on its unique characteristics."
            },
            "correctAnswer": "A",
            "explanation": "K-Means Clustering aims to partition the data into K clusters. In this scenario, the algorithm will group the fruits into 3 clusters based on similarities in their characteristics."
        },
        {
            "question": "In Hierarchical Clustering, what would be the result of 'cutting' the dendrogram at a higher level?",
            "answers": {
                "A": "Creation of a larger number of smaller clusters",
                "B": "A single cluster containing all data points",
                "C": "Formation of a smaller number of larger clusters",
                "D": "The algorithm will restart with new parameters"
            },
            "correctAnswer": "C",
            "explanation": "Cutting the dendrogram at a higher level in Hierarchical Clustering means fewer, larger clusters are formed, as it implies merging more data points into broader categories."
        },
        {
            "question": "Consider a dataset with many variables. After applying PCA, what happens to the variables?",
            "answers": {
                "A": "They are classified into discrete clusters.",
                "B": "They are transformed into a smaller number of principal components.",
                "C": "They are isolated based on anomaly scores.",
                "D": "They are encoded and decoded to reconstruct original data."
            },
            "correctAnswer": "B",
            "explanation": "PCA transforms the original variables into a new set of variables, the principal components, reducing the dimensionality of the data while retaining the most significant information."
        },
        {
            "question": "If an Isolation Forest algorithm isolates a data point in fewer splits compared to others, what does it suggest about the data point?",
            "answers": {
                "A": "It is likely to be a central point within a cluster.",
                "B": "It is an anomaly or an outlier.",
                "C": "It belongs to the largest cluster.",
                "D": "It has the highest correlation with other data points."
            },
            "correctAnswer": "B",
            "explanation": "In an Isolation Forest, if a data point is isolated in fewer splits, it indicates that the point is significantly different from the majority, suggesting it is an anomaly or outlier."
        },
        {
            "question": "A cybersecurity analyst applies an Autoencoder to a dataset of network traffic. What is a possible use of this application?",
            "answers": {
                "A": "To classify the network traffic into different types of data packets",
                "B": "To predict the future volume of network traffic",
                "C": "To detect unusual patterns in network traffic indicating potential threats",
                "D": "To create a hierarchical structure of network traffic based on protocol"
            },
            "correctAnswer": "C",
            "explanation": "Autoencoders can compress and then attempt to reconstruct input data. In this context, they can be used to learn a representation of normal network traffic. Deviations in the reconstructed output from the original input can indicate anomalies, potentially signaling cybersecurity threats."
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