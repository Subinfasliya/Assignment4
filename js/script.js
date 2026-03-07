//  Hamburger menu JavaScript scrip

function myFunction() {
        var x = document.querySelector(".nav-links");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }