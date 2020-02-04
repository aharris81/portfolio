function mouseMove() {
  var x = event.pageX;
  var y = event.pageY;
  var cursor = document.querySelector("#cursor");
 cursor.style.left = x-15 + "px";
 cursor.style.top = y-25 + "px"; 
}
function clickColor() {
  var cursor = document.querySelector("#cursor"); 
  cursor.style.color = "lightgrey";
  console.log("working");
}

function releaseColor() {
  var cursor = document.querySelector("#cursor");
  cursor.style.color = "black";
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



