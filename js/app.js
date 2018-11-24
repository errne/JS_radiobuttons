document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const radioButtonsForm = document.querySelector('#quiz-form');
  radioButtonsForm.addEventListener('submit', handleRadioSubmit);
  let log = document.querySelector("#log");

  let tempQ = {};
  let tempQ2 = {};


  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const answerListItem = createAnswerListItem(event.target);
  const answerList = document.querySelector('#answer-list');
  answerList.appendChild(answerListItem);

  event.target.reset();
}

const geoList = [
  {question: "What is the capitol of Finland?", answer: "Helsinki"},
  {question: "What is the capitol of Italy?", answer: "Rome"},
  {question: "What is the capitol of Latvia?", answer: "Riga"},
];
const astroList = [
  {question: "What is the name of Saturns largest moon?", answer: "Titan"},
  {question: "What is the largest known Galaxy?", answer: "IC1101"},
  {question: "How long is a year on Mercury in days", answer: "88"},
];
const histoList = [
  {question: "Which year name Lithuania was mentioned first?", answer: "1009"},
  {question: "What country was in crown union with Lithuania", answer: "Poland"},
  {question: "In which year Kaunas gained city status", answer: "1408"},
];
const sportList = [
  {question: "What city's team finished 3rd in last years Euroleague?", answer: "Kaunas"},
  {question: "Who scored most goals in world cup (surname)", answer: "Klose"},
  {question: "Basketball, how many players there are on the court from one team?", answer: "5"},
];

const handleRadioSubmit = function(event) {
  event.preventDefault();
  const da = (event.target.question.value);
  if (da === "Geo"){
    tempQ = geoList.sample();
    log.innerText = tempQ.question;
  } else if (da === "Ast") {
    tempQ = astroList.sample();
    log.innerText = tempQ.question;
  } else if (da === "His") {
    tempQ = histoList.sample();
    log.innerText = tempQ.question;
  } else if (da === "Sport") {
    tempQ = sportList.sample();
    log.innerText = tempQ.question;
  } else {
    log.innerText = "Please first select the category";
  }
  event.target.reset();
}

const createAnswerListItem = function (form) {
  const answerListItem = document.createElement('li');
  answerListItem.classList.add('answer-list-item');

  const quizQuestion = document.createElement('h3');
  quizQuestion.textContent = tempQ.question;
  answerListItem.appendChild(quizQuestion);

  const answer = document.createElement('h2');
  answer.textContent = form.answer.value;
  answerListItem.appendChild(answer);

  const correct = document.createElement('h2');
  if (form.answer.value === tempQ.answer){
    correct.textContent = "Correct";
  } else {
    correct.textContent = "Wrong";
    answerListItem.classList = 'answer-list-item-wrong';
  }
  answerListItem.appendChild(correct);

  return answerListItem;
}

const handleDeleteAllClick = function (event) {
  const answerList = document.querySelector('#answer-list');
  answerList.innerHTML = '';
}

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}
