$(document).ready(function() {
  // When Start game is clicked, hide the start button.
  $(`#startBtn`).on("click", function() {
    $(`#startBtn`).remove();

    // // Populate a timer
        subtractTime()
    // Populate the questions
    for (let i = 0; i < questions.length; i++) {
      $(`.startWrap`).append(`<hr><p>` + questions[i].question + `</p>`);

      // Populate the answer choices
      for (let a = 0; a < questions[i].answers.length; a++) {
        $(`.startWrap`).append(
          "<br><input type='radio' name= 'questions- " +
            i +
            "' value= '" +
            questions[i].answers[a] +
            "'>" +
            questions[i].answers[a]
        );
      }
    }
  });
  
  var questions = [
      {
          question: "To get over Richard, what did Monica start making?",
          answers: ["Marmalade", "Jam", "Candy", "Cookies"],
          correctAnswer: "Jam"
        },
    {
        question: "What was the name of the self help book that the girls loved?",
        answers: [
            "Be Your Own Windkeeper",
            "Be Your Own Lightning Bearer",
            "Be Your Own Cleansing Pool",
            "Be Your Own Person"
        ],
        correctAnswer: "Be Your Own Windkeeper"
    },
    {
        question: "What was wrong with the couch Ross returned to the store?",
        answers: [
            "The colour was wrong",
            "It was cut in half",
            "It had a stain",
            "It would not PIVOT!"
        ],
        correctAnswer: "It was cut in half"
    },
    {
        question:
        "What was Phoebe in charge of at Rachel's surprise birthday party?",
        answers: [
            "Balloons and Ice",
            "Rice and Ice",
            "Cups and Ice",
            "Rice and Balloons"
        ],
        correctAnswer: "Cups and Ice"
    },
    {
        question:
        "What did Chandler change about his appearance that no one noticed?",
        answers: ["His Hair", "His Mustache", "His Eyebrows", "His Glasses"],
        correctAnswer: "His Glasses"
    },
    {
        question: "What was the name of the coffee shop?",
        answers: ["Perk Central", "Perks Coffee", "Central Perk", "Coffee Perk"],
        correctAnswer: "Central Perk"
    },
    {
        question: "How many times did Ross get divorced?",
        answers: ["5", "4", "2", "3"],
        correctAnswer: "3"
    },
    {
        question: "How many kids did Phoebe have?",
        answers: ["5", "3", "2", "4"],
        correctAnswer: "3"
    },
    {
        question: "What was Joey's iconic pick-up line?",
        answers: [
            "How are you doing?",
            "Have you met Joey?",
            "How you doin'?",
            "How are you?"
        ],
        correctAnswer: "How you doin'?"
    },
    {
        question: "What was the name Joey uses as an alias?",
        answers: ["Ken Adams", "Max Power", "Chandler Bing", "Adams Ken"],
        correctAnswer: "Ken Adams"
    },
    {
        question:
        "What did Phoebe say was wrong with the Rachel's plane to France?",
        answers: [
            "The Right Phalange",
            "The Left Phalange",
            "Nothing",
            "The Front Phalange"
        ],
        correctAnswer: "The Left Phalange"
    },
    {
        question: "What was Chandler's job before he went into advertising?",
        answers: [
            "Data Transponder",
            "Joey's Butler",
            "Actor",
            "Statistical Analysis and Data Reconfiguration"
        ],
        correctAnswer: "Statistical Analysis and Data Reconfiguration"
    },
    {
        question: "Where was Joey backpacking in his magical story?",
        answers: ["Asia", "Canada", "Western Europe", "Africa"],
        correctAnswer: "Western Europe"
    },
    {
        question: "What was Chandler's middle name?",
        answers: ["Murika", "Marvin", "Muriel", "Miracle"],
        correctAnswer: "Muriel"
    },
    {
        question: "What made Chandler start to freak out about his wedding?",
        answers: ["The In-Laws", "The Bings", "Joey", "Marcel"],
        correctAnswer: "The Bings"
    }
];
// Starting variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timer = 120;
var intervalId;



function subtractTime(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement(){
    timer--
    $(`.timer`).html(`<hr><p>Time remaining: ` + timer + ` seconds</p>`);
}
});
