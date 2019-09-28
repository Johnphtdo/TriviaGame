$(document).ready(function() {
  $(document).on("click", "#doneBtn", function() {
    resultsPage();
  });

  // When Start game is clicked, hide the start button.
  $(`#startBtn`).on("click", function() {
    $(`#startBtn`).remove();

    // // Populate a timer
    subtractTime();
    // Populate the questionss
    for (let i = 0; i < questions.length; i++) {
      $(`.startWrap`).append(`<hr><p>` + questions[i].question + `</p>`);

      // Populate the answer choices and assign value
      for (let a = 0; a < questions[i].answers.length; a++) {
        answerValue = questions[i].answers[a].replace(/\s/g,'-')
        $(`.startWrap`).append(
          `<br><input type='radio' name='radio-${i}' data-value=${answerValue}>${questions[i].answers[a]}`
        );
      }
    }
    $(`.startWrap`).append(
      `<hr><button type="button" id="doneBtn">Done</button>`
    );
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
      correctAnswer: "Be-Your-Own-Windkeeper"
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
  var userScore = {
    correct: 0,
    incorrect: 0,
    unanswered: 15
  };
  var timer = 120;
  var intervalId;

  function subtractTime() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    timer--;
    $(`.timer`).html(`<hr><p>Time remaining: ` + timer + ` seconds</p>`);
    if (timer === 0) {
      alert("Times up!");
      resultsPage();
    }
  }
  function resultsPage() {
    clearInterval(intervalId);
    $(`.timer`).remove();
    
    let test = $('input[name="radio-0"]:checked');
    console.log(test);
    
    
    if ($('input[name="radio-0"]:checked').val() == "Jam") {
      userScore.correct++;
      userScore.unanswered--;
    } else {
      userScore.incorrect++;
      userScore.unanswered--;
    }
    if ($('input[name="radio-1"]:checked').val() == "Be Your Own Windkeeper") {
      userScore.correct++;
      userScore.unanswered--;
    } else {
      console.log("WRONG" + $('input[name="radio-1"]:checked').val());

      userScore.incorrect++;
      userScore.unanswered--;
    }
    console.log(userScore);

    $(`.startWrap`).remove();
  }
});
