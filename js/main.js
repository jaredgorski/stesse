// Behavior when nav menu opened
window.onload = function() {
  const menuTog = document.getElementById("burgerTog");
  let weFade = document.getElementsByClassName("canFade");
  let weClear = document.getElementsByClassName("canClear");
  let weLeave = document.getElementsByClassName("canLeave");
  let x;

  document.getElementById("burgerTog").addEventListener("click",
  function navOpen() {
    if (menuTog.checked == true) {
      document.body.classList.add("noScroll");
      document.getElementById("navOverlay").classList.add("navOpenOverlay");

      for (x = 0; x < weFade.length; x++) {
        weFade[x].classList.add("fadeOut");
      }
      for (x = 0; x < weClear.length; x++) {
        weClear[x].classList.add("clearOut");
      }
      for (x = 0; x < weLeave.length; x++) {
        weLeave[x].classList.add("iLeave");
      }
    } else {
      document.body.classList.remove("noScroll");
      document.getElementById("navOverlay").classList.remove("navOpenOverlay");

      for (x = 0; x < weFade.length; x++) {
        weFade[x].classList.remove("fadeOut");
      }
      for (x = 0; x < weClear.length; x++) {
        weClear[x].classList.remove("clearOut");
      }
      setTimeout(() => {
        for (x = 0; x < weLeave.length; x++) {
          weLeave[x].classList.remove("iLeave");
        };
      }, 240);
    };
  });
  document.getElementById("navOverlay").addEventListener("click",
  function clickOut() {
    if (menuTog.checked == true) {
      menuTog.checked = false;

      document.body.classList.remove("noScroll");
      document.getElementById("navOverlay").classList.remove("navOpenOverlay");

      for (x = 0; x < weFade.length; x++) {
        weFade[x].classList.remove("fadeOut");
      }
      for (x = 0; x < weClear.length; x++) {
        weClear[x].classList.remove("clearOut");
      }
      setTimeout(() => {
        for (x = 0; x < weLeave.length; x++) {
          weLeave[x].classList.remove("iLeave");
        };
      }, 240);
    }
  });

  const tog = document.getElementById('home-burger-toggle');
  const menu = document.getElementById('burgerMenu');

  // Set will-change when the element is hovered
  tog.addEventListener('mouseenter', hintBrowser);
  tog.addEventListener('animationEnd', removeHint);

  function hintBrowser() {
    // The optimizable properties that are going to change
    // in the animation's keyframes block
    menu.style.willChange = 'transform';
  }

  function removeHint() {
    menu.style.willChange = 'auto';
  }
};