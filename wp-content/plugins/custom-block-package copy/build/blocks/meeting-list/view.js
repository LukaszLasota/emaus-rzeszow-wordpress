/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/blocks/meeting-list/view.js ***!
  \*****************************************/
document.addEventListener("DOMContentLoaded", function () {
  function initializeFlipCardEffect() {
    const flipCards = document.querySelectorAll(".flipping-cards__card");
    flipCards.forEach(card => {
      card.addEventListener("click", () => {
        const innerCard = card.querySelector(".flipping-cards__card-inner");
        innerCard.classList.toggle("flipping-cards__card-inner--flipped");
      });
    });
    const cards = document.querySelectorAll(".flipping-cards__card");
    if (cards.length > 0) {
      let maxHeight = 0;
      cards.forEach(card => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });
      cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    }
  }
  initializeFlipCardEffect();
  if (window.wp && window.wp.data) {
    wp.data.subscribe(() => {
      initializeFlipCardEffect();
    });
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map