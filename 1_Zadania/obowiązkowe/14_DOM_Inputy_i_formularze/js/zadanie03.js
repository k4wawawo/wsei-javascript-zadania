document.addEventListener("DOMContentLoaded", (event) => {
    var button = document.querySelector("button");
  
    button.addEventListener("click", event => {
      var table = document.querySelector(".table.table-bordered").firstElementChild;
      var DR1 = document.getElementById("DR1").value;
      var DR2 = document.getElementById("DR2").value;
  
             if (DR1 == DR2) return;
      var PKT1 = document.getElementById("PKT1").value;
      var PKT2 = document.getElementById("PKT2").value;
  
             if (PKT1 < 0 || PKT2 < 0) return;
        var newRow = document.createElement("tr");
  
      var DR1Cell = document.createElement("td");
      DR1Cell.innerHTML = DR1;
         var DR2Cell = document.createElement("td");
      DR2Cell.innerHTML = DR2;
  
      var PKTCell = document.createElement("td");
      PKTsCell.innerHTML = PKT1 + " - " + PKT2;
  
      newRow.appendChild(DR1Cell);
      newRow.appendChild(DR2Cell);
      newRow.appendChild(PKTCell);
      table.appendChild(newRow);
         });
     });  