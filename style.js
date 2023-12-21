
  (function() {
    
    function controls() {
      $(this).addClass('selected').siblings('button').removeClass('selected');
      $('.slideDiv').animate({
        top: -$('.container').height() * $(this).index()
      }, 450);
    }
    

    const runCode = () => {
      const button = document.querySelectorAll('.button');
      if ( button ) {
        for ( var i = 0; i < button.length; i++ ) {
          button[i].addEventListener('click', controls, false);
        }
      }
    }
    
    runCode();
    
  })();


// gen slide
const numbers = document.querySelectorAll('.number');
const slides = document.querySelectorAll('.gen-slide');

numbers.forEach((number, index) => {
  number.addEventListener('click', () => {
    removeActiveClasses();
    number.classList.add('active');
    slides.forEach(slide => slide.classList.remove('active'));
    const slideIndex = parseInt(number.getAttribute('data-slide-index'));
    slides[slideIndex].classList.add('active');
  });
});

function removeActiveClasses() {
  numbers.forEach(number => number.classList.remove('active'));
}
// nav line 

const currentLocation = window.location.href;

const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
    if (link.href === currentLocation) {
        link.classList.add('active');
    }
});

let slideRoomsImg = ['1.png', '2.png', '3.png', '4.png', '5.png', '1.png', '2.png', '3.png', '4.png'];
let currentIndex = 0;

function updateBackgroundImages() {
  for (let i = 0; i < 5; i++) {
    const divIndex = i + 1;
    const divClassName = `.sl-rooms-im${divIndex}`;
    const imageIndex = (currentIndex + i) % slideRoomsImg.length;
    const imageUrl = slideRoomsImg[imageIndex];
    document.querySelector(divClassName).style.backgroundImage = `url(${imageUrl})`;
  }
}

document.getElementById('prevButtonR').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideRoomsImg.length) % slideRoomsImg.length;
  updateBackgroundImages();
});

document.getElementById('nextButtonR').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideRoomsImg.length;
  updateBackgroundImages();
});

updateBackgroundImages();

