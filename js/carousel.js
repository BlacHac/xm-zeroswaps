const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const carouselWrapper = document.getElementById("carousel-wrapper");

let currentPosition = 0;
let itemWidth = 100;
let numItemsToShow = 2;
const totalItems = carousel.children.length;

function updateCarousel() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1200) {
    itemWidth = 164;
    numItemsToShow = 5;
  } else if (screenWidth >= 768) {
    itemWidth = 130;
    numItemsToShow = 4;
  } else {
    itemWidth = 100;
    numItemsToShow = 2;
  }

  const maxPosition = (totalItems - numItemsToShow) * itemWidth;

  if (currentPosition < 0) {
    currentPosition = 0;
  } else if (currentPosition > maxPosition) {
    currentPosition = maxPosition;
  }

  carouselWrapper.style.transform = `translateX(-${currentPosition}px)`;
}

function moveCarousel(direction) {
  const increment = direction === "next" ? 1 : -1;
  currentPosition += increment * numItemsToShow * itemWidth;

  updateCarousel();
}

prevButton.addEventListener("click", () => moveCarousel("prev"));
nextButton.addEventListener("click", () => moveCarousel("next"));

window.addEventListener("resize", updateCarousel);
