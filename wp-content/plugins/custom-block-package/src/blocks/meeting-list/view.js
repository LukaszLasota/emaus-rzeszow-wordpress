document.addEventListener("DOMContentLoaded", function () {
    const flipCards = document.querySelectorAll(".flipping-cards__card");

    // Flip card on click
    flipCards.forEach((card) => {
        card.addEventListener("click", () => {
            const innerCard = card.querySelector(".flipping-cards__card-inner");
            innerCard.classList.toggle("flipping-cards__card-inner--flipped");
        });
    });

    // Equalize card heights
    function equalizeCardHeights() {
        const cards = document.querySelectorAll(".flipping-cards__card");
        if (cards.length === 0) return;

        // Reset heights before measuring
        cards.forEach((card) => (card.style.height = "auto"));

        let maxHeight = 0;
        cards.forEach((card) => {
            if (card.offsetHeight > maxHeight) {
                maxHeight = card.offsetHeight;
            }
        });

        cards.forEach((card) => (card.style.height = `${maxHeight}px`));
    }

    equalizeCardHeights();
    window.addEventListener("resize", equalizeCardHeights);
});
