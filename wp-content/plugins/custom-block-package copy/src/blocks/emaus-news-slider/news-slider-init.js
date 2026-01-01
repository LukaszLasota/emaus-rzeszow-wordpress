// document.addEventListener('DOMContentLoaded', function() {
//     // Znajdujemy wszystkie slidery wiadomości na stronie
//     const newsSliders = document.querySelectorAll('.emaus-news-slider');
    
//     // Iterujemy przez każdy slider i inicjalizujemy Glide
//     newsSliders.forEach(function(slider, index) {
//       // Tworzymy unikalny ID dla każdego slidera jeśli jest ich więcej niż jeden
//       const sliderId = `emaus-news-slider-${index}`;
//       slider.id = sliderId;
      
//       // Pobieramy ustawienia z atrybutów data-*
//       const autoplay = slider.dataset.autoplay === 'true';
//       const autoplaySpeed = parseInt(slider.dataset.autoplaySpeed) || 3000;
      
//       // Inicjalizacja Glide z odpowiednimi opcjami
//       new Glide(`#${sliderId}`, {
//         type: 'carousel',
//         perView: 3,
//         gap: 30,
//         autoplay: autoplay ? autoplaySpeed : false,
//         breakpoints: {
//           768: {
//             perView: 2
//           },
//           576: {
//             perView: 1
//           }
//         }
//       }).mount();
//     });
//   });