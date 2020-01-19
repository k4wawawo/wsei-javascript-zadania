document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

     //ZAD0
     // pierweszy element w klasie
     var elementWithTitleClass = document.querySelector(".title");

     function getDataAnimation(element) {
       // var animation = element.getAttribute("data-animation");
       var animation = elementWithTitleClass.dataset.animation;
       return animation;
     }

     console.log(getDataAnimation(elementWithTitleClass));

     //ZAD1

     //1A

     var elementWithHomeId = document.getElementById("home");
     console.log(elementWithHomeId);
    var elementWithHomeId2 = document.querySelector("#home");
     console.log(elementWithHomeId2);

     //1B

     var liElementWithAttrib = document.querySelector("li[data-direction]");
     console.log(liElementWithAttrib);

     //1C

     var firstElementWithBlockClass = document.querySelector(".block");
     console.log(firstElementWithBlockClass);

     //ZAD2
     //2A

     var allLiElementsWithinNavTag = document.querySelectorAll("nav li");
     console.log(allLiElementsWithinNavTag);
    //2B

     var allParagraphElementsWithinDivTag = document.querySelectorAll("div p");
     console.log(allParagraphElementsWithinDivTag);

     //2C

     var allDivsWithinArticleTag = document.querySelectorAll("article div");
     console.log(allDivsWithinArticleTag);

     //ZAD3
     //3A

     // var articleTagsWithFirstClass = document.querySelectorAll("article[class=first]");
     var articleTagsWithFirstClass = document.querySelectorAll("article.first");
     console.log(articleTagsWithFirstClass);

     //3B

     for (var i = 0; i < articleTagsWithFirstClass.length; i++) {
       var h1Elements = articleTagsWithFirstClass[i].getElementsByTagName("h1");
       console.log(h1Elements.length);
     }
            });