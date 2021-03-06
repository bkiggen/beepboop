
//user interface logic
$(document).ready(function(){
  //on submit
  $("#input-form").submit(function(event){
    var answer = "";
    //input
    event.preventDefault();
    var numberInput = $("#number-input").val();
    var nameInput = $("#name").val();
    //call backend
    var numberOutput = numberProcess(numberInput, nameInput);
    //add breaks to output
    for (var i = 0; i < numberOutput.length; i++){
      answer += numberOutput[i] + "<br>" + "<hr>";
    };
    //output answer
    $("#answer").html(answer);
    //scroll funtion
    $('html, body').animate({scrollTop:$('.output-area').offset().top}, 2000);
  });
});

//business logic

function numberProcess(numberInput, nameInput) {
  var numberOutput = [];
  for(var i = 0; i <= numberInput; i++){
    if (i % 3 === 0 && i != 0){
      numberOutput.push(" 'I'm sorry, " + nameInput + ". I'm afraid I can't do that.' ");
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
  return numberOutput;
};
