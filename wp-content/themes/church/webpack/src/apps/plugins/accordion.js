
export function initAccordions() {
    const accordions = document.querySelectorAll(".accordion");
    if (!accordions.length) return;

    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.add("accordion__active");
        content.style.maxHeight = content.scrollHeight + "px";
    }

    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.remove("accordion__active");
        content.style.setProperty("max-height", null);
    }

    if (accordions.length) {
        accordions.forEach(accordion => {
            const intro = accordion.querySelector(".accordion__intro");
            const content = accordion.querySelector(".accordion__content");

            if (accordion.classList.contains('accordion__active'))
                openAccordion(accordion);

            intro.onclick = () => {
                if (content.style.maxHeight) {
                    closeAccordion(accordion);
                } else {
                    // accordions.forEach((accordion) => closeAccordion(accordion));
                    openAccordion(accordion);
                }
            };
        });
    }
}
