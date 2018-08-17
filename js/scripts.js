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
      numberOutput.push("I'm sorry, Dave. I'm afraid I can't do that.");
      console.log("multiple of 3");
    } else {
      if (i.toString().match(/1*/g)){
        console.log("its got a 1, boy");}
      // } else if (i.toString.match(/0/g)){
      //   console.log("it's got a 0, boy");
      // }
    };





    // numberOutput.push(i);

  };
}
