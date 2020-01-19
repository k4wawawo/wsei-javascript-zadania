  
document.addEventListener("DOMContentLoaded", (event) => {
  var lista1 = document.getElementById("lista1");
  var lista2 = document.getElementById("lista2");
  var buttons = document.getElementsByClassName("moveBtn");

  function move(event) {
    var elementToMove = this.parentElement.cloneNode(true);
    elementToMove.firstElementChild.addEventListener("click", move);

    if (this.parentElement.parentElement.id == "lista1") {
      lista2.appendChild(elementToMove);
    } else {
      lista1.appendChild(elementToMove);
    }

    this.parentElement.parentElement.removeChild(this.parentElement);
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", move);
  }
});