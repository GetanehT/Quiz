Quiz Project


This project is a simple, web-based quiz application designed to present multiple-choice questions to the user, track their score, and display their final score at the end. The application is built with HTML, CSS, and JavaScript, ensuring it is lightweight and easy to deploy.

Table of Contents
-Features
-Installation
-Usage
-File Structure
-JavaScript Functionality
  -Variables
  -Functions
-Customization
  -Adding More Questions
  -Changing Styles
-Dependencies
-Contributing
-License
-Contact

Features
-Multiple-choice questions: Provides a variety of questions with multiple-choice answers.
-Answer feedback: Displays whether the selected answer is correct or incorrect.
-Score tracking: Keeps track of the user's score throughout the quiz.
-Responsive design: Adapts to various screen sizes for an optimal viewing experience on both desktop and mobile devices.
-Social media integration: Includes icons for popular social networks.
Installation
To set up the project locally, follow these steps:

1.Clone the repository:  https://getaneht-quiz-rvrj1vn1n1b.ws.codeinstitute-ide.net/
2.Navigate to the project directory: cd quiz-project

Usage
1.Open the index.html file:

-You can open this file directly in your web browser to start the quiz.

2.Answer the questions:

    -The first question will load automatically.
    -Click on one of the choices to select your answer.
    -Feedback will be provided, indicating whether your answer was correct or incorrect.


3.Proceed to the next question:

     -Click the "Next" button to move to the next question.
     -Continue this process until you reach the end of the quiz.


4.View your final score:

    -At the end of the quiz, your final score will be displayed along with the total number of questions.

File Structure

quiz-project/
│
├── asset/
│   └── css/
│       └── style.css   # Styling for the quiz
│
├── index.html          # Main HTML file
├── about.html          # About page (optional)
├── script.js           # JavaScript for quiz functionality
└── README.md           # Readme file


JavaScript Functionality

Variables

+ questions: An array of objects where each object represents a 
  quiz question with the properties:

     *question: The question text.
     *choices: An array of answer choices.
     *answer: The correct answer.

+ currentQuestionIndex: A counter to track the index of the 
  current question being displayed. It starts at 0.

+ score: A counter to track the user's score. It starts at 0.


Functions

    1. loadQuestion()

         + Purpose: Loads the current question and its answer 
           choices into the DOM.
         + Process:

            1.Retrieves the current question object based on 
              currentQuestionIndex.
            2.Updates the question text in the DOM element with 
              the ID ask.
            3.Clears the choice-button container of any    
              previous   choices.
            4.Creates a button for each choice and appends it to 
              the choice-button container.
            5. Adds an event listener to each button that calls 
               selectAnswer with the selected choice when clicked.

2.selectAnswer(selectedChoice)

    + Purpose: Handles the user's answer selection, updates the 
      score if the answer is correct, and displays feedback.
    + Parameters:
       -selectedChoice: The choice that the user selected.

    + Process:

      1. Compares selectedChoice with the correct answer for the 
         current question.
      2. Updates the answer element to display whether the 
         selection was correct or wrong.
      3. Increments the score if the selected answer is correct.
      4. Updates the score display.

3. nextQuestion()

   + Purpose: Moves to the next question in the quiz.
   + Process:
       1. Hides the feedback message (answer element).
       2. Increments the currentQuestionIndex to move to the next 
          question.
       3. Checks if there are more questions left:
           + If yes, calls loadQuestion to load the next question.
           + If no, displays the final score and a completion 
              message.


4. Initialization

    + Purpose: Sets up the initial state of the quiz when the 
      page loads.
    + Process:
       1. Adds an event listener for the DOMContentLoaded event 
          to call loadQuestion when the page has finished loading.


Customization

Adding More Questions

To add more questions, modify the questions array in script.js. Each question object should include a question string, a choices array, and an answer string:


Changing Styles

To customize the look and feel of the quiz, edit the style.css file located in the asset/css/ directory. You can adjust colors, fonts, layout, and more by modifying the CSS rules.


Dependencies

  +  FontAwesome: For social network icons.
  +  Google Fonts: Lato and Oswald are used for custom fonts in 
     the quiz. You can find the import statements in the CSS file.

Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, please open an issue or submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For any questions or suggestions, please open an issue on GitHub or contact the project maintainer.













