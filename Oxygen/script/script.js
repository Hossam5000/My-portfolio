// variables & constants
const slides = document.querySelectorAll(".slide");
const dotBox = document.querySelectorAll(".dot");
let counter = 1;

// running the slider code
sliding(counter);
let timer = setInterval(autoSlide, 8000);

// functions
function autoSlide(){
  counter += 1;
  sliding(counter);
}

function currentSlide(n){
  counter = n;
  sliding(counter);
  resetTimer();
}

function resetTimer(){
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function move(m){
  counter += m;
  sliding(counter);
  resetTimer();
}

function sliding(n){
  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  for(let i = 0; i < dotBox.length; i++){
    dotBox[i].className = dotBox[i].className.replace(" active", "");
  }

  if(n > slides.length){
    counter = 1;
  }

  if(n < 1){
    counter = slides.length;
  }

  slides[counter -1].style.display = "block";
  dotBox[counter -1].className += " active";
}