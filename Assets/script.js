// Defining variables 
var startButton = document.querySelector("#start")
var playAgain = document.querySelector("#play")
var theQuiz = document.querySelector("#quizInt")
var theStart = document.querySelector("#startInt")
var theEnd = document.querySelector("#endInt");
var theView = document.querySelector("#viewInt")
var scoreBut = document.querySelector("#saveScore")
var but0 = document.querySelector("#ans0")
var but1 = document.querySelector("#ans1")
var but2 = document.querySelector("#ans2")
var but3 = document.querySelector("#ans3")
var high1 = document.querySelector("#high1")
var high3 = document.querySelector("#high3")
var quest = document.querySelector("#quest")
var theScore = document.querySelector("#score")
var homeBut = document.querySelector("#homePage")
var homeBut2 = document.querySelector("#homePage2")
var scoreboard = document.querySelector("#scoreboard")
var initials = document.querySelector("#initials")
var count = 10;
var score = 0;
var currentQuestion = 0; 
var questions = [
    {
        question: "What goes at the end of every javascript statement?",
        choices: [
            "Colon",
            "Semicolon",
            "Period",
            "Comma",         
        ],
        answer: "Semicolon",
    },
    {
        question: "What is the name of the data type that stores true or false?",
        choices: [
            "Boolean",
            "Number",
            "String",
            "Object",         
        ],
        answer: "Boolean",
    },
    {
        question: "What data type contains multiple elements accessible by a key?",
        choices: [
            "Const",
            "String",
            "Let",
            "Array",         
        ],
        answer: "Array",
    },
    {
        question: "What is the color of the answer buttons?",
        choices: [
            "Red",
            "Green",
            "Grey",
            "Blue",         
        ],
        answer: "Grey",
    }];

// If there is already a scoreboard stored in score then it will retrieve it from localstorage for the scoreboard. 
if(localStorage.getItem("score")){
    leaderBoard = JSON.parse(localStorage.getItem("score"))
} else {
    var leaderBoard = [];
}
// viewScores function views the scores
function viewScores(){
    if(initials.value !== initials){
        theView.setAttribute("class", "View Score")
        theEnd.setAttribute("class", "End Interface hidden")
        theStart.setAttribute("class", "Start Interface hidden")
        theQuiz.setAttribute("class", "Quiz Interface hidden")
        storeIt();  
        count = 10;
    }  
}
// stores initials and score for scoreboard
function storeIt(){
    var newScoreTable = initials.value + " - " + count
    leaderBoard.push(newScoreTable)
    localStorage.setItem("score", JSON.stringify(leaderBoard))
    for(i=0; i<leaderBoard.length; i++){
        var newScore = document.createElement("li");
        var forText = document.createElement("a");
        newScore.appendChild(forText);
        scoreboard.appendChild(newScore);
        forText.innerHTML = leaderBoard[i];
    }
}
// if the game ends then this function fires presenting the game over screen
function gameOver(){
    console.log(count)
    theEnd.setAttribute("class", "End Interface")
    theQuiz.setAttribute("class", "Quiz Interface hidden")
    theScore.textContent = " Your Score: " + count ;
    currentQuestion = 0;
    console.log(currentQuestion);
}
// when the game is started this function fires presenting the user with questions and starting the clock
function startGame(){
    console.log("started")
    theQuiz.setAttribute("class", "Quiz Interface")
    theStart.setAttribute("class", "Start Interface hidden")

    var interval = setInterval(function(){
        document.getElementById('count').textContent = count;
        count--;
        if (count <= 0){
            clearInterval(interval);
            gameOver();
            // youLost();
            count = count;
            console.log(count)
        }else if(currentQuestion === questions.length){
            clearInterval(interval);
            count = count + 2;
            gameOver();
        }
      
    }, 1000)
    nextQuestion();
}
// if a question is answered correctly, this function fires presenting a new one to the user 
function nextQuestion(){
    quest.textContent = questions[currentQuestion].question
    but0.textContent = questions[currentQuestion].choices[0]
    but1.textContent = questions[currentQuestion].choices[1]
    but2.textContent = questions[currentQuestion].choices[2]
    but3.textContent = questions[currentQuestion].choices[3] 
}
// this function changes classes in html to display the home screen when either of the home page buttons
// are clicked 
function goHome(){
    theQuiz.setAttribute("class", "Quiz Interface hidden")
    theView.setAttribute("class", "View Score hidden")
    theEnd.setAttribute("class", "End Interface hidden")
    theStart.setAttribute("class", "Start Interface")
    count = 10;
}
// the function containing the logic for how to handle user clicks in the game
const answerClick = function(event){
    var answer = questions[currentQuestion].answer
    console.log("targetText1: ", event.target.textContent)
    console.log("correctAnswer1: ", answer)
    if(event.target.textContent === answer){
        currentQuestion++;
        console.log(currentQuestion);
        nextQuestion();   
    }else if(event.target.textContent !== answer){
        count = count - 5;
    }
}

// All of the buttons are set here so that all of the buttons on the website do something. 

high1.addEventListener("click",viewScores)
high3.addEventListener("click",viewScores)
homeBut.addEventListener("click", goHome)
homeBut2.addEventListener("click", goHome)
startButton.addEventListener("click", startGame)
scoreBut.addEventListener("click", viewScores)
but0.addEventListener("click", answerClick)
but1.addEventListener("click", answerClick)
but2.addEventListener("click", answerClick)
but3.addEventListener("click", answerClick)



