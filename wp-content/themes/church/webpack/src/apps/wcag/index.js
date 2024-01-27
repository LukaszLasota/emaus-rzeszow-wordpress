export function initWCAG() {
  var headerTop = document.querySelector('.header-top');

  if (!headerTop) return;

  var wcagWrapper = document.getElementById('wcag-wrapper');

  var computedStyle = window.getComputedStyle(headerTop);
  var display = computedStyle.getPropertyValue('display');

  if (display == 'none') {
      wcagWrapper.remove();;
  }
}

export function initFontSize() {
  const standardSize = document.querySelector(".a__text-size-normal");
  const mediumSize = document.querySelector(".a__text-size-big");
  const largeSize = document.querySelector(".a__text-size-biggest");
  const htmlElement = document.querySelector("html");
  const bodyElement = document.querySelector("body");
  const bodyFontSize = window.getComputedStyle(htmlElement).fontSize;

  if (!standardSize) return;

  function changeFontSize(multiplier, size, style) {
    let normalSize = bodyFontSize;
    const newFontSize = parseFloat(normalSize) * multiplier;
    bodyElement.classList.add('big-fonts');

    if (newFontSize <= 33) {
      htmlElement.style.fontSize = `${newFontSize}px`;
    }

    window.localStorage.setItem("wcagFontSize", size);
    window.localStorage.setItem("wcagFontSizeStyle", style);

    const headerLinks = document.querySelectorAll('.wcag__header--ul .wcag__header--a');

    headerLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    this.classList.add('active');
  }

  standardSize.addEventListener("click", function() {
    htmlElement.style.fontSize = bodyFontSize;
    document.body.classList.remove("big-fonts");
    window.localStorage.setItem("wcagFontSize", "normal");
    window.localStorage.setItem("wcagFontSizeStyle", 'first');

    headerLinks[0].classList.add('active');
  });

  mediumSize.addEventListener("click", function() {
    changeFontSize.call(this, 1.05, "medium", 'second');
  });

  largeSize.addEventListener("click", function() {
    changeFontSize.call(this, 1.10, "large", 'third');
  });

  function rememberFontSize() {
    window.addEventListener(
      "load",
      function() {
        let fontSize = window.localStorage.getItem("wcagFontSize");
        let fontSizeStyle = window.localStorage.getItem("wcagFontSizeStyle");
        if (fontSize == "large") {
          changeFontSize.call(largeSize, 1.10, "large", 'third');
        } else if (fontSize == "medium") {
          changeFontSize.call(mediumSize, 1.05, "medium", 'second');
        } else {
          htmlElement.style.fontSize = bodyFontSize;
          window.localStorage.setItem("wcagFontSize", "normal");
          window.localStorage.setItem("wcagFontSizeStyle", 'first');
          headerLinks[0].classList.add('active');
        }
      },
      false
    );
  }

  const headerLinks = document.querySelectorAll('.wcag__header--ul .wcag__header--a');

  headerLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      const closestUl = this.closest('ul');
      const siblingLinks = closestUl.querySelectorAll('li .active');

      siblingLinks.forEach(function(siblingLink) {
        siblingLink.classList.remove('active');
      });

      this.classList.add('active');
    });
  });

  rememberFontSize();
}

export function initDarkMode() {
    const bodyElement = document.querySelector("body");
    const siteColor = window.localStorage.getItem("siteColor");
    const switchColorBtn = document.querySelector("#my_switcher_color");
    const iconswitchColor = document.querySelector("#my_switcher_color .icon");

    if (siteColor == 'active-dark-mode') {
      bodyElement.classList.remove("active-light-mode");
      bodyElement.classList.add("active-dark-mode");
      iconswitchColor.classList.add('icon--contrast-white');
      iconswitchColor.classList.remove('icon--contrast-black');
    }

    function switchColor() {
      const siteColor = window.localStorage.getItem("siteColor");
      if (siteColor == 'active-dark-mode') {
        bodyElement.classList.remove("active-dark-mode");
        bodyElement.classList.add("active-light-mode");
        window.localStorage.setItem("siteColor", "active-light-mode");
        iconswitchColor.classList.remove('icon--contrast-white');
        iconswitchColor.classList.add('icon--contrast-black');
      } else {
        bodyElement.classList.remove("active-light-mode");
        bodyElement.classList.add("active-dark-mode");
        window.localStorage.setItem("siteColor", "active-dark-mode");
        iconswitchColor.classList.add('icon--contrast-white');
        iconswitchColor.classList.remove('icon--contrast-black');
      }
    }

    switchColorBtn.addEventListener("click", switchColor);
}