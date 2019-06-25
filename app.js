var correctAnswers = { "1": "true", "2": "true", "3": "false" }
var correctTotal = 0
var questionsAnswered = []
$(".btn-sm").click(checkAnswer)
$(".btn-lg").click(finishGame)
function finishGame() {
    if (correctTotal == 3) {
        alert("you won!!")

    }
    else {
        alert("you were correct on " + correctTotal + " answers")
    }
}
function checkAnswer() {
    var questionKey = $(this).attr("data-question")
    var userAnswer = $(this).attr("data-answer")
    if (questionsAnswered.includes(questionKey)) {
        return;
    }
    questionsAnswered.push(questionKey)
    if (correctAnswers[questionKey] == userAnswer) {
        correctTotal++



        console.log(correctTotal)


    }
}