//Business Logic
function Player(currentRoll, totalScore) {
  this.currentRoll = currentRoll;
  this.totalScore = totalScore;
}
TotalScore.prototype.randomRoll = function() {
return rollDie = (Math.floor(Math.random() * 6) + 1);
}

function() {

}
//User Interface Logic
$(document).ready(function(){
  $("#rollForm").submit(function(e){
    e.preventDefault();
    // debugger;
    var rollDie = (Math.floor(Math.random() * 6) + 1);
    var rollDieArray = [];

    var rollTotal = function(rollDie) {

      var tempTotal;
      if (rollDie > 1) {
        tempTotal = rollDie += rollDieArray
        console.log(tempTotal);
      }
    }
    //  rollDie + rollDireArray > rollDieArray
      // console.log(rollDieArray);
      //
      // alert(rollTotal);

    var newTotalScore = new TotalScore(rollDie);
    // for(var i=0; i<=rollDieArray; i++) {
    //   rollDieArray.push(rollDie);
    //   console.log(rollDie);
    //   console.log(rollDieArray);
    // }
    // var result = newTotalScore.addNumbers();


    $("#dieRoll").append("<li>" + rollDie + "</li>");
    // $("#roundTotal").text()

  });
});



//if dieroll > 0, then dieroll += sum.
