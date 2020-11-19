/////////////////////////////////////////////////////
// Testimonial Slider
/////////////////////////////////////////////////////
var slideIndex = 1;
var slides = document.getElementsByClassName("testimonial-slider-quote");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
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

var container = document.querySelector('.testimonial-slider-container');
var listener = SwipeListener(container);
container.addEventListener('swipe', function (e) {
  var directions = e.detail.directions;
  if (directions.left) {
    plusSlides(1)
  }
 
  if (directions.right) {
    plusSlides(-1)
  }
})