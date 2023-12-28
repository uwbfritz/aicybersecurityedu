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
        question: "In the context of cybersecurity, what is the primary goal of unsupervised learning?",
        answers: {
            a: "To follow strict rules set by cybersecurity experts.",
            b: "To uncover hidden patterns and group similar data without prior labeling.",
            c: "To rely on predefined datasets for detecting threats.",
            d: "To focus solely on supervised learning methods."
        },
        correctAnswer: "b",
        explanation: "Unsupervised learning in cybersecurity aims to discover hidden patterns in data and group similar things together without prior labeling, enhancing the detection of unusual or suspicious behavior."
    },
    {
        question: "How does K-Means Clustering work in identifying cybersecurity threats?",
        answers: {
            a: "By using labeled data to classify types of cyber threats.",
            b: "By clustering similar activity patterns and highlighting anomalies.",
            c: "By following a predefined set of rules for threat detection.",
            d: "By relying on human intervention for data analysis."
        },
        correctAnswer: "b",
        explanation: "K-Means Clustering in cybersecurity groups similar activity patterns, helping to detect anomalies that could indicate security breaches or malicious activities."
    },
    {
        question: "What is a key feature of Hierarchical Clustering in unsupervised learning for cybersecurity?",
        answers: {
            a: "It requires a pre-specified number of clusters.",
            b: "It builds a dendrogram to illustrate relationships between data points.",
            c: "It primarily focuses on supervised learning techniques.",
            d: "It uses only labeled data for clustering."
        },
        correctAnswer: "b",
        explanation: "Hierarchical Clustering creates a dendrogram, a tree-like diagram, to show how individual data points are related, useful for understanding the nature of cyber attacks."
    },
    {
        question: "What makes the Isolation Forest algorithm effective for anomaly detection in cybersecurity?",
        answers: {
            a: "It focuses on clustering large groups of similar data points.",
            b: "It isolates anomalies by constructing multiple decision trees.",
            c: "It requires extensive labeled datasets for analysis.",
            d: "It operates based on pre-defined threat signatures."
        },
        correctAnswer: "b",
        explanation: "The Isolation Forest algorithm is effective in anomaly detection as it isolates outliers or anomalies by constructing multiple decision trees, efficiently identifying unusual patterns."
    },
    {
        question: "In what way do Autoencoders contribute to cybersecurity?",
        answers: {
            a: "By encrypting sensitive data using complex algorithms.",
            b: "By learning to represent normal behavior to detect deviations that may indicate threats.",
            c: "By manually inspecting data for potential security breaches.",
            d: "By relying solely on external threat intelligence."
        },
        correctAnswer: "b",
        explanation: "Autoencoders contribute to cybersecurity by learning efficient representations of normal behavior and detecting deviations, useful in identifying potential security threats."
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
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    document.getElementById('results').innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit-button');
buildQuiz();
submitButton.addEventListener('click', showResults);