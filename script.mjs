import {
  firstCardContent,
  secondCardContent,
  thirdCardContent,
  fourthCardContent,
  fifthCardContent,
  sixthCardContent,
} from "./hero_cards/hero_cards.mjs";
const heroHeader = document.querySelector(
  ".hero-wrapper-content-wrapper-description-header"
);
const heroDescription = document.querySelector(
  ".hero-wrapper-content-wrapper-description-para"
);
const heroImage = document.querySelector(".hero-wrapper-image");
const leftHeroButton = document.querySelector(
  ".hero-wrapper-content-wrapper-carousel-left"
);
const rightHeroButton = document.querySelector(
  ".hero-wrapper-content-wrapper-carousel-right"
);
const heroWrapperList = document.querySelector(".hero-wrapper-list");
const slides = [
  firstCardContent,
  secondCardContent,
  thirdCardContent,
  fourthCardContent,
  fifthCardContent,
  sixthCardContent,
];
let slidePosition = 0;
let slideWidth = 1440;
let sliderProgressInterval = Math.floor(360 / slides.length);
let conicProgressBarStartPosition = 360 - sliderProgressInterval;
let slidesLoaded = [];

//functions
slides.forEach((slide) => slidesLoaded.push(false));
slidesLoaded[0] = true;
slidesLoaded[1] = true;
console.log("Loaded slides array is ", slidesLoaded);
console.log("Index of first false is: ", slidesLoaded.indexOf(false));
const conicProgressCount = () => {
  return conicProgressBarStartPosition - sliderProgressInterval * slidePosition;
};
document.documentElement.style.setProperty(
  "--slider-progress-deg",
  `${conicProgressBarStartPosition}deg`
);

const changeContent = () => {
  heroHeader.textContent = slides[slidePosition][0];
  heroDescription.textContnet = slides[slidePosition][1];
  heroImage.src = slides[slidePosition][2];
};
const changeConicProgress = () => {
  document.documentElement.style.setProperty(
    "--slider-progress-deg",
    `${conicProgressCount()}deg`
  );
};
const moveSlideLeft = () => {
  if (slidePosition > 0) {
    slidePosition--;
    rightHeroButton.classList.remove(
      "hero-wrapper-content-wrapper-carousel-right-disabled"
    );
    changeContent();
    changeConicProgress();
    if (slidePosition == 0) {
      leftHeroButton.classList.add(
        "hero-wrapper-content-wrapper-carousel-left-disabled"
      );
    }
  }
};
const moveSlideRight = () => {
  if (slidePosition < slides.length - 1) {
    slidePosition++;
    leftHeroButton.classList.remove(
      "hero-wrapper-content-wrapper-carousel-left-disabled"
    );
    heroWrapperList.style.marginRight = slideWidth * slidePosition + "px";
    let indexOfFirstFalse = slidesLoaded.indexOf(false);
    if (slidePosition == indexOfFirstFalse - 2) {
      heroWrapperList.appendChild(slides[indexOfFirstFalse]);
      slidesLoaded[indexOfFirstFalse] = true;
    }
    // changeContent();
    changeConicProgress();
    if (slidePosition == slides.length - 1) {
      rightHeroButton.classList.add(
        "hero-wrapper-content-wrapper-carousel-right-disabled"
      );
    }
  }
};
//fixed problem with modules XD
window.moveSlideLeft = moveSlideLeft;
window.moveSlideRight = moveSlideRight;

//
