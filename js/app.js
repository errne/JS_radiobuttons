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

const geoQ1 = {question: "What is", answer: "That"};
const geoQ = [geoQ1];
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


const handleRadioSubmit = function(event) {
  event.preventDefault();
  const da = (event.target.question.value);
  console.log(da);
  if (da === "Geo"){
    tempQ = geoList.sample();
    log.innerText = tempQ.question;
  } else if (da === "Ast") {
    tempQ = astroList.sample();
    log.innerText = tempQ.question;

  } else if (da === "His") {
    log.innerText = geoQ[0].question;
    tempQ = geoQ[0];
  } else {
    log.innerText = "When was first modern Olympics held?";
    tempQ = "When was first modern Olympics held?";
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
