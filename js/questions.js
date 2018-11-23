const GeoQuestion = function() {
  this.questions = [{question: "What is the capitol of Finland", answer: "Helsinki"},
  {question: "What is the capitol of Italy", answer: "Rome"},
  {question: "What is the capitol of Latvia", answer: "Riga"},
];
};

  GeoQuestion.prototype.getRandomQuestion = function () {
    return this.questions.sample();
  };

  Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }


  module.exports = GeoQuestion;
