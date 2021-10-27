

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
    $(document).ready(function(jQuery) {
      $("#phone").mask("+38(999) 999-99-99");
    });
    const errNum = document.querySelector(".pop-up-solor__err-phone");
    const errName = document.querySelector(".pop-up-solor__name");
    const notHones = document.querySelector(".pop-up-solor__not-phone"); 
    if(event.target.classList.contains("pop-up-solor__btn-input"))
      if (event.target instanceof HTMLInputElement) {
        const telVal = document.querySelector(".tel-val-solar").value;
        console.log(telVal);
        const firstNum = (telVal+'')[4];
        const nameInfo = document.querySelector(".name-info-solar").value;
        if (nameInfo === '') {
          errName.style.display = "block";
        }  else {
          errName.style.display = "none";
        } if(telVal == false) {
            notHones.style.display = "block";
            console.log('1');
        } if (telVal != false) {
          notHones.style.display = "none";
          if(firstNum != "0") {
            errNum.style.display = "block";
          }
        }
        else {
          errNum.style.display = "none";
        }
      }
    if (event.target.classList.contains("btn-js")) {
      popup.add("active-solar");
    
    } else if (event.target.classList.contains("pop-up-solor__btn") || event.target.classList.contains("pop-up-solor-pos-act")) {
      popup.remove("active-solar");
      errNum.style.display = "none";
      errName.style.display = "none";
      }
    }
  }
