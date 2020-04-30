
/// array with objects with questions / responses / corret

var questions = [
  {
    q1: "Commonly used data types DO NOT INCLUDE:",
    a1: ["Strings", "Boolean", "Alerts", "Number"],
    corIndex1: 2
  },
  {
    q2: "The condition in an if/else statement is enclosed within",
    a2: ["Quotes", "Curly Bracket", "Parentheses", "Square Bracket"],
    corIndex2: 2
  },
  {
    q3: "Array in Javascript and be used to store _____.",
    a3: ["Numbers and Strings", "Booleans", "Other Arrays", "All of the above"],
    corIndex3: 3
  },
  {
    q4: "String value must be encosed within _____ when being assigned to variables",
    a4: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    corIndex4: 2
  },
  {
    q5: "A very useful tool during development and debugging for printing content to the debugger is.",
    a5: ["Console Log", "Terminal/Bash", "For Loop", "Javascript"],
    corIndex5: 0
  },
]

var timerEl = document.getElementById("countdown");
var quizStart = document.querySelector("btn");
var timeLeft = 75;
var timeInterval;
var index = 0;
var titleQuestions = document.querySelector(".title");
var quest = [questions[0].q1,questions[1].q2, questions[2].q3, questions[3].q4, questions[4].q5];

//var ans = [a1, a2, a3, a4, a5];
//var correct = [corIndex1, corIndex2, corIndex3, corIndex4, corIndex5];

document.addEventListener("click", function () {
  // start the timer
  quizTimer()
  //showquestion
  showquestion()
  console.log(showquestion);
});

function showquestion() {
  // get for the arry the question in the index
  for (var i = 0; i < questions.length; i++); { 
    // questions.getElementById(".title");  
  // appen the question
 //questions.append(titleQuestions);
  // append the buttons
  //ans.append(Buttons);
  // append the onclick for the buttons  --->  every cick you verify the response if correct or not --- > increment --> verify if index is the last question --> 
  //correct.append(answerQuestion())  
}

    //function answerQuestion() {

      //if (questions === true) {
        //questions.length; index;
      //}
      //else (questions === false){
     //   quizTimer();
      //}
   // }
    //  if last question the go to results  if  index < array.length the index and go to showquestion()


    //loop into the array of a  to build the 3 o 4 buttons
   var btn = document.createElement("button")
  //for(i=0; i<a1.length;i++);
    //btn.innerText = ""
    //btn.value = 0

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
