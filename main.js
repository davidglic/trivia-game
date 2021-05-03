//debug functions for console;
let verbose = true
function log(myString) {
    if (verbose) {console.log(myString)}
}

//declare global variables
let playerScore = 0
log(`score = ${playerScore}`)
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

//display question/answer info on screen.



//log right or wrong and score to console. push next question.
function playerAnswer(selection){
    log(selection)
}
