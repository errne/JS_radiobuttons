document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const radioButtonsForm = document.querySelector('#quiz-form');
  radioButtonsForm.addEventListener('submit', handleRadioSubmit);
  let log = document.querySelector("#log");
  let tempQ = "";
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

const handleRadioSubmit = function(event) {
  event.preventDefault();
  const da = (event.target.question.value);
  console.log(da);
  if (da === "Geo"){
    log.innerText = "What is the capitol of Madagascar?";
    tempQ = "What is the capitol of Madagascar?";
  } else if (da === "Ast") {
    log.innerText = "What is the name of Saturns largest moon?";
    tempQ = "What is the name of Saturns largest moon?";
  } else if (da === "His") {
    log.innerText = geoQ[0].question;
    tempQ2 = geoQ[0];
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
  quizQuestion.textContent = tempQ2.question;
  answerListItem.appendChild(quizQuestion);

  const answer = document.createElement('h2');
  answer.textContent = form.answer.value;
  answerListItem.appendChild(answer);

  const correct = document.createElement('h2');
  if (form.answer.value === tempQ2.answer){
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
