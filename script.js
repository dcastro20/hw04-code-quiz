
/// array with objects with questions / responses / corret

var questions = [
  {
    q: "Commonly used data types DO NOT INCLUDE:",
    a: ["Strings", "Boolean", "Alerts", "Number"],
    corIndex: 2
  },
  {
    q: "The condition in an if/else statement is enclosed within",
    a: ["Quotes", "Curly Bracket", "Parentheses", "Square Bracket"],
    corIndex: 2
  },
  {
    q: "Array in Javascript and be used to store _____.",
    a: ["Numbers and Strings", "Booleans", "Other Arrays", "All of the above"],
    corIndex: 3
  },
  {
    q: "String value must be encosed within _____ when being assigned to variables",
    a: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    corIndex: 2
  },
  {
    q: "A very useful tool during development and debugging for printing content to the debugger is.",
    a: ["Console Log", "Terminal/Bash", "For Loop", "Javascript"],
    corIndex: 0
  },
]


var timerEl = document.getElementById("countdown");
var quizStart = document.getElementById("start-quiz");
var timeLeft = 75;
var timeInterval;
var index = 0;
var titleQuestions = document.querySelector(".title");
var quest = [questions[0].q1,questions[1].q2, questions[2].q3, questions[3].q4, questions[4].q5];
var highScore = document.getElementById("Highscore");
var introCard = document.querySelector(".card-body.intro");

//var ans = [a1, a2, a3, a4, a5];
//var correct = [corIndex1, corIndex2, corIndex3, corIndex4, corIndex5];

//document.write(highScore);

quizStart.addEventListener("click", function () {
  // start the timer
  quizTimer()
  introCard.style.display = "none"
  //showquestion
  showquestion()
});

function showquestion() {
var currentQuestion= questions[index] //to keep of the current question
titleQuestions.textContent = currentQuestion.q
var answerArea = document.getElementById("answerArea")

  for(var i=0; i <currentQuestion.a.length; i++){
  var button = document.createElement("button");
  button.style.display = "block";
  button.style.margin = "auto";
  button.textContent = currentQuestion.a[i];  
  answerArea.appendChild(button);
 
  }
   button.onclick = answerQuestion;
//  append the onclick for the buttons  --->  every cick you verify the response if correct or not --- > increment --> verify if index is the last question --> 
 
  function answerQuestion() {
    
var feedback = document.getElementById("feedback");
 var time = questions.length * 10;
 var choices = document.getElementById("choices");

    if (this.value !== questions[index].answer) 
      // penalize time
      time -= 10;        
      choices.innerHTML = "";  
    }
    //  if last question the go to results  if  index < array.length the index and go to showquestion()
    feedback.setAttribute("class", "feedback");
    setTimeout(function () {
      feedback.setAttribute("class", "feedback hide");
    }, 1000);
    //Index++;

  }
function quizTimer() {
      timeInterval = setInterval(function () {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;

        if (timeLeft === 0) {
          timerEl.textContent = "";

          clearInterval(timeInterval);
        }

      }, 1000);
    };

  function showResults() {

    // score is going to be= remaining seconds 

    // clear the timer
    clearInterval(timeInterval);
    //get the initals plus the score and save it on the localstorage

    // JSON.parse
    // JSON.stringify

    // array with objects  [{name:"IA",score=50},{name:"pt", score:40}]


  }
