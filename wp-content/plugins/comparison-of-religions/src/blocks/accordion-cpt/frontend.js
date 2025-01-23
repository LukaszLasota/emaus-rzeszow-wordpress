document.addEventListener('DOMContentLoaded', () => {
    const accordionToggles = document.querySelectorAll('.comparison-accordion__toggle');

    accordionToggles.forEach((toggle) => {

        toggle.addEventListener('click', () => {
            handleToggle(toggle);
            toggle.classList.toggle('comparison-accordion__toggle--underline');
        });

        toggle.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleToggle(toggle);
            }
        });
    });

    function handleToggle(toggle) {
        const contentId = toggle.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        toggle.setAttribute('aria-expanded', String(!isExpanded));

        if (!content) return;

        if (isExpanded) {

            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';

            content.offsetHeight;

            content.style.maxHeight = '0';
            content.style.opacity = '0';

            setTimeout(() => {
                content.hidden = true;
            }, 600);
        } else {
            content.hidden = false;
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
        }
    }
});
