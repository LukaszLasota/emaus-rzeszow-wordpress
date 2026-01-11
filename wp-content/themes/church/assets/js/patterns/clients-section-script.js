/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!************************************************!*\
  !*** ./src/patterns/clients-section/script.ts ***!
  \************************************************/

document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.querySelector('.pattern-clients-section');
    if (!pattern) {
        return;
    }
    const logos = pattern.querySelectorAll('.client-logo');
    logos.forEach((logo, index) => {
        setTimeout(() => {
            logo.classList.add('fade-in');
        }, index * 100);
    });
});

/******/ })()
;
//# sourceMappingURL=clients-section-script.js.map?d5a5e9a1a7e7e8041647