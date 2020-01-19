document.addEventListener("DOMContentLoaded", (event) => {
    var checkBox = document.getElementById("innv");
    var invoiceDiv = document.getElementById("innvData");
    checkBoxChange();
  
    checkBox.addEventListener("change", (event) => {
      checkBoxChange();
    })
  
    function checkBoxChange() {
      if (checkBox.checked == false) {
        invoiceDiv.style.display = "none";
      } else {
        invoiceDiv.style.display = "block";
      }
    }
  });