Quiz Project


This project is a simple, web-based quiz application designed to present multiple-choice questions to the user, track their score, and display their final score at the end. The application is built with HTML, CSS, and JavaScript, ensuring it is lightweight and easy to deploy.

Table of Contents
* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Features](#features)
    * [The Game Page](#the-game-page)
    * [The 404 Error Page](#the-404-error-page)
    * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)
* [Testing](#testing)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)
  
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)
 
 ### Design
### colour-scheme

  As the pages of the site have a background image, I wanted to keep the colour scheme used on the site quite small so as to not overwhelm users.  

In my css file I have used variables to declare colours, and then used these throughout the css file. I was recently introduced to this method during a hackathon - it is a useful convention to use as it allows you to alter the colour throughout the website if you decide to update a colour, by changing the colour once in the variable.

* I have used `#44af52` & `##000000` as the primary and secondary colours used for the sites text.
* I have used `##44af52` as the overlay used over the sites background image.
* I have used `#fc2f2f`  to display the wrong answers.
* I have used `#fc2f2f` to display the correct answer.

### Feature

* Multiple-choice questions: Provides a variety of questions 
  with multiple-choice answers.
* Answer feedback: Displays whether the selected answer is 
  correct or incorrect.
* Score tracking: Keeps track of the user's score throughout 
  the quiz.
* Responsive design: Adapts to various screen sizes for an 
  optimal viewing experience on both desktop and mobile devices.
* Social media integration: Includes icons for popular social 
  networks.

  
#### Future Implementations

In future implementations I would like to:

1. Give users the option to select the amount of questions and easy,difficult in their quiz.
2. Look into making the quiz a multiplayer game, so that it could be played by teams, which would make the quiz even more like a pub quiz.
3. Create a back end database to enable me to store scores which would then allow you to see how you scored against other players.

### Accessibility

* Accessibility is a key focus of this quiz application to 
  ensure that all users, including those with disabilities, can 
  effectively engage with the content. The following 
  accessibility features have been implemented:

* Semantic HTML: Proper use of HTML elements improves 
  compatibility with screen readers and helps users navigate 
  the application.
* Keyboard Navigation: All interactive elements are fully 
  navigable using the keyboard, allowing users who cannot use a 
  mouse to participate easily.

* Clear Color Contrast: The application meets minimum color 
  contrast ratios to aid users with visual impairments.
  

* Alternative Text: If applicable, all images used in the quiz 
 have descriptive alt text to convey their meaning to users 
 relying on screen readers​

* User-Friendly Feedback: Immediate and clear feedback is 
 provided after each answer, helping users understand their 
 performance​.
  
* Error Identification: Any errors or required actions are 
  communicated clearly to assist users in navigating the quiz 
  without confusion​

* Responsive Design: The application is designed to work well 
 on various devices and screen sizes, making it accessible to a 
 wider audience


### Technologies Used

* HTML: The backbone of the application, used for structuring 
 the content of the quiz. It defines elements such as the 
 header, main content area, and footer.

* CSS: Utilized for styling and layout, CSS enhances the visual 
 presentation of the quiz, making it more engaging and user- 
 friendly. It includes responsive design features to ensure 
 compatibility across different devices.

* JavaScript: The primary programming language for implementing 
  interactive functionality. JavaScript handles user 
  interactions, such as selecting answers, tracking scores, and 
  dynamically updating the question displayed.

* FontAwesome: A library of icons used for social media links 
  in the footer, adding a visually appealing aspect to the 
  application and improving user experience.

* Google Fonts: Integrated to provide a more modern and 
  visually appealing typography, enhancing the overall 
  aesthetic of the application.

* Version Control with Git: Used for managing the source code 
  and collaborating with others. This allows for tracking 
  changes, reverting to previous states, and facilitating 
  contributions from other developers.

  ### Languages Used
  
* HTML: The markup language used for creating the structure of 
  the web application. HTML elements define the layout of the 
  quiz, including headings, paragraphs, and interactive buttons.

* CSS: A style sheet language used for describing the 
  presentation of the HTML elements. CSS controls the visual 
  aspects, such as colors, fonts, spacing, and responsive 
  design features to ensure the quiz is accessible on different 
  devices.

* JavaScript: A high-level programming language that enables 
  interactivity within the application. JavaScript is 
  responsible for dynamic content updates, user input handling, 
  score tracking, and providing immediate feedback on user 
  responses.

  ### frameworks-libraries--programs-used

 * [Github](https://github.com/) - To save and store the files 
    for the website.

* [GitPod](https://gitpod.io/) - IDE used to create the site.

* [Google Fonts](https://fonts.google.com/) - To import the 
  fonts used on the website.
* [Google Developer Tools] 
   (https://developers.google.com/web/tools) - To troubleshoot 
  and test features, solve issues with responsiveness and 
  styling.

  ## Deployment & Local Development

### Deployment
#### How to Fork


To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [kera- 
    cudmore/TheQuizArms](https://github.com/kera- 
 cudmore/TheQuizArms)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [kera-cudmore/TheQuizArms](https://github.com/kera-cudmore/TheQuizArms)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

### Usage

### JavaScript Functionality
 ### Variables
* questions: An array of objects where each object represents a 
  quiz question with the following properties:

  * question: The question text.
  * choices: An array of answer choices.
  * answer: The correct answer.
* currentQuestionIndex: A counter that tracks the index of the 
  current question being displayed, starting at 0.

* score: A counter that tracks the user's score, starting at 0.

### Functions

1. loadQuestion()

  * Purpose: Loads the current question and its answer choices 
  into the DOM.
  * Process:
1. Retrieves the current question object based on 
   currentQuestionIndex.
2. Updates the question text in the DOM element with the ID ask.
3. Clears the choice-button container of any previous choices.
4. Creates a button for each choice and appends it to the 
   choice-button container.
5. Adds an event listener to each button that calls 
   selectAnswer with the selected choice when clicked.
   
2. selectAnswer(selectedChoice)

* Purpose: Handles the user's answer selection, updates the 
  score if the answer is correct, and displays feedback.
* Parameters:
 * selectedChoice: The choice that the user selected.
* Process:
   1. Compares selectedChoice with the correct answer for the 
        current question.
   2.  Updates the answer element to display whether the 
       selection was correct or wrong.
   3. Increments the score if the selected answer is correct.
   4.  Updates the score display.
3.  nextQuestion()

* Purpose: Moves to the next question in the quiz.
* Process:
1. Hides the feedback message (answer element).
2. Increments currentQuestionIndex to move to the next question.
3. Checks if there are more questions left:
  * If yes, calls loadQuestion to load the next question.
  *  If no, displays the final score and a completion message.
    Initialization

4. Purpose: Sets up the initial state of the quiz when the page 
   loads.
* Process:
1. Adds an event listener for the DOMContentLoaded event to 
  call loadQuestion when the page has finished loading.


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




