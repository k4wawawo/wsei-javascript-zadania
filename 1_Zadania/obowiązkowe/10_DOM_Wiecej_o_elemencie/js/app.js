document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     //ZAD0
     // 0A
     var liElements = document.querySelectorAll("div.exercise.ex5 li");
     for (var i = 0; i < liElements.length; i++) {
       if (i % 2 == 0) {
         liElements[i].style.background = "#00FF00";
       }
     }

     //0B
     liElements[4].setAttribute("class", "big");

     //0C
     for (var i = 0; i < liElements.length; i++) {
       if (i % 3 == 0) {
         liElements[i].style.textDecoration = "underline";
       }
     }

     //ZAD1
     //1A
     var chromeDiv = document.querySelector(".ex1 .chrome");
     chromeDiv.style.backgroundImage = "url(assets/img/chrome.png";

     var edgeDiv = document.querySelector(".ex1 .edge");
     edgeDiv.style.backgroundImage = "url(assets/img/edge.png";

     var firefoxDiv = document.querySelector(".ex1 .firefox");
     firefoxDiv.style.backgroundImage = "url(assets/img/firefox.png";

     //1B
     var aElementsWithinDivs = document.querySelectorAll("div.exercise.ex1 a");

     // Chrome.
     aElementsWithinDivs[0].innerHTML = "Chrome";
     aElementsWithinDivs[0].setAttribute("href", "https://www.google.pl/chrome/");

     // Firefox.
     aElementsWithinDivs[2].innerHTML = "Firefox";
     aElementsWithinDivs[2].setAttribute("href", "https://www.mozilla.org/pl/firefox/new/");

     // Microsoft Edge.
     aElementsWithinDivs[1].innerHTML = "Microsoft Edge";
     aElementsWithinDivs[1].setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");


     //1C
     chromeDiv.style.width = "100px";

     //ZAD2
     var nameSpan = document.getElementById("name");
     var colorSpan = document.getElementById("fav_color");
     var mealSpan = document.getElementById("fav_meal");

     nameSpan.innerHTML = "ZAZA";
     colorSpan.innerHTML = "Green";
	   mealSpan.innerHTML = "Mleko"

     //ZAD3
     //3A
     var ulElementWithinEx3Div = document.querySelector("div.exercise.ex3 ul");
     ulElementWithinEx3Div.setAttribute("class", "menu");

     //3B
     var liElements = ulElementWithinEx3Div.getElementsByTagName("li");
     for (var element of liElements) {
	       element.classList.add('menuElement');
       }

      //3C
      for (var element of liElements) {
        if (element.classList.contains("error")) {
          element.classList.remove("error");
        }
      }

      //ZAD4
      var liElementsWithinEx4Div = document.querySelectorAll("div.exercise.ex4 li");
      for (var i = 0; i < liElementsWithinEx4Div.length; i++) {
        liElementsWithinEx4Div[i].setAttribute("data-id", i + 1);
      }

     });