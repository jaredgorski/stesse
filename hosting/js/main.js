// Behavior when nav menu opened and closed
const menuTog = document.getElementById("burgerTog");
let weFade = document.getElementsByClassName("canFade");
let weClear = document.getElementsByClassName("canClear");
let weLeave = document.getElementsByClassName("canLeave");
let classInstance;

document.getElementById("burgerTog").addEventListener("click",
function navOpen() {
  if (menuTog.checked == true) {
    document.body.classList.remove("parallax-bodyscroll");
    document.body.classList.add("noScroll");
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
  } else {
    document.body.classList.add("parallax-bodyscroll");
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
  };
});
document.getElementById("navOverlay").addEventListener("click",
function clickOut() {
  if (menuTog.checked == true) {
    menuTog.checked = false;

    document.body.classList.add("parallax-bodyscroll");
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
  }
});






// Insert create user method below
var auth = WeDeploy.auth('auth-stesse.wedeploy.io');

function submitForm() {
  auth.createUser({
    email: user.email.value,
    name: user.name.value,
    password: user.password.value
  })
  .then(function() {
    alert('Account successfully created!');
    signIn();
    user.reset();
  })
  .catch(function() {
    alert('Sign-up failed. Try another email.');
    user.reset();
  });
}
// Insert create user method above


// Insert sign-in method below
function signIn() {
  auth.signInWithEmailAndPassword(user.email.value, user.password.value)
  .then(function() {
    document.location.href = '../pages/index.html';
  })
  .catch(function() {
    alert('Sign-in failed. Try another email/password.');
  });
}
// Insert sign-in method above


// Insert current user selector below
if (auth.currentUser) {
    document.querySelector('.username').innerHTML = auth.currentUser.name;
}
// Insert current user selector above


function out() {
  auth.signOut()
  .then(() => {
    location.href = '../pages/index.html';
  });
}