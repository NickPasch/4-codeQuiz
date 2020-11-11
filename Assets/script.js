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
var quest = document.querySelector("#quest")
var theScore = document.querySelector("#score")
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

if(localStorage.getItem("score")){
    leaderBoard = JSON.parse(localStorage.getItem("score"))
} else {
    var leaderBoard = [];
}

function viewScores(){
    if(initials.value !== initials){
        theView.setAttribute("class", "View Score")
        theEnd.setAttribute("class", "End Interface hidden")
        storeIt();

        
    }  
}

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

function gameOver(){
    console.log(count)
    theEnd.setAttribute("class", "End Interface")
    theQuiz.setAttribute("class", "Quiz Interface hidden")
    theScore.textContent = " Your Score: " + count ;
    currentQuestion = 0;
    console.log(currentQuestion);
}

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
            youLost();
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

function nextQuestion(){
    quest.textContent = questions[currentQuestion].question
    but0.textContent = questions[currentQuestion].choices[0]
    but1.textContent = questions[currentQuestion].choices[1]
    but2.textContent = questions[currentQuestion].choices[2]
    but3.textContent = questions[currentQuestion].choices[3] 
}

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

startButton.addEventListener("click", startGame)
scoreBut.addEventListener("click", viewScores)
but0.addEventListener("click", answerClick)
but1.addEventListener("click", answerClick)
but2.addEventListener("click", answerClick)
but3.addEventListener("click", answerClick)



