// function Player(roundRolls, roundScore) {
//   this.roundRolls = [];
//   this.roundScore = roundScore;
// }

var roundSubTotal = 0;
var totalScore = 0;


var randomRoll = function() {
  var retRoll = (Math.floor(Math.random() * 6) + 1);
  console.log(retRoll);
  return retRoll;
}

function roundRolls(numba) {
  roundSubTotal += numba;
  console.log(roundSubTotal);
    if (numba === 1) {
      roundSubTotal = 0
      alert("you busted!");
    }
  return roundSubTotal;
}

function ruhRoh(roundScore) {
  totalScore += roundScore;
  console.log(totalScore);

  return totalScore;
}

//Front-End Logic:
$(document).ready(function(){
  $("#rollForm").submit(function(e){
    e.preventDefault();
    var currentScore = randomRoll();
    var roundScore = roundRolls(currentScore);

    $("#dieRoll").append("<li>" + currentScore + "</li>");
    $("#roundScore").text(roundScore);
    $("#holdButton").click(function(){
      // e.preventDefault();
      // var currentScore = randomRoll();
      // var roundScore = roundRolls(currentScore);
      var piggyBank = roundScore;
      console.log(piggyBank);
  
    });

  });

});
