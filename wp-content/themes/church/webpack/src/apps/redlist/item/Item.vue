<script>
import { defineComponent, ref } from 'vue';
// import Swiper JS
import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default defineComponent({
  setup() {
    let modalSwiper;

    function initModalSwiper() {
        if (!modalSwiper) {
          const slidesCount = document.querySelectorAll('.modal__swiper .swiper-slide');
          const counter = document.querySelector('#numberSlides');

          modalSwiper = new Swiper('.modal__swiper', {
              modules: [Navigation, EffectFade],
              autoHeight: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              fadeEffect: {
                crossFade: true
              },
              speed: 300, 
              slidersPerView: 1,
              effect: "fade",
              on: {
                init: function() {
                  counter.innerHTML = (this.activeIndex +  1) + '/' + slidesCount.length ;
                },
                slideChange: function() {
                  counter.innerHTML = (this.activeIndex +  1) + '/' + slidesCount.length ;
              }
            }
          });
        }
    }

    function triggerAccordeon(section){
      const selectedSection = document.querySelector('.redlist-item__section--'+section);
      selectedSection.classList.toggle('redlist-item__section--opened');
      console.log(section);
    }
    
    return {
      initModalSwiper,
      triggerAccordeon,
    } 
  }
});

</script>