// Behavior when nav menu opened
window.onload = function() {
  document.getElementById("burgerTog").addEventListener("click",
  function stopScroll() {
    const menuTog = document.getElementById("burgerTog");

    let weFade = document.getElementsByClassName("canFade");
    let weClear = document.getElementsByClassName("canClear");
    let weLeave = document.getElementsByClassName("canLeave");
    let x;
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
};