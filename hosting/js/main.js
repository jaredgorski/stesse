// Behavior when nav menu opened and closed
const menuTog = document.getElementById("burgerTog");
let weFade = document.getElementsByClassName("canFade");
let weClear = document.getElementsByClassName("canClear");
let weLeave = document.getElementsByClassName("canLeave");
let stopScroll = document.getElementsByClassName("stopScroll");
let classInstance;

document.getElementById("burgerTog").addEventListener("click",
function navOpen() {
  if (menuTog.checked == true) {
    document.getElementById("navOverlay").classList.add("navOpenOverlay");

    for (classInstance = 0; classInstance < weFade.length; classInstance++) {
      weFade[classInstance].classList.add("fadeOut");
    }
    for (classInstance = 0; classInstance < weClear.length; classInstance++) {
      weClear[classInstance].classList.add("clearOut");
    }
    for (classInstance = 0; classInstance < weLeave.length; classInstance++) {
      weLeave[classInstance].classList.add("iLeave");
    }
    for (classInstance = 0; classInstance < stopScroll.length; classInstance++) {
      stopScroll[classInstance].classList.add("noScroll");
    }
  } else {
    document.body.classList.remove("noScroll");
    document.getElementById("navOverlay").classList.remove("navOpenOverlay");

    for (classInstance = 0; classInstance < weFade.length; classInstance++) {
      weFade[classInstance].classList.remove("fadeOut");
    }
    for (classInstance = 0; classInstance < weClear.length; classInstance++) {
      weClear[classInstance].classList.remove("clearOut");
    }
    setTimeout(() => {
      for (classInstance = 0; classInstance < weLeave.length; classInstance++) {
        weLeave[classInstance].classList.remove("iLeave");
      };
    }, 240);
    for (classInstance = 0; classInstance < stopScroll.length; classInstance++) {
      stopScroll[classInstance].classList.remove("noScroll");
    }
  };
});
document.getElementById("navOverlay").addEventListener("click",
function clickOut() {
  if (menuTog.checked == true) {
    menuTog.checked = false;

    document.body.classList.remove("noScroll");
    document.getElementById("navOverlay").classList.remove("navOpenOverlay");

    for (classInstance = 0; classInstance < weFade.length; classInstance++) {
      weFade[classInstance].classList.remove("fadeOut");
    }
    for (classInstance = 0; classInstance < weClear.length; classInstance++) {
      weClear[classInstance].classList.remove("clearOut");
    }
    setTimeout(() => {
      for (classInstance = 0; classInstance < weLeave.length; classInstance++) {
        weLeave[classInstance].classList.remove("iLeave");
      };
    }, 240);
    for (classInstance = 0; classInstance < stopScroll.length; classInstance++) {
      stopScroll[classInstance].classList.remove("noScroll");
    }
  }
});