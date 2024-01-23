function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft= "0";
}

window.onload = function() {
    var gifs = document.querySelectorAll('.gif'); // Select all elements with the class 'gif'

    gifs.forEach(function(gif) {
        setInterval(function() {
            var src = gif.src;
            gif.src = "";
            gif.src = src;
        }, 15000); // Adjust the time for each GIF if necessary
    });
};

// Add event listeners for chapter links
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        // e.preventDefault();
        const chapterId = this.getAttribute('href').substring(1);
        // Load chapter content dynamically here
        // For example, set innerHTML of mainContent
        // document.getElementById('mainContent').innerHTML = '<h2>Chapter Content</h2>';
        // closeNav();
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
// Scroll to each sections on CLick
//
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault(); // Prevent the default behavior of the anchor link
//
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
//
//             if (targetElement) {
//                 const offset = document.getElementById("mainContent").offsetTop; // Adjust the offset if needed
//                 window.scrollTo({
//                     top: targetElement.offsetTop - offset,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // e.preventDefault(); // Prevent the default behavior of the anchor link
            console.log("Clicked")
            openNav();
        });
    });
});








const quizQuestionsModule1 = [
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


const quizQuestions = [
    {
        question: "What technology is most effective in identifying deepfake videos, a growing concern in cybersecurity?",
        answers: {
            a: "Firewall Systems",
            b: "Generative AI Algorithms",
            c: "Antivirus Software",
            d: "Simple Pattern Recognition"
        },
        correctAnswer: "b",
        explanation: "Generative AI algorithms, which are often used to create deepfakes, can also be trained to detect the subtle irregularities and patterns that differentiate deepfakes from authentic videos."
    },
    {
        question: "How does Generative AI pose a new threat in the form of phishing attacks?",
        answers: {
            a: "By disrupting network traffic",
            b: "By creating highly realistic phishing websites",
            c: "By generating convincing phishing emails tailored to individual targets",
            d: "By physically damaging computer hardware"
        },
        correctAnswer: "c",
        explanation: "Generative AI can craft convincing, personalized phishing emails that are more likely to deceive recipients, making it a sophisticated tool for cybercriminals."
    },
    {
        question: "In what way can Generative AI be beneficial for enhancing cybersecurity measures?",
        answers: {
            a: "By replacing all human IT staff",
            b: "By generating complex, unpredictable security protocols",
            c: "By solely focusing on creating strong passwords",
            d: "By physically monitoring data centers"
        },
        correctAnswer: "b",
        explanation: "Generative AI can be used to develop complex and less predictable security protocols, making it harder for attackers to find vulnerabilities."
    },
    {
        question: "How is Generative AI advantageous for cybersecurity training?",
        answers: {
            a: "By generating realistic but synthetic data for safe training environments",
            b: "By providing unlimited financial resources",
            c: "By eliminating the need for cybersecurity",
            d: "By ensuring 100% cyberattack prevention"
        },
        correctAnswer: "a",
        explanation: "Generative AI can create realistic, synthetic datasets that enable safe, effective training environments without exposing real sensitive data."
    },
    {
        question: "What role can Generative AI play in preparing for cyber threats?",
        answers: {
            a: "Completely eliminating the need for human cybersecurity experts",
            b: "Providing general IT support",
            c: "Simulating advanced cyber threat scenarios for testing defenses",
            d: "Only focusing on hardware vulnerabilities"
        },
        correctAnswer: "c",
        explanation: "Generative AI can simulate sophisticated cyber threat scenarios, allowing organizations to test and strengthen their defenses against potential real-world attacks."
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

