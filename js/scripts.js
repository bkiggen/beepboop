//global variables
var numberInput;
var numberOutput = [];

//user interface logic
$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();
    numberInput = $("#number-input").val();
    numberProcess();
  });
});


//business logic

function numberProcess() {
  for(var i = 0; i <= numberInput; i++){
    if (i % 3 === 0 && i != 0){

      numberOutput.push("I'm sorry, Dave. I'm afraid I can't do that.");
      console.log(i + "multiple of 3");

    } else {

      if (i.toString().indexOf('1') > -1){
        console.log(i + "its got a 1, boy");
        numberOutput.push("Boop!");

      } else if (i.toString().indexOf('0') > -1){
        numberOutput.push("Beep!");
      } else {
        numberOutput.push(i);
      }
    };





    // numberOutput.push(i);

  };
}
