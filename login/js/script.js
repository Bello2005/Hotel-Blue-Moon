


////////////////////////////////
  // Inicializa el carrusel
  $(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });

    // Script para manejar el evento del botón
    $(document).ready(function(){
      $("#menu-toggle").click(function(){
        $("#navbar-menu").toggle();
      });
    });

    //////////

    document.addEventListener('DOMContentLoaded', function () {
      var video = document.getElementById('background-video');
      var videoContainer = document.querySelector('.video-container');
  
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
      }
  
      function handleVisibility() {
        if (isElementInViewport(videoContainer)) {
          video.play();
        } else {
          video.pause();
        }
      }
  
      // Reproducir el video cuando se desplaza hacia abajo
      document.addEventListener('scroll', handleVisibility);
  
      // Reproducir el video cuando la página se carga si el video está visible
      handleVisibility();
    });

    document.addEventListener('DOMContentLoaded', function() {
      const menuIcon = document.getElementById('menu-icon');
      const menu = document.getElementById('menu');
  
      menuIcon.addEventListener('click', function() {
          menu.style.display = (menu.style.display === 'block' ? 'none' : 'block');
      });
  
      window.addEventListener('click', function(event) {
          if (!event.target.matches('#menu-icon') && !event.target.matches('#menu')) {
              menu.style.display = 'none';
          }
      });
  });
  
  
  /*----------------------------------------------------------------*/
      /****** */

        // Script para añadir la clase 'show' cuando la sección es visible en la pantalla
    document.addEventListener("DOMContentLoaded", function() {
      var animatedSectionReykjavik = document.getElementById('animated-section-reykjavik');
      var sectionRectReykjavik = animatedSectionReykjavik.getBoundingClientRect();
      var windowHeight = window.innerHeight;

      if (sectionRectReykjavik.top < windowHeight && sectionRectReykjavik.bottom >= 0) {
        animatedSectionReykjavik.classList.add('show');
      }

      window.addEventListener('scroll', function() {
        var sectionRectReykjavik = animatedSectionReykjavik.getBoundingClientRect();
        if (sectionRectReykjavik.top < windowHeight && sectionRectReykjavik.bottom >= 0) {
          animatedSectionReykjavik.classList.add('show');
        }
      });
    });

    /****/

        // Script para añadir la clase 'show' cuando la sección es visible en la pantalla
        document.addEventListener("DOMContentLoaded", function() {
          var animatedSectionLosAngeles = document.getElementById('animated-section-losangeles');
          var sectionRectLosAngeles = animatedSectionLosAngeles.getBoundingClientRect();
          var windowHeight = window.innerHeight;
    
          if (sectionRectLosAngeles.top < windowHeight && sectionRectLosAngeles.bottom >= 0) {
            animatedSectionLosAngeles.classList.add('show');
          }
    
          window.addEventListener('scroll', function() {
            var sectionRectLosAngeles = animatedSectionLosAngeles.getBoundingClientRect();
            if (sectionRectLosAngeles.top < windowHeight && sectionRectLosAngeles.bottom >= 0) {
              animatedSectionLosAngeles.classList.add('show');
            }
          });
        });