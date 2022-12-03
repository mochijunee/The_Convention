//
var list = ["WOMEN'S SUFFRAGE", "EDUCATION", "ACCESS TO JOBS", "RELIGIOUS FREEDOM", "EQUAL TREATMENT", "SOCIAL REFORM"];
var message = document.getElementById("message");
var index = 0;
var inst = setInterval(change, 1400);

function change() {
  message.innerHTML = list[index++];
  if (index >= list.length) {
    index = 0;
  }
}
var statList = ["WOMEN'S SUFFRAGE", "EDUCATION", "ACCESS TO JOBS", "RELIGIOUS FREEDOM", "EQUAL TREATMENT", "SOCIAL REFORM"];
var stat = document.getElementById("stat");
var statIndex = 0;

//
var button = $(".submit-btn");
var formOutput = $(".form-output");

button.on("click", display);

function display() {
  event.preventDefault();
  formOutput.text("You have successfuly registered for the Declaration of Sentiments event!");
  document.getElementById("form").reset();
}