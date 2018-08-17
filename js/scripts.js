//global variables
var numberInput;
var numberOutput = [];


//user interface logic
$(document).ready(function(){
  $("#input-form").submit(function(event){
    var answer = "";
    //input
    event.preventDefault();
    numberInput = $("#number-input").val();
    //call backend
    numberProcess();
    //add breaks to output
    for (var i = 0; i < numberOutput.length; i++){
      answer += numberOutput[i] + "<br>";
    };
    //output answer
    $("#answer").html(answer);
    console.log(answer)
  });
});


//business logic

function numberProcess() {
  numberOutput = [];
  for(var i = 0; i <= numberInput; i++){
    if (i % 3 === 0 && i != 0){
      numberOutput.push(" 'I'm sorry, Dave. I'm afraid I can't do that.' ");
    } else {
      if (i.toString().indexOf('1') > -1){
        numberOutput.push(" 'Boop!' ");
      } else if (i.toString().indexOf('0') > -1){
        numberOutput.push(" 'Beep!' ");
      } else {
        numberOutput.push(i);
      }
    };
  };
};
