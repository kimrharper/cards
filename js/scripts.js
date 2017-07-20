$(document).ready(function() {
  var cardnumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  var suits = ["Diamonds ♦","Hearts ♥","Spades ♠","Clubs ♣"];
  var fiftytwocards = [];

  for (n = 0; n < 4; n++) {
    cardnumbers.forEach(function(cardnumber) {
      if (cardnumber === 1) {
          fiftytwocards.push("Ace" + " of " + suits[n]);
      } else if (cardnumber === 11){
          fiftytwocards.push("Jack" + " of " + suits[n]);
      } else if (cardnumber === 12){
          fiftytwocards.push("Queen" + " of " + suits[n]);
      } else if (cardnumber === 13){
          fiftytwocards.push("King" + " of " + suits[n]);
      } else {
          fiftytwocards.push(cardnumber + " of " + suits[n]);
      }
    })
  }

  fiftytwocards.forEach(function(fiftytwocard){
  $("#output").append(fiftytwocard + "<br/>");
    })
})
