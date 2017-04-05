function Player(roundRolls, totalScore) {
  this.roundRolls = [];
  this.totalScore = totalScore;
}



var randomRoll = function() {
  return (Math.floor(Math.random() * 6) + 1);
}

 function roundRolls(array) {
  var roundSubTotal = 0;
  for (var i = 0; i < array.length; i++) {
    roundSubTotal += parseInt(array[i]);
  }
  return roundSubTotal;
}

//Front-End Logic:
$(document).ready(function(){
  $("#rollForm").submit(function(e){
    e.preventDefault();
    var currentScore = randomRoll();
    var totalScore = roundRolls(randomRoll());
    $("#dieRoll").append("<li>" + currentScore + "</li>");
    $("#totalScore").append("<li>" + totalScore + "</li>");
  });
});
