//debug functions for console;
let verbose = true
function log(myString) {
    if (verbose) {console.log(myString)}
}
log('Game Initialized.')


//*************************Global Variables*************************** */

//declare global variables
let playerScore = 0
let correctAnswer = 0 //correct answer for current question
let questionIndex = 0 //what question are we on?
let disableButtons = false

//score variables
let rightAns = 0
let wrongAns = 0


//*************************DOM declarations/Event listeners*************************** */

//declare DOM Variables
//questions to .question-box
//answers to box0 box1 box2 box3 and make each it's own button
let questionBox = document.querySelector(".question-box")

let box0 = document.querySelector(".box0")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")

let finalScreen = document.querySelector("#final-screen")
finalScreen.style.display = "none"

let resultDisplay = document.querySelector("#result-container")
let resultWord = document.querySelector("#result")
resultDisplay.style.visibility = "hidden"


//buttons
box0.addEventListener("click", function(){
    playerAnswer(0)
})
box1.addEventListener("click", function(){
    playerAnswer(1)
})
box2.addEventListener("click", function(){
    playerAnswer(2)
})
box3.addEventListener("click", function(){
    playerAnswer(3)
})



//next question button
resultDisplay.addEventListener("click", function() { 
    log('Next clicked.')
    flagAnswers(false)
    checkGameEnd()
    if(questionIndex < testQuestions.length) {
        loadQuestion(testQuestions[questionIndex])
    }
})

//reset button at end of game
document.querySelector('.reset').addEventListener("click", function () {
    testQuestions = shuffle(questionArray)
    location.reload()
})


//*************************Question related things.*************************** */

//load question/asnwer text with function.
//question format:
//["question here", "answer 0", "1", "2", "3", <correct as int 0,1,2 or 3>]


let questionArray = [
["What is your name?","Sir Robin","Sir David","King Aurthur", "Sir Lancelot", 1],
["What is your quest?", "To become famous", "To defeat the French", "To find the Holy Grail", "To reach Camelot", 2],
["What is your favorite color?","Blue","Red","Green", "Orange", 0],
["What is the average flight speed of an unladen European swallow?","33 MPH","15 MPH","62 MPH", "24 MPH", 3]
]

let testQuestions = shuffle(questionArray)

function shuffle(sourceArr) {
    let arr = [...sourceArr]
    let currentLength = arr.length
    let randomIndex = 0
    let newArray = []
    while (currentLength !== 0) {
        randomIndex = Math.floor(Math.random() * (currentLength-1))
        newArray.push(arr.splice(randomIndex,1)[0])
        currentLength -= 1
    }
    return newArray
}

//*************************game functions*************************** */

//display question/answer info on screen.
function loadQuestion(question) {
    questionBox.innerHTML = question[0]
    box0.innerHTML = question[1]
    box1.innerHTML = question[2]
    box2.innerHTML = question[3]
    box3.innerHTML = question[4]
    correctAnswer = question[5]
    resultDisplay.style.visibility = "hidden"
    disableButtons = false
}
function flagAnswers(str) {
    //depending on t/f value of bool highlight correct/incorect answers
    //or restor black border.
    const boxes = document.querySelectorAll(".answer-box")
    if (str === 'wrong') {
        for (box = 0; box < boxes.length; box++) {
            boxes[box].style.border = "red 5px solid"
        }
        boxes[correctAnswer].style.border = "green 5px solid"
    } else if (str === 'correct') {
        boxes[correctAnswer].style.border = "green 5px solid"

    } else {
        for (box = 0; box < boxes.length; box++) {
            boxes[box].style.border = "black 5px solid"

       }
    }
}

//log player answer as right or wrong and score to console. 
function playerAnswer(selection){
    if (disableButtons) {return}
    log(`Player selected ${selection}`)
    if (selection === correctAnswer) {
        log("Correct.")
        flagAnswers('correct')
        resultDisplay.style.visibility = "visible"
        resultWord.innerHTML = "Correct"
        rightAns += 1
    } else {
        log("Incorrect.")
        flagAnswers('wrong')
        resultDisplay.style.visibility = "visible"
        resultWord.innerHTML = "Incorrect"
        wrongAns += 1
    }
    updateScore()
    disableButtons = true
    //change question
    questionIndex += 1



}
function updateScore() {
    //update score on screen
    document.querySelector(".score-box").innerHTML = rightAns
}

function checkGameEnd(){
    //check for game end load game and screen if true
    if(questionIndex === testQuestions.length) { 
        log("Game end.")
        document.querySelector("#game-box").style.display = "none"
        finalScreen.style.display = "block"
        document.querySelector(".correct").innerHTML = rightAns
        document.querySelector(".incorrect").innerHTML = wrongAns
    } else {
        // loadQuestion(testQuestions[questionIndex])
        // document.querySelector(".score-box").innerHTML = rightAns
    }
}


loadQuestion(testQuestions[questionIndex])
