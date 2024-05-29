const carousel = document.querySelector('.carousel');
const cards = carousel.querySelectorAll('.card-container');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex--;
  carousel.scrollLeft = cards[currentIndex].offsetLeft;
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  carousel.scrollLeft = cards[currentIndex].offsetLeft;
});