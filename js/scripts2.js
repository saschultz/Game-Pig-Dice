function Player() {
  this.roundRolls = [];
  this.roundScore = roundScore;
  this.subTotal = 0;
}

Player.prototype.roll = function() {
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
  var newPlayer = new Player();
  $("#rollForm").submit(function(e){
    e.preventDefault();
    newPlayer.roll();
    newPlayer.subTotal = newPlayer.roll();
    var roundScore = newPlayer.subTotal;

    $("#dieRoll").append("<li>" + currentScore + "</li>");
    $("#roundScore").text(roundScore);
  });
  $("#holdButton").click(function(){
    newPlayer.roundScore = newPlayer.subTotal;
    var piggyBank = roundScore;
    console.log(piggyBank);
  });
});
