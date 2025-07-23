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

const changeConicProgress = () => {
  document.documentElement.style.setProperty(
    "--slider-progress-deg",
    `${conicProgressCount()}deg`
  );
};
const moveSlideLeft = () => {
  console.log("conic progress count is: ", conicProgressCount());

  if (Math.abs(slidePosition) > 0) {
    slidePosition++;
    const rightHeroButtons = document.querySelectorAll(
      ".hero-wrapper-content-wrapper-carousel-right"
    );
    rightHeroButtons.forEach((button) => {
      button.classList.remove(
        "hero-wrapper-content-wrapper-carousel-right-disabled"
      );
    });
    heroWrapperList.style.marginLeft = slideWidth * slidePosition + "px";
    let indexOfFirstFalse = slidesLoaded.indexOf(false);
    console.log(
      `slide position is ${Math.abs(
        slidePosition
      )} and indexOfFirstFalse is ${indexOfFirstFalse}`
    );
    if (Math.abs(slidePosition) == indexOfFirstFalse - 1) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = slides[indexOfFirstFalse];
      const newSlide = tempDiv.firstElementChild;
      heroWrapperList.appendChild(newSlide);
      slidesLoaded[indexOfFirstFalse] = true;
    }
    // changeContent();
    changeConicProgress();

    console.log(
      `slidePOsition is ${
        Math.abs(slidePosition) - 1
      } and slides length -1 is ${slides.length - 2}`
    );
    if (Math.abs(slidePosition) == 0) {
      const leftHeroButtons = document.querySelectorAll(
        ".hero-wrapper-content-wrapper-carousel-left"
      );
      leftHeroButtons.forEach((button) => {
        button.classList.add(
          "hero-wrapper-content-wrapper-carousel-left-disabled"
        );
      });
    }
  }
};
const moveSlideRight = () => {
  console.log("conic progress count is: ", conicProgressCount());
  if (Math.abs(slidePosition) < slides.length - 1) {
    slidePosition--;
    const leftHeroButtons = document.querySelectorAll(
      ".hero-wrapper-content-wrapper-carousel-left"
    );
    leftHeroButtons.forEach((button) => {
      button.classList.remove(
        "hero-wrapper-content-wrapper-carousel-left-disabled"
      );
    });
    heroWrapperList.style.marginLeft = slideWidth * slidePosition + "px";
    let indexOfFirstFalse = slidesLoaded.indexOf(false);
    console.log(
      `slide position is ${Math.abs(
        slidePosition
      )} and indexOfFirstFalse is ${indexOfFirstFalse}`
    );
    if (Math.abs(slidePosition) == indexOfFirstFalse - 1) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = slides[indexOfFirstFalse];
      const newSlide = tempDiv.firstElementChild;
      heroWrapperList.appendChild(newSlide);
      slidesLoaded[indexOfFirstFalse] = true;
    }
    // changeContent();
    changeConicProgress();

    console.log(
      `slidePOsition is ${
        Math.abs(slidePosition) - 1
      } and slides length -1 is ${slides.length - 2}`
    );
    if (Math.abs(slidePosition) - 1 == slides.length - 2) {
      const rightHeroButtons = document.querySelectorAll(
        ".hero-wrapper-content-wrapper-carousel-right"
      );
      rightHeroButtons.forEach((button) => {
        button.classList.add(
          "hero-wrapper-content-wrapper-carousel-right-disabled"
        );
      });
    }
  }
};
//fixed problem with modules XD
window.moveSlideLeft = moveSlideLeft;
window.moveSlideRight = moveSlideRight;

//
