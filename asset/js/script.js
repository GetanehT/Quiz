// Sample questions
const questions = [
  {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
  },
  {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
  },
  {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific"
  },
  {
   question:"What is the tallest mountain in the world?",
   choices: ["K2", "Kangchenjunga", "Mount Everest","Lhotse"],
   answer: "Mount Everest"
  },
  {
    question:"Which river is the longest in the world?",
    choices:["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer:  "Nile"
   }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to load the next question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById('ask');
  const choicesContainer = document.getElementById('choice-button');

  questionElement.textContent = currentQuestion.question;
  choicesContainer.innerHTML = '';

  currentQuestion.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.classList.add('choice');
      button.addEventListener('click', () => selectAnswer(choice));
      choicesContainer.appendChild(button);
  });
}

// Function to handle the answer selection
function selectAnswer(selectedChoice) {
  const currentQuestion = questions[currentQuestionIndex];
  const answerElement = document.getElementById('answer');
  
   
   answerElement.classList.remove('correct', 'incorrect');

   // Disable all choice buttons to prevent multiple selections
  const choices = document.querySelectorAll('.choice');
  choices.forEach(button => {
      button.disabled = true; 
  });

   if (selectedChoice === currentQuestion.answer) {
       answerElement.textContent = "Correct!";
       answerElement.classList.add('correct');
       score++;
   } else {
       answerElement.textContent = `Wrong! The correct answer was ${currentQuestion.answer}.`;
       answerElement.classList.add('incorrect');
   }

  answerElement.style.display = 'block';
  document.getElementById('score').textContent = `Score: ${score}`;
}

// Function to move to the next question
function nextQuestion() {
  document.getElementById('answer').style.display = 'none';
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      const quizContainer = document.querySelector('.Quiz');
      quizContainer.innerHTML = `<h1>Quiz Completed</h1>
                                 <h1>Your final score is ${score} out of ${questions.length}.</h1>`;
  }
}

// Initialize the first question
document.addEventListener('DOMContentLoaded', loadQuestion);