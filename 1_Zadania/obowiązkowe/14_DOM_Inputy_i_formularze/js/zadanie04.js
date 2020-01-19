document.addEventListener("DOMContentLoaded", (event) => {
    var cardTypeDiv = document.getElementById("type");
    var cardNumberInput = document.getElementById("name");
  
    cardNumberInput.addEventListener("keyup", event => {
      var cardNumber = cardNumberInput.value;
  
      if (cardNumber[0] == "5" && (cardNumber.length >= 13 && cardNumber.length <= 16)) {
        //Visa
        cardTypeDiv.innerHTML = "Visa";
        cardNumberInput.style.borderColor = "#00FF00";
      } else if (cardNumber[0] == "6" && cardNumber.length == 16) {
        //MstCard
        cardTypeDiv.innerHTML = "Mastercard";
        cardNumberInput.style.borderColor = "#00FF00";
      } else if (cardNumber[0] == "2" && (cardNumber[1] == "4" || cardNumber[1] == "7") && cardNumber.length == 15) {
        //AmericanExprss
        cardTypeDiv.innerHTML = "American Express";
        cardNumberInput.style.borderColor = "#00FF00";
      } else {
        cardTypeDiv.innerHTML = "";
        cardNumberInput.style.borderColor = "";
      }
    });
  });