var startButton = document.querySelector("#start")
var playAgain = document.querySelector("#play")
var theQuiz = document.querySelector("#quizInt")
var theStart = document.querySelector("#startInt")
var theEnd = document.querySelector("#endInt");
var but0 = document.querySelector("#ans0")
var but1 = document.querySelector("#ans1")
var but2 = document.querySelector("#ans2")
var but3 = document.querySelector("#ans3")
var quest = document.querySelector("#quest")

var count = 40;

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

var score = 0;
var currentQuestion = 0; 


function viewScores(){

}

function gameOver(){
    theEnd.setAttribute("class", "End Interface")
    theQuiz.setAttribute("class", "Quiz Interface hidden")
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
        if (count === 0){
          clearInterval(interval);
          document.getElementById('count').innerHTML='Done';
          gameOver();
        }
        if (currentQuestion === questions.length){
            gameOver();
        }
      
    }, 1000)
    // calls first question, starts timer, hides menu 
    nextQuestion();
}

function nextQuestion(){
    
    quest.textContent = questions[currentQuestion].question
    but0.textContent = questions[currentQuestion].choices[0]
    but1.textContent = questions[currentQuestion].choices[1]
    but2.textContent = questions[currentQuestion].choices[2]
    but3.textContent = questions[currentQuestion].choices[3] 

}

startButton.addEventListener("click", startGame)


document.addEventListener("click", function(event){
    var answer = questions[currentQuestion].answer
    if(event.target.textContent === answer){
        currentQuestion++;
        console.log(currentQuestion);
        nextQuestion();   
    }
    if(event.target.textContent !== answer){
        count = count - 5;

    }
})

// document.addEventListener("click", function(event){
//     var notAnswer = questions[currentQuestion].answer
//     if(event.target.textContent !== notAnswer){
//         count = count - 5;

//     }
// })


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);


