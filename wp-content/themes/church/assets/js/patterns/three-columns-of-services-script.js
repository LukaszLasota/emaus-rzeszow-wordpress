/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************************************************!*\
  !*** ./src/patterns/three-columns-of-services/script.ts ***!
  \**********************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.querySelector('.pattern-three-columns-of-services');
    if (!pattern) {
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
    });
    observer.observe(pattern);
});

/******/ })()
;
//# sourceMappingURL=three-columns-of-services-script.js.map?f914f9c9413029d799df