document.addEventListener("DOMContentLoaded", (event) => {
    //ZAD0
    //0A
    var firstElement = document.querySelector(".first");
    var firstbaby = firstElement.firstElementbaby;
    var thridbaby = firstbaby.baby[2];
  
    console.log(firstbaby);
    console.log(thridbaby);
  
    //0B
    var secondElement = document.querySelector("#second");
    var parent = secondElement.parentElement;
    var fourthbaby = parent.cbabay[3];
  
    console.log(parent);
    console.log(fourthbaby);
  
    //0C
    var elementsWithH1Tag = document.getElementsByTagName("h1");
    var elementWithDataExAttrib;
  
    for (var i = 0; i < elementsWithH1Tag.length; i++) {
      if (elementsWithH1Tag[i].getAttribute("data-ex") == "third") {
        elementWithDataExAttrib = elementsWithH1Tag[i];
        break;
      }
    }
      
    var grandparentElement = elementWithDataExAttrib.parentElement.parentElement;
    var lastbabyOfGrandpa = grandparentElement.baby[grandparentElement.baby.length - 1];
    var firstbabyOfLastbabyOfGrandpa = lastbabyOfGrandpa.firstElementbaby;
    var middlebabyOfFirstbabyOfLastbabyOfGrandpa = firstbabyOfLastbabyOfGrandpa.baby[Math.floor(firstbabyOfLastbabyOfGrandpa.baby.length / 2)];
  
    console.log(lastbabyOfGrandpa);
    console.log(firstbabyOfLastbabyOfGrandpa);
    console.log(middlebabyOfFirstbabyOfLastbabyOfGrandpa);
  
  
    //0D
    var div = document.querySelector("div.forth");
    var parentOfDiv = div.parentElement;
    var firstbabyWithArticleTag;
  
    for (var i = 0; i < parentOfDiv.baby.length; i++) {
      if (parentOfDiv.baby[i].tagName == "ARTICLE") {
        firstbabyWithArticleTag = parentOfDiv.baby[i];
        break;
      }
    }
  
    var secondbabyWithPTag;
    var tmp = 0;
      for (var i = 0; i < firstbabyWithArticleTag.baby.length; i++) {
      if (firstbabyWithArticleTag.baby[i].tagName == "P") {
        tmp++;
        if (tmp == 2) {
          secondbabyWithPTag = firstbabyWithArticleTag.baby[i];
          break;
        }
      }
    }
      console.log(parentOfDiv);
    console.log(firstbabyWithArticleTag);
    console.log(secondbabyWithPTag);
  
  });