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
const heroImage = document.querySelector(".hero-wrapper-image-wrapper-image");
const leftHeroButtonArrow = document.querySelector(
  ".hero-wrapper-content-wrapper-carousel-left"
);
const rightHeroButtonArrow = document.querySelector(
  ".hero-wrapper-content-wrapper-carousel-right"
);
const leftHeroNavButton = document.querySelector(
  ".hero-wrapper-content-wrapper-carousel-left"
);
const rightHeroNavButton = document.querySelector(
  ".hero-wrapper-content-wrapper-carousel-right"
);
const cards = [
  firstCardContent,
  secondCardContent,
  thirdCardContent,
  fourthCardContent,
  fifthCardContent,
  sixthCardContent,
];
// console.log(cards);
let currentCardIndex = 0;

//functions

// leftHeroButtonArrow.addEventListener("click", () => {
//   changeCardBackward();
// });
rightHeroButtonArrow.addEventListener("click", () => {
  console.log("Current index is: ", currentCardIndex);
  changeCardForward(
    heroHeader,
    heroDescription,
    heroImage,
    currentCardIndex,
    rightHeroNavButton,
    cards
  );
});
const changeCardForward = (
  heroHeader,
  heroDescription,
  heroImage,
  currentIndex,
  button,
  cards
) => {
  if (currentIndex < cards.length - 1) {
    currentCardIndex++;
    heroHeader.textContent = cards[currentIndex][0];
    heroDescription.textContent = cards[currentIndex][1];
    heroImage.src = cards[currentIndex][2];

    // change looks
    // changeProgress();
  } else {
    // disable button
    button.classList.add(
      "hero-wrapper-content-wrapper-carousel-right-disabled"
    );
  }
};
