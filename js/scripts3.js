// function Player(roundRolls, roundScore) {
//   this.roundRolls = [];
//   this.roundScore = roundScore;
// }

var roundSubTotal = 0;
var totalScore = 0;
var piggyBank = [];


var randomRoll = function() {
  var retRoll = (Math.floor(Math.random() * 6) + 1);
  // console.log(retRoll);
  return retRoll;
}

function roundRolls(numba) {
  roundSubTotal += numba;
  // console.log(roundSubTotal);
    if (numba === 1) {
      $("#dieRoll").empty();
      roundSubTotal = 0;
      alert("you busted!");
    }
  return roundSubTotal;
}

function ruhRoh(roundScore) {
  piggyBank += roundScore;
  return piggyBank;
}

//Front-End Logic:
$(document).ready(function(){
  $("#rollForm").submit(function(e){
    e.preventDefault();
    var currentScore = randomRoll();
    var roundScore = roundRolls(currentScore);
    // var piggyBank = ruhRoh(roundScore);
    $("#dieRoll").append("<li>" + currentScore + "</li>");
    $("#roundScore").text(roundScore);

    $("#holdButton").click(function(){
       $("#dieRoll").empty();
       thisRound.push(currentScore);
       piggyBank.push(roundScore)
       console.log(roundScore);
       console.log(piggyBank);

      $("#ruhRoh").text(piggyBank);
      // console.log(piggyBank);

    });

  });

});
