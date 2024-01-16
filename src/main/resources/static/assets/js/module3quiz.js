function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft= "0";
}

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

document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
});

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
function fetchNews() {
    fetch('/api/news/cybersecurity')
        .then(response => response.json())
        .then(data => {
            const newsContent = document.getElementById('newsContent');
            newsContent.innerHTML = ''; // Clear existing content

            data.forEach(newsItem => {
                const newsDiv = document.createElement('div');
                newsDiv.className = 'news-item';

                const title = document.createElement('h3');
                title.textContent = newsItem.title;

                const description = document.createElement('p');
                description.textContent = newsItem.description.value;

                const link = document.createElement('a');
                link.href = newsItem.link;
                link.textContent = 'Read More';
                link.target = '_blank';

                newsDiv.appendChild(title);
                newsDiv.appendChild(description);
                newsDiv.appendChild(link);

                newsContent.appendChild(newsDiv);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
}



const quizQuestions = [
    {
        question: "What is the primary goal of supervised learning in AI?",
        answers: {
            a: "To train algorithms on unlabeled data",
            b: "To make predictions based on new data",
            c: "To find hidden patterns in data",
            d: "To categorize data in real-time"
        },
        correctAnswer: "b",
        explanation: "Supervised learning trains algorithms using labeled data to make predictions about new, unseen data."
    },
    {
        question: "Which algorithm is commonly used in supervised learning for classification tasks?",
        answers: {
            a: "K-Means Clustering",
            b: "Logistic Regression",
            c: "Principal Component Analysis",
            d: "Apriori Algorithm"
        },
        correctAnswer: "b",
        explanation: "Logistic Regression is a classification algorithm used in supervised learning."
    },
    {
        question: "In machine learning, what is 'overfitting'?",
        answers: {
            a: "Reducing the complexity of a model",
            b: "The model performs well on the training data but poorly on new data",
            c: "Increasing the speed of learning",
            d: "The process of selecting the right features"
        },
        correctAnswer: "b",
        explanation: "Overfitting occurs when a model learns the training data too well, including its noise and outliers, leading to poor generalization."
    },
    {
        question: "Which supervised learning algorithm is particularly effective for large and complex datasets?",
        answers: {
            a: "Linear Regression",
            b: "Decision Trees",
            c: "Neural Networks",
            d: "K-Nearest Neighbors"
        },
        correctAnswer: "c",
        explanation: "Neural networks are powerful for handling large and complex datasets due to their deep learning capabilities."
    },
    {
        question: "Which metric is often used to evaluate the performance of a classification algorithm?",
        answers: {
            a: "Accuracy",
            b: "Mean Squared Error",
            c: "Clustering Coefficient",
            d: "Entropy"
        },
        correctAnswer: "a",
        explanation: "Accuracy is a common metric for assessing classification models, indicating the percentage of correctly classified instances."
    }
];


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