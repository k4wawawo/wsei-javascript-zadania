document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     //ZAD0
     function getDatasInfo(elements) {
       var data = [];
     for (var i = 0; i < elements.length; i++) {
         data.push(elements[i].getAttribute("data-color"));
       }
       return data;
     }

     getDatasInfo(links);

     //ZAD1
     console.log("homeElement - tag name: " + homeElement.tagName + ", class name: " + homeElement.classList);
     for (var i = 0; i < childElements.length; i++) {
       console.log("childElements[" + i + "] - " + "tag name: " + childElements[i].tagName + ", class name: " + childElements[i].classList);
     }
     console.log("banner - tag name: " + banner.tagName + ", class name: " + banner.classList);
     for (var i = 0; i < blocks.length; i++) {
       console.log("blocks[" + i + "] - " + "tag name: " + blocks[i].tagName + ", class name: " + blocks[i].classList);
     }
     for (var i = 0; i < links.length; i++) {
       console.log("links[" + i + "] - " + "tag name: " + links[i].tagName + ", class name: " + links[i].classList);
     }

     //ZAD2
     for (var i = 0; i < blocks.length; i++) {
       console.log("blocks[" + i + "]\n\ninnerHTML:" + blocks[i].innerHTML + "\nouterHTML: " + blocks[i].outerHTML);
     }
     for (var i = 0; i < blocks.length; i++) {
       blocks[i].innerHTML = "new div blocks";
     }

     //ZAD3
     var footerElement = document.getElementById("mainFooter");

     function getId(element) {
       var id = element.id;
       return id;
     }

     getId(footerElement);

     //ZAD4
     var childElements = document.querySelector(".oferts").children;

     function getTags(elements) {
       var output = [];
       for (var i = 0; i < elements.length; i++) {
         output.push(elements[i].tagName);
       }
       return output;
     }
     getTags(childElements);

     //ZAD5
     function getClassInfo(element) {
       var elements = element.classList;
       var output = [];
       for (var i = 0; i < elements.length; i++) {
         output.push(elements[i]);
       }
       return output;
     }

     getClassInfo(banner);

     //ZAD6
     var liElementsWithinNav = document.querySelectorAll("nav li");
     function setDataDirection(elements) {
       for (var i = 0; i < elements.length; i++) {
         elements[i].setAttribute("data-direction", "top");
       }
     }

     setDataDirection(liElementsWithinNav);
    });