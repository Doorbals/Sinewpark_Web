var current = 0;
showSlides();

function showSlides() {
  var slides=document.querySelectorAll("#slides > img");
  for(let i = 0; i < slides.length; i++){
    slides[i].style.height = "0";
  }
  current++;
  if(current > slides.length)
    current = 1;
  slides[current - 1].style.height = "800px";
  
  setTimeout(showSlides, 5000);
}