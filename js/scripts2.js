function Player() {
  this.name = name;
  this.roundSubTotal = [];
  this.total = [];
}

Player.prototype.roll = function() {
  var retRoll = (Math.floor(Math.random() * 6) + 1);
  console.log(retRoll);
  this.roundSubTotal.push(retRoll);
  console.log(this.roundSubTotal);
  return retRoll;
}

Player.prototype.roundRolls = function(numba) {
  roundSubTotal += numba;
  console.log(roundSubTotal);
    if (numba === 1) {
      roundSubTotal = 0
      alert("you busted!");
    }
  return roundSubTotal;
}

//Front-End Logic:
$(document).ready(function(){
  var newPlayer = new Player();
  $("#rollForm").submit(function(e){
    e.preventDefault();
    // this.roundSubTotal = newPlayer.push(newPlayer.roll());
    // console.log(roundSubTotal);

    $("#dieRoll").append("<li>" + newPlayer.roll() + "</li>");

  });
  // $("#holdButton").click(function(){
  //   newPlayer.roundScore = newPlayer.subTotal;
  //   var piggyBank = roundScore;
  //   console.log(piggyBank);
  // });
});
