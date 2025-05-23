'use strict';

//<!-- Manual Slideshow -->
//<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
//    </script>
//<!-- Manual Slideshow End -->

//    <!-- Automatic Slideshow -->
//<!-- <script>
let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndexAuto++;
  if (slideIndexAuto > slides.length) {
    slideIndexAuto = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndexAuto - 1].style.display = 'block';
  dots[slideIndexAuto - 1].className += ' active';
  setTimeout(showSlidesAuto, 3000); // change image every N seconds
}
//</script> -->
//    <!-- Automatic Slideshow End -->
