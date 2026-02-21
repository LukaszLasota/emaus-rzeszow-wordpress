/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/blocks/meeting-list/view.js ***!
  \*****************************************/
document.addEventListener("DOMContentLoaded", function () {
  const flipCards = document.querySelectorAll(".flipping-cards__card");
  function toggleCard(card) {
    const innerCard = card.querySelector(".flipping-cards__card-inner");
    const front = card.querySelector(".flipping-cards__card-front");
    const back = card.querySelector(".flipping-cards__card-back");
    const isFlipped = innerCard.classList.toggle("flipping-cards__card-inner--flipped");
    card.setAttribute("aria-expanded", isFlipped ? "true" : "false");

    // Hide the non-visible side from assistive technologies.
    if (front) front.setAttribute("aria-hidden", isFlipped ? "true" : "false");
    if (back) back.setAttribute("aria-hidden", isFlipped ? "false" : "true");
  }
  flipCards.forEach(card => {
    // Click support
    card.addEventListener("click", () => toggleCard(card));

    // Keyboard support (Enter and Space)
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleCard(card);
      }
    });
  });

  // Equalize card heights
  function equalizeCardHeights() {
    const cards = document.querySelectorAll(".flipping-cards__card");
    if (cards.length === 0) return;

    // Reset heights before measuring
    cards.forEach(card => card.style.height = "auto");
    let maxHeight = 0;
    cards.forEach(card => {
      if (card.offsetHeight > maxHeight) {
        maxHeight = card.offsetHeight;
      }
    });
    cards.forEach(card => card.style.height = `${maxHeight}px`);
  }
  equalizeCardHeights();
  window.addEventListener("resize", equalizeCardHeights);
});
/******/ })()
;
//# sourceMappingURL=view.js.map