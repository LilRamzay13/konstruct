(function() {
    'use strict';
  
    var btnScrollDown = document.querySelector('#scroll');
  
    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      (function scroll() {
        if (window.pageYOffset < windowCoords) {
          window.scrollBy(0, 5);
          setTimeout(scroll, 0);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();