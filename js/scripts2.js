function Player() {
  this.name = "";
  this.roundSubTotal = 0;
  this.total = 0;
  this.currentRoll;
}

Player.prototype.roll = function() {
  this.currentRoll = (Math.floor(Math.random() * 6) + 1);
  if (this.currentRoll === 1) {
    this.roundSubTotal = 0;
    $("#dieRoll").empty();
    alert("Whoopsy! You rolled a 1");
  } else {
  this.roundSubTotal+=this.currentRoll;
  }
  console.log(this.currentRoll);
}

Player.prototype.playerTotal = function () {
  this.total+=this.roundSubTotal;
  if (this.total >= 100) {
    alert("Winner Winner!");
  }
  console.log(this.roundSubTotal);
}

//Front-End Logic:
$(document).ready(function(){
  var newPlayer1 = new Player();
  var newPlayer2 = new Player();
  $("#rollForm").submit(function(e){
    e.preventDefault();
    newPlayer1.roll();
    // $("#dieRoll").append("<li>" + newPlayer1.currentRoll + "</li>");
    $("#roundScore").text(newPlayer1.roundSubTotal);

  });
  $("#holdButton").click(function(){
    $("#roundScore").empty();
    $("#dieRoll").empty();
    newPlayer1.playerTotal();
    $("#piggyBank").text(newPlayer1.total);
    newPlayer1.roundSubTotal = 0;
  });
  $("#rollForm2").submit(function(e){
    e.preventDefault();
    newPlayer2.roll();
    // $("#dieRoll").append("<li>" + newPlayer2.currentRoll + "</li>");
    $("#roundScore2").text(newPlayer2.roundSubTotal);

  });
  $("#holdButton2").click(function(){
    $("#roundScore2").empty();
    $("#dieRoll2").empty();
    newPlayer2.playerTotal();
    $("#piggyBank2").text(newPlayer2.total);
    newPlayer2.roundSubTotal = 0;
  });
});
