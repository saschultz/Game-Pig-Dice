function Player() {
  this.name = "";
  this.roundSubTotal = 0;
  this.total = [];
  this.currentRoll;
}

Player.prototype.roll = function() {
  this.currentRoll = (Math.floor(Math.random() * 6) + 1);
  // console.log(retRoll);
  this.roundSubTotal+=this.currentRoll;
}

Player.prototype.playerSubTotal = function () {
  // var roundScore = roundScore.push(this.roundSubTotal);
  //
  // return roundScore;
}

Player.prototype.playerTotal = function() {
  console.log(roundSubTotal);
    if (numba === 1) {
      roundSubTotal = 0
      alert("you busted!");
    }
  return roundSubTotal;
}

//Front-End Logic:
$(document).ready(function(){
  var userName = $()
  var newPlayer = new Player();
  $("#rollForm").submit(function(e){

    e.preventDefault();
    // var userRoundSubTotal = newPlayer.roll()
    // this.roundSubTotal = newPlayer.push(newPlayer.roll());
    // console.log(roundSubTotal);
    newPlayer.roll();
    $("#dieRoll").append("<li>" + newPlayer.currentRoll + "</li>");
    $("#roundScore").text(newPlayer.roundSubTotal);
  });
  // $("#holdButton").click(function(){
  //   newPlayer.roundScore = newPlayer.subTotal;
  //   var piggyBank = roundScore;
  //   console.log(piggyBank);

  // var addedSub = newPlayer.playerSubTotal();
  // });
});
