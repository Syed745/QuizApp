a = {
  question: "JS Stand for options ?",
  answer: ["CSS", "SQL", "PHP", "JS"],
  correctAns: "JS",
};
b = {
  question: "SQL Stand for options ? ",
  answer: ["JS", "SQL", "PHP", "HTML"],
  correctAns: "SQL",
};
c = {
  question: "CSS Stand for options ? ",
  answer: ["CSS", "HTML", "PHP", "JS"],
  correctAns: "CSS",
};
d = {
  
  question: "PHP Stand for options ? ",
  answer: ["CSS", "PHP", "JS", "HTML"],
  correctAns: "PHP",
};
e = {
  question: "HTML Stand for options ? ",
  answer: ["CSS", "PHP", "HTML", "SQL"],
  correctAns: "HTML",
};

var arr = [a, b, c, d, e];
var question = document.getElementById("question");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionQuantity = document.getElementById("totalQuestionQuantity");
var optionsParent = document.getElementById("optionsParent");
var resultParent = document.getElementById("resultParent");
var resultProgress = document.getElementById("resultProgress");
var resultText = document.getElementById("resultText");
var indVal = 0;
var score = 0;

function displayQuestion() {
  optionsParent.innerHTML = "";
  question.innerHTML = arr[indVal].question;
  currentQuestionNumber.innerHTML = indVal + 1;
  totalQuestionQuantity.innerHTML = arr.length;
  for (var i = 0; i < arr[indVal].answer.length; i++) {
    optionsParent.innerHTML += `<div class="col-md-6 py-3 ">
    <button onclick="checkAnswer('${arr[indVal].answer[i]}')" class="btn px-5  rounded w-100 btn-danger">${arr[indVal].answer[i]}</button>
</div>`;
  }
}
displayQuestion();
function nextQuestion() {
  indVal++;
  displayQuestion();
}

function checkAnswer(val) {
  var userAnswer = val;
 
  var correctAnswer = arr[indVal].correctAns;
 
  if (userAnswer == correctAnswer) {
    score++;
    console.log(score, "score");
  }
  if (indVal + 1 == arr.length) {
    displayResult();
  } else {
    nextQuestion();
  }
}

function displayResult() {
  resultParent.style.display = "block";
  resultProgress.max = arr.length;
  resultProgress.value = score;
  optionsParent.style.display = "none";
  question.style.display = "none";
  var resultPercentage = (score / arr.length) * 100;
  resultText.innerHTML = resultPercentage + "%";
  if (resultPercentage < 50) {
    resultText.className += " text-danger";
  } else {
    resultText.className += " text-success";
  }
}
