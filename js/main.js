

window.onload = function() {
  
    const animItems = document.querySelectorAll('.js-div');
    if(animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
        for (let index = 0; index < animItems.length; index++ ){
          const animItem = animItems[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;
        
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_no-anim-solar'))
          animItem.classList.remove('_active');
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollY || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop, left: rect.left + scrollLeft
      }
    }
  }  
  animOnScroll();
  main.onclick = function (event) {
    const popup = document.querySelector(".pop-up-solor-pos-act").classList;
    if (event.target.classList.contains("btn-js")) {
      popup.add("active-solar");
      $( document ).ready(function() {
        $(".btn-js").click(function() {
          const $a = $(".pop-up-solor-pos-act");
          $a.fadeIn();
        });
      });
    
    } else if (event.target.classList.contains("pop-up-solor__btn") || event.target.classList.contains("pop-up-solor-pos-act")) {
      popup.remove("active-solar")
      $( document ).ready(function() {
        $(".pop-up-solor-pos-act").click(function () {
          const $a = $(".pop-up-solor-pos-act");
          $a.fadeOut();
        });
      });
      
    }
  }
}
