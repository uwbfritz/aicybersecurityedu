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

document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
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
        question: "What role does AI play in identifying and preventing phishing attacks in cybersecurity?",
        answers: {
            a: "AI has no significant role in phishing detection.",
            b: "AI only identifies phishing emails after they have been opened.",
            c: "AI analyzes patterns and content to proactively identify phishing attempts.",
            d: "AI solely relies on user reports to identify phishing emails."
        },
        correctAnswer: "c",
        explanation: "AI plays a crucial role in cybersecurity by analyzing email patterns and content to proactively identify and prevent phishing attempts, enhancing email security."
    },
    {
        question: "How does AI contribute to compliance and governance in cybersecurity?",
        answers: {
            a: "AI automatically classifies and encrypts personal data for GDPR compliance.",
            b: "AI is used primarily for creating user-friendly interfaces.",
            c: "AI has no role in compliance and governance.",
            d: "AI only assists in external audits and assessments."
        },
        correctAnswer: "a",
        explanation: "In compliance and governance, AI aids by monitoring and documenting security practices, such as automatically classifying and encrypting personal data to ensure GDPR compliance."
    },
    {
        question: "What is a key challenge in the application of AI in cybersecurity?",
        answers: {
            a: "AI systems are too slow to analyze large data volumes.",
            b: "AI can sometimes mislabel normal activities as threats, leading to false positives.",
            c: "AI completely eliminates the need for human cybersecurity experts.",
            d: "AI can only detect known threats, not new ones."
        },
        correctAnswer: "b",
        explanation: "A significant challenge in AI for cybersecurity is the potential for mislabeling normal activities as threats, resulting in false positives, which requires careful management."
    },
    {
        question: "In the context of AI-powered Intrusion Detection Systems (IDS), what action might the system take upon detecting unusual login failures from a single IP address?",
        answers: {
            a: "Send an alert to the user only.",
            b: "Flag the activity as a potential brute force attack and block the IP address.",
            c: "Ignore the activity as a common occurrence.",
            d: "Request manual confirmation before taking any action."
        },
        correctAnswer: "b",
        explanation: "An AI-powered IDS might flag unusual login failures from a single IP as a potential brute force attack and take proactive measures like blocking that IP address."
    },
    {
        question: "What is the role of AI in managing the security of interconnected devices in the Internet of Things (IoT)?",
        answers: {
            a: "AI plays no part in IoT security.",
            b: "AI only monitors the device's performance, not security.",
            c: "AI assists in advertising IoT devices.",
            d: "AI is crucial in monitoring behavior to detect and prevent unauthorized access."
        },
        correctAnswer: "d",
        explanation: "In the IoT context, AI is crucial for monitoring the behavior of interconnected devices to detect and prevent unauthorized access, ensuring the security of these devices."
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