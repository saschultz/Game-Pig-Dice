function Player() {
  this.name = "";
  this.roundSubTotal = 0;
  this.total = 0;
  this.currentRoll;
}

Player.prototype.roll = function() {
  this.currentRoll = (Math.floor(Math.random() * 6) + 1);
  // console.log(retRoll);
  this.roundSubTotal+=this.currentRoll;
}

Player.prototype.playerTotal = function () {
  // var roundScore = roundScore.push(this.roundSubTotal);
  //
  // return roundScore;
  this.total+=this.roundSubTotal;
  console.log(this.roundSubTotal);
}

// Player.prototype.player = function() {
//   console.log(roundSubTotal);
//     if (numba === 1) {
//       roundSubTotal = 0
//       alert("you busted!");
//     }
//   return roundSubTotal;
// }

//Front-End Logic:
$(document).ready(function(){
  var newPlayer = new Player();
  $("#rollForm").submit(function(e){
    e.preventDefault();
    newPlayer.roll();
    $("#dieRoll").append("<li>" + newPlayer.currentRoll + "</li>");
    $("#roundScore").text(newPlayer.roundSubTotal);

  });
  $("#holdButton").click(function(){
    $("#roundScore").empty();
    newPlayer.playerTotal();
    $("#piggyBank").text(newPlayer.total);
    newPlayer.roundSubTotal = 0;

    // var addedSub = newPlayer.playerSubTotal();
  });
});
