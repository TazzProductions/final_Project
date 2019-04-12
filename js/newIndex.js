// event.preventDefault();
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  // event.preventDefault();

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// $(".button").blur(function() {
//   alert("lost");
// });

$('#toggle').click(function () {
  if ($(this).is(":checked"))
  {
    $(".sub").css("opacity", 0);
    $(".thanks").css("opacity", 1);
  }
  else if ($(this).is(":not(:checked)"))
  {
    $(".sub").css("opacity", 1);
    $(".thanks").css("opacity", 0);
  }
});