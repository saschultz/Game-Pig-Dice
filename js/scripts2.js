// function Player(roundRolls, totalScore) {
//   this.roundRolls = [];
//   this.totalScore = totalScore;
// }

var roundSubTotal = 0;

var randomRoll = function() {
  var retRoll = (Math.floor(Math.random() * 6) + 1);
  console.log(retRoll);
  return retRoll;
}

function roundRolls(randomRoll) {
roundSubTotal += randomRoll;
console.log(roundSubTotal);
return roundSubTotal;
}

//Front-End Logic:
$(document).ready(function(){
  $("#rollForm").submit(function(e){
    e.preventDefault();
    var currentScore = randomRoll();
    var totalScore = roundRolls(currentScore);
    $("#dieRoll").append("<li>" + currentScore + "</li>");
    $("#totalScore").text(totalScore);
  });
});
