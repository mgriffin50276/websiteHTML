let myIndex1 = 0;
carousel();

function carousel() {
  let s;
  let c = document.getElementsByClassName("mySlidesC");
  for (s = 0; s < c.length; s++) {
    c[s].style.display = "none";
  }
  myIndex1++;
  if (myIndex1 > c.length) { myIndex1 = 1 }
  c[myIndex1 - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// LIGHTBOX SCRIPT

// Initialize here and run showSlide() to give your lightbox a default state.

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}