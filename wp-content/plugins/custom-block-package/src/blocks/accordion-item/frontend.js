// document.addEventListener('DOMContentLoaded', () => {
//     const accordions = document.querySelectorAll('.accordion__item');

//     accordions.forEach((accordion) => {
//         const title = accordion.querySelector('.accordion__title');
//         const content = accordion.querySelector('.accordion__content');

//         const toggleAccordion = () => {
//             const isActive = accordion.classList.contains('accordion__item--active');

//             if (isActive) {
//                 accordion.classList.remove('accordion__item--active');
//                 title.setAttribute('aria-expanded', 'false');
//                 content.style.maxHeight = null;
//                 content.hidden = true;
//             } else {
//                 accordion.classList.add('accordion__item--active');
//                 title.setAttribute('aria-expanded', 'true');
//                 content.style.maxHeight = content.scrollHeight + 'px';
//                 content.hidden = false;
//             }
//         };

//         title.addEventListener('click', toggleAccordion);

//         title.addEventListener('keydown', (event) => {
//             if (event.key === 'Enter' || event.key === ' ') {
//                 event.preventDefault();
//                 toggleAccordion();
//             }
//         });
//     });
// });
