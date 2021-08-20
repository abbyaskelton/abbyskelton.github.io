/*Add your JavaScript here*/
var frogScore = 0
var turtleScore = 0
var mooseScore = 0
var cowScore = 0
var questionCount = 0
var numQuestion = 0

/* Store HTML elements using the DOM*/
var result = document.getElementById("result");


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");
var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");
var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");
var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

q1a1.addEventListener("click", moose);
q1a2.addEventListener("click", cow);
q1a3.addEventListener("click", turtle);
q1a4.addEventListener("click", frog);
q2a1.addEventListener("click", moose);
q2a2.addEventListener("click", cow);
q2a3.addEventListener("click", frog);
q2a4.addEventListener("click", turtle);
q3a1.addEventListener("click", cow);
q3a2.addEventListener("click", moose);
q3a3.addEventListener("click", frog);
q3a4.addEventListener("click", turtle);
q4a1.addEventListener("click", turtle);
q4a2.addEventListener("click", frog);
q4a3.addEventListener("click", moose);
q4a4.addEventListener("click", cow);
q5a1.addEventListener("click", turtle);
q5a2.addEventListener("click", frog);
q5a3.addEventListener("click", moose);
q5a4.addEventListener("click", cow);
q6a1.addEventListener("click", cow);
q6a2.addEventListener("click", turtle);
q6a3.addEventListener("click", frog);
q6a4.addEventListener("click", moose);
q7a1.addEventListener("click", frog);
q7a2.addEventListener("click", turtle);
q7a3.addEventListener("click", cow);
q7a4.addEventListener("click", moose);
q8a1.addEventListener("click", frog);
q8a2.addEventListener("click", moose);
q8a3.addEventListener("click", frog);
q8a4.addEventListener("click", turtle);
q9a1.addEventListener("click", turtle);
q9a2.addEventListener("click", cow);
q9a3.addEventListener("click", frog);
q9a4.addEventListener("click", moose);

function moose(){
  mooseScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "mooseScore = " + mooseScore);
  if (questionCount == 9) {
  console.log("The quiz is done!")
  updateResult ();
}
}
function cow(){
  cowScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "cowScore = " + cowScore);
  if (questionCount == 9) {
  console.log("The quiz is done!")
  updateResult();
}
}

function frog(){
  frogScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "frogScore = " + frogScore);
  if (questionCount == 9) {
  console.log("The quiz is done!")
  updateResult ();
}
}
function turtle(){
  turtleScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "turtleScore = " + turtleScore);
  if (questionCount == 9) {
  console.log("The quiz is done!")
  updateResult ();
}
}

var cowpage = document.getElementById("cowpage")

if (questionCount == 9) {
  console.log("The quiz is done!")
}
/*i am going insane
function updateResult() {
  if (mooseScore >= 2){
    result.innerHTML = "You are a moose Pillow Pet!"
  console.log("You are a moose Pillow Pet!")
  cowpage.innerHTML = "<a href=\"moose.html\"> See Your Result!</a>"
} else if (cowScore >= 2){
  result.innerHTML = "You are a strawberry cow Pillow Pet!"
  console.log("You are a strawberry cow Pillow Pet!")
  cowpage.innerHTML = "<a href=\"cowresult.html\"> See Your Result!</a>"
}
}*/
function updateResult() {
  if (mooseScore > cowScore && mooseScore > frogScore && mooseScore > turtleScore){
  console.log("You are a moose Pillow Pet!")
  cowpage.innerHTML = "<a href=\"moose.html\"> See Your Result!</a>"
} else if (cowScore > mooseScore && cowScore > turtleScore && cowScore > frogScore){
  console.log("You are a strawberry cow Pillow Pet!")
  cowpage.innerHTML = "<a href=\"cowresult.html\"> See Your Result!</a>"
} else if (frogScore > mooseScore && frogScore > turtleScore && frogScore > cowScore){
  console.log("You are a frog Pillow Pet!")
  cowpage.innerHTML = "<a href=\"frog.html\"> See Your Result!</a>"
} else if (turtleScore > cowScore && turtleScore > frogScore && turtleScore > mooseScore){
  console.log("You are a turtle Pillow Pet!")
  cowpage.innerHTML = "<a href=\"turtle.html\"> See Your Result!</a>"
}
}
/*function updateResult() {
  if (mooseScore > cowScore)
  if (mooseScore > frogScore)
  if (mooseScore > turtleScore){
  console.log("You are a moose Pillow Pet!")
  cowpage.innerHTML = "<a href=\"moose.html\"> See Your Result!</a>"
} else if (cowScore > mooseScore)
  if (cowScore > frogScore)
  if (cowScore > turtleScore){
  console.log("You are a strawberry cow Pillow Pet!")
  cowpage.innerHTML = "<a href=\"cowresult.html\"> See Your Result!</a>"
} else if (frogScore > mooseScore)
  if (frogScore > turtleScore)
  if (frogScore > cowScore){
  console.log("You are a frog Pillow Pet!")
  cowpage.innerHTML = "<a href=\"frog.html\"> See Your Result!</a>"
} else if (turtleScore > cowScore) 
  if (turtleScore > frogScore) 
  if (turtleScore > mooseScore){
  console.log("You are a turtle Pillow Pet!")
  cowpage.innerHTML = "<a href=\"turtle.html\"> See Your Result!</a>"
}
}*/
var result2 = document.getElementById("result2")

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);
function restartQuiz () {
  result.innerHTML = "You are a..."
  cowScore = 0
  frogScore = 0
  turtleScore = 0
  mooseScore = 0
  questionCount = 0
}
