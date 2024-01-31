export class HamburgerMenu {
    private hamburger: HTMLElement | null;
    private siteNavNavigation: HTMLElement | null;
    private siteNav: HTMLElement | null;
    private scrollPos: number;
    private actualWidth: number;
  
    constructor() {
      this.hamburger = document.querySelector('.hamburger');
      this.siteNavNavigation = document.querySelector('.site-nav__navigation');
      this.siteNav = document.querySelector('.site-nav');
      this.scrollPos = window.scrollY;
      this.actualWidth = document.body.clientWidth;
  
      this.init();
    }
  
    private init(): void {
        this.hamburger?.addEventListener('click', this.handleClick);
        window.addEventListener('scroll', this.updateMenuBackground);
        this.updateMenuBackground();
    }

    private handleClick = (): void => {
      this.hamburger?.classList.toggle('hamburger--active');
      this.hamburger?.setAttribute(
        'aria-expanded',
        `${this.hamburger?.classList.contains('hamburger--active')}`
      );
      this.siteNavNavigation?.classList.toggle('site-nav__navigation--active');
  
      if (this.scrollPos < 10) {
        this.siteNav?.classList.add('site-nav--bg');
      }
    };
  
    private addClassOnScroll = (): void => {
      this.siteNav?.classList.add('site-nav--bg');
    };
  
    private removeClassOnScroll = (): void => {
      this.siteNav?.classList.remove('site-nav--bg');
    };
  
    private updateMenuBackground = (): void => {
      this.scrollPos = window.scrollY;
      if (this.scrollPos > 10 || this.actualWidth < 770) {
        this.addClassOnScroll();
      } else if (this.scrollPos < 10) {
        this.removeClassOnScroll();
      }
    };
  
    
  }
  