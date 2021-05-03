//debug functions for console;
let verbose = true
function log(myString) {
    if (verbose) {console.log(myString)}
}

//declare global variables
let playerScore = 0
log(`score = ${playerScore}`)
let correctAnswer = 0
let questionIndex = 0

//declare DOM Variables
//questions to .question-box
//answers to box0 box1 box2 box3 and make each it's own button
let questionBox = document.querySelector(".question-box")

let box0 = document.querySelector(".box0")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")

// log(questionBox.innerHTML + box0.innerHTML + box1.innerHTML + box2.innerHTML + box3.innerHTML)
// questionBox.innerHTML = "New string"

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


//load question/asnwer text with function.
//question format:
//["question here", "answer 0", "1", "2", "3", <correct as int 0,1,2 or 3>]
testQuestions = [["What is your quest?", "To become famous", "To defeat the French", "To find the Holy Grail", "To reach Camelot", 2],
["What is your name?","Sir Robin","Sir David","King Aurthur", "Sir Lancelot", 1],
["What is your favorite color?","Blue","Red","Green", "Orange", 0]
]
//display question/answer info on screen.
function loadQuestion(question) {
    questionBox.innerHTML = question[0]
    box0.innerHTML = question[1]
    box1.innerHTML = question[2]
    box2.innerHTML = question[3]
    box3.innerHTML = question[4]
    correctAnswer = question[5]
}


//log right or wrong and score to console. push next question.
function playerAnswer(selection){
    log(`Player selected ${selection}`)
    if (selection === correctAnswer) {
        log("Correct.")
    } else {
        log("Incorrect.")
    }

    //change question
    questionIndex += 1
    if(questionIndex === testQuestions.length) {
        log("Game end.")
    } else {
        loadQuestion(testQuestions[questionIndex])
    }


}

loadQuestion(testQuestions[questionIndex])
