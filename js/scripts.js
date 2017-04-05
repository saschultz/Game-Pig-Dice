//Business Logic


//User Interface Logic


$(document).ready(function(){



  $("#rollForm").submit(function(e){
    e.preventDefault();

    var rollDie = (Math.floor(Math.random() * 6) + 1);
    console.log(rollDie)

    $("#roundTotal").text(rollDie);
    



  });
});
