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
    if (i % 3 === 0){
      
    } else if {

    } else {

    } else {
      console.log("WHAT'S WRONG?")
    }
    numberOutput.push(i);

  };
}
